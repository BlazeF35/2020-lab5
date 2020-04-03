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