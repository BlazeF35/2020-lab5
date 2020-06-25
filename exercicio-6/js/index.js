start();

function start() {
    let btn = document.getElementById('addNota');
    btn.onclick = function() {
        let materia = document.getElementById('materia');
        let nota = document.getElementById('nota');

        if (isValidForm(materia, nota)) {
            addNewMateria(materia.value, nota.value);
            clearFields(materia, nota);
        }
    };
}

function isValidForm(materia, nota) {
    let isValid = true;
    if (materia.value.trim() === '') {
        alert('Por favor, informe a matéria');
        isValid = false;
    
    } else if (nota.value.trim() === '') {
        alert('Por favor, informe a nota');
        isValid = false;
    }

    return isValid;
}

function addNewMateria(materia, nota) {
    let table = document.getElementById('notas');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = materia;
    let td2 = document.createElement('td');
    td2.innerHTML = nota;
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.tBodies[0].appendChild(tr);
}

function clearFields(materia, nota) {
    materia.value = '';
    nota.value = '';
    materia.focus();
}
