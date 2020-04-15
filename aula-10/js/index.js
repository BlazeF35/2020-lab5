let lineIndexEditing = -1;

start();

function start() {
    let btn = document.getElementById('save');
    btn.onclick = function() {
        saveNewStudent();
    };
}

function saveNewStudent() {
    let inputName = document.getElementById('name');
    let inputEmail = document.getElementById('email');
    let inputCpf = document.getElementById('cpf');

    if (isAllFieldsValid(inputName, inputEmail, inputCpf) && isCpfNotDuplicated(inputCpf.value)) {
        
        if (lineIndexEditing === -1) {
            let newLine = createNewLine();
            createNewTd(newLine, inputName.value);
            createNewTd(newLine, inputEmail.value);
            createNewTd(newLine, inputCpf.value);
            createNewInputButton(newLine, 'Editar', editRow);
            createNewInputButton(newLine, 'Excluir', deleteRow);
            addNewRow(newLine);
        } else {
            updateLineValues(inputName, inputEmail, inputCpf);
            lineIndexEditing = -1;
        }
        
        clearFields(inputName, inputEmail, inputCpf);
    }
}

function isCpfNotDuplicated(novoCpf) {
    let table = document.getElementById('alunos_cadastrados');
    let tbody = table.tBodies[0];
    
    for (let i = 0; i < tbody.childNodes.length; i++) {
        let tr = tbody.childNodes[i];
        let td = tr.childNodes[2];
        if (td.innerHTML === novoCpf && tr.rowIndex !== lineIndexEditing) {
            alert('Não pode ter CPF duplicado!');
            return false;
        }
    }

    return true;
}

function clearFields(inputName, inputEmail, inputCpf) {
    inputName.value = '';
    inputEmail.value = '';
    inputCpf.value = '';
}

function isAllFieldsValid(inputName, inputEmail, inputCpf) {
    let isAllValid = true;
    if (inputName.value.trim() === '') {
        alert('Por favor preencha o campo nome');
        isAllValid = false;
    }
    if (inputEmail.value.trim() === '') {
        alert('Por favor preencha o campo e-mail');
        isAllValid = false;
   }
   if (inputCpf.value.trim() === '') {
       alert('Por favor preencha o campo CPF');
       isAllValid = false;
   }
   return isAllValid;
}

function createNewLine() {
    let newElement = document.createElement('tr');
    return newElement;
}

function createNewTd(row, content) {
    let newElement = document.createElement('td');
    newElement.innerHTML = content;
    row.appendChild(newElement);
}

function addNewRow(newRow) {
    let table = document.getElementById('alunos_cadastrados');
    let tbody = table.tBodies[0];
    tbody.appendChild(newRow);
}

function createNewInputButton(row, text, onclickMethodCallback) {
    let inputButton = document.createElement('input');
    inputButton.value = text;
    inputButton.type = 'button';
    inputButton.onclick = onclickMethodCallback;

    let newElement = document.createElement('td');
    newElement.appendChild(inputButton);
    row.appendChild(newElement);
}

function deleteRow() {
    let td = this.parentNode;
    let tr = td.parentNode;
    let name = tr.childNodes[0].innerHTML;
    if (confirm('Deseja remover o aluno(a) ' + name + '?')) {
        let tbody = tr.parentNode;
        tbody.removeChild(tr);
    }
}

function editRow() {
    let td = this.parentNode;
    let tr = td.parentNode;
    lineIndexEditing = tr.rowIndex;

    let inputName = document.getElementById('name');
    let inputEmail = document.getElementById('email');
    let inputCpf = document.getElementById('cpf');

    inputName.value = tr.childNodes[0].innerHTML;
    inputEmail.value = tr.childNodes[1].innerHTML;
    inputCpf.value = tr.childNodes[2].innerHTML;
}

function updateLineValues(inputName, inputEmail, inputCpf) {
    let table = document.getElementById('alunos_cadastrados');
    let tbody = table.tBodies[0];
    
    let tr = tbody.childNodes[lineIndexEditing - 1];
    tr.childNodes[0].innerHTML = inputName.value;
    tr.childNodes[1].innerHTML = inputEmail.value;
    tr.childNodes[2].innerHTML = inputCpf.value;
}
