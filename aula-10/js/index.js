let lineIndexEditing = -1;
let allStudents = [];
const localStorageKey = 'student_list';

start();

function start() {
    loadOldData();

    let btn = document.getElementById('save');
    btn.onclick = function() {
        saveNewStudent();
    };
}

function saveNewStudent() {
    let inputCpf = document.getElementById('cpf');
    let inputs = createInputArray();

    if (isAllFieldsValid(inputs) && isCpfNotDuplicated(inputCpf.value)) {
        let student = createStudentObject(inputs);
        
        if (lineIndexEditing === -1) {
            allStudents.push(student);
            
        } else {
            updateAllStudentsList(student);
            lineIndexEditing = -1;
        }
        clearTable();
        populateTable();
        clearFields(inputs);
        saveDataInLocalStorage();
    }
}

function populateTable() {
    let tbody = getTbody();

    allStudents.forEach(function(student) {
        let newLine = createNewLine();
        tbody.appendChild(newLine);
        createNewTd(newLine, student.name);
        createNewTd(newLine, student.email);
        createNewTd(newLine, student.cpf);
        createNewTd(newLine, student.telefone);
        createNewInputButton(newLine, 'Editar', editRow);
        createNewInputButton(newLine, 'Excluir', deleteRow);
    });
}

function createStudentObject(inputs) {
    let student = {};

    inputs.forEach(function(element) {
        student[element.id] = element.value;
    });

    return student;
}

function isCpfNotDuplicated(novoCpf) {
    let index = findStudentByCpf(novoCpf);
    if (index > -1 && (lineIndexEditing === -1 || (lineIndexEditing - 1) !== index)) {
        alert('Não pode ter CPF duplicado!');
        return false;
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
    return document.createElement('tr');
}

function createNewTd(row, content) {
    let newElement = document.createElement('td');
    newElement.innerHTML = content;
    row.appendChild(newElement);
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
        deleteStudentInArray(tr.childNodes[2].innerHTML);
        saveDataInLocalStorage();
        appendMessageEmptyTable();
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

function appendMessageEmptyTable() {
    if (allStudents.length === 0) {
        let tbody = getTbody();
        let tr = createNewLine();
        let td = document.createElement('td');
        td.colSpan = 6;
        td.innerHTML = 'Nenhum aluno cadastro ainda!';
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

function clearTable() {
    let tbody = getTbody();
    tbody.innerHTML = '';
}

function updateAllStudentsList(student) {
    let oldStudent = allStudents[lineIndexEditing - 1];
    oldStudent.name = student.name;
    oldStudent.email = student.email;
    oldStudent.cpf = student.cpf;
    oldStudent.telefone = student.telefone;
}

function deleteStudentInArray(cpf) {
    let index = findStudentByCpf(cpf);
    allStudents.splice(index, 1);
}

function findStudentByCpf(cpf) {
    return allStudents.findIndex(element => element.cpf === cpf);
}

function saveDataInLocalStorage() {
    let dataString = JSON.stringify(allStudents);
    localStorage.setItem(localStorageKey, dataString);
}

function loadOldData() {
    let dataString = localStorage.getItem(localStorageKey);
    if (dataString) {
        allStudents = JSON.parse(dataString);
        populateTable();
    }

    appendMessageEmptyTable();
}
