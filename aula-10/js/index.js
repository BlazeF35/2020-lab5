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

    let newLine = createNewLine();
    createNewTd(newLine, inputName.value);
    createNewTd(newLine, inputEmail.value);
    createNewTd(newLine, inputCpf.value);
    //
    createNewInputButton(newLine, 'Editar', editRow);
    createNewInputButton(newLine, 'Excluir', deleteRow);
    //
    addNewRow(newLine);
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
    let tbody = tr.parentNode;
    tbody.removeChild(tr);
}

function editRow() {
    console.log('To na função de edit!');
}
