startApp();
eventListener();

function startApp() {

    let button = document.getElementById('saveBtn');
    button.onclick = function() {
        let inputName = document.getElementById('name');
        console.log(inputName.value);
    };
}

function eventListener() {
    let button = document.getElementById('sumBtn');
    button.onclick = function() {
        sumValues();
    };
}

function sumValues() {
    let inputA = document.getElementById('firstNumber');
    let inputB = document.getElementById('secondNumber');
    let inputC = document.getElementById('result');

    if (isInputValueValid(inputA) && isInputValueValid(inputB)) {
        let a = parseInt(inputA.value, 10);
        let b = parseInt(inputB.value, 10);
        
        let resultado = a + b;
        inputC.value = resultado;
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

function isInputValueValid(input) {
    if (input.value === '') {
        return false;
    }
    return true;
}