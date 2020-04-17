let lineIndexEditing = -1;

start();

function start() {
    let btn = document.getElementById('save');
    btn.onclick = function() {
        saveNewStudent();
    };
}

function saveNewStudent() {
    let inputCpf = document.getElementById('cpf');
    let inputs = createInputArray();

    if (isAllFieldsValid(inputs) && isCpfNotDuplicated(inputCpf.value)) {
        
        if (lineIndexEditing === -1) {
            let newLine = createNewLine();
            createTds(newLine, inputs);
            createNewInputButton(newLine, 'Editar', editRow);
            createNewInputButton(newLine, 'Excluir', deleteRow);
            addNewRow(newLine);
        } else {
            updateLineValues(inputs);
            lineIndexEditing = -1;
        }
        
        clearFields(inputs);
    }
}

function isCpfNotDuplicated(novoCpf) {
    let tbody = getTbody();
    
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

function clearFields(inputs) {
    inputs.forEach(function(input) {
        input.value = '';
    });
}

function isAllFieldsValid(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            alert('Por favor, preencha todos os campos!');
            return false;
        }
    }

    return true;
}

function createNewLine() {
    let newElement = document.createElement('tr');
    return newElement;
}

function createTds(row, inputs) {
    inputs.forEach(function(input) {
        createNewTd(row, input.value);
    });
}

function createNewTd(row, content) {
    let newElement = document.createElement('td');
    newElement.innerHTML = content;
    row.appendChild(newElement);
}

function addNewRow(newRow) {
    let tbody = getTbody();
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

    let inputs = createInputArray();

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = tr.childNodes[i].innerHTML;
    }
}

function updateLineValues(inputs) { 
    let tbody = getTbody();
    let tr = tbody.childNodes[lineIndexEditing - 1];

    for (let i = 0; i < inputs.length; i++) {
        tr.childNodes[i].innerHTML = inputs[i].value;
    }
}

function getTbody() {
    let table = document.getElementById('alunos_cadastrados');
    return table.tBodies[0];
}

function createInputArray() {
    let ids = ['name', 'email', 'cpf', 'telefone'];
    let inputs = [];

    ids.forEach(function (id) {
        inputs.push(document.getElementById(id));
    });
    return inputs;
}