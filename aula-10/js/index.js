let lineIndexEditing = -1;
let allStudents = [];

start();

function start() {
    appendMessageEmptyTable();

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
            deleteEmptyLineMessage();
            let newLine = createNewLine();
            createTds(newLine, inputs);
            createNewInputButton(newLine, 'Editar', editRow);
            createNewInputButton(newLine, 'Excluir', deleteRow);
            addNewRow(newLine);
            allStudents.push(student);

        } else {
            updateLineValues(inputs);
            updateAllStudentsList(student);
            lineIndexEditing = -1;
        }
        
        clearFields(inputs);
    }
}

function createStudentObject(inputs) {
    let student = {};

    inputs.forEach(function(element) {
        student[element.id] = element.value;
    });

    return student;
}

function isCpfNotDuplicated(novoCpf) {
    let tbody = getTbody();
    
    for (let i = 0; i < tbody.childNodes.length; i++) {
        let tr = tbody.childNodes[i];
        let td = tr.childNodes[2];
        if (tr.id !== 'emptyLine' && td.innerHTML === novoCpf && tr.rowIndex !== lineIndexEditing) {
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
        deleteStudentInArray(tr.childNodes[2].innerHTML);
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

function appendMessageEmptyTable() {
    let tbody = getTbody();
    if (tbody.childNodes.length === 0) {
        let tr = createNewLine();
        tr.id = 'emptyLine';
        let td = document.createElement('td');
        td.colSpan = 6;
        td.innerHTML = 'Nenhum aluno cadastro ainda!';
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

function deleteEmptyLineMessage() {
    let tr = document.getElementById('emptyLine');
    if (tr) {
        let tbody = tr.parentNode;
        tbody.removeChild(tr);
    }
}

function updateAllStudentsList(student) {
    let oldStudent = allStudents[lineIndexEditing - 1];
    oldStudent.name = student.name;
    oldStudent.email = student.email;
    oldStudent.cpf = student.cpf;
    oldStudent.telefone = student.telefone;
}

function deleteStudentInArray(cpf) {
    let index = allStudents.findIndex(function(element) {
        return element.cpf === cpf;
    });

    if (index > -1) {
        allStudents.splice(index, 1);
    }
}