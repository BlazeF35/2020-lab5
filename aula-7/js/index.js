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

    if (isInputValueValid(inputA, 'firstNumberError') && isInputValueValid(inputB, 'secondNumberError')) {
        let a = convertToDecimal(inputA, 'firstNumberError');
        let b = convertToDecimal(inputB, 'secondNumberError');

        if (!isNaN(a) && !isNaN(b)) {
            let resultado = a + b;
            inputC.value = resultado;
        }
    }
}

function isInputValueValid(input, idErrorMessage) {
    if (input.value.trim() === '') {
        input.focus();
        addRemoveHideMessageClass(idErrorMessage, false);
        return false;
    } else {
        addRemoveHideMessageClass(idErrorMessage, true);
    }
    return true;
}

function convertToDecimal(input, idErrorMessage) {
    let temp = parseInt(input.value, 10);
    if (isNaN(temp)) {
        input.focus();
        addRemoveHideMessageClass(idErrorMessage, false);
    } else {
        addRemoveHideMessageClass(idErrorMessage, true);
    }

    return temp;
}

function addRemoveHideMessageClass(idElement, addClass) {
    let element = document.getElementById(idElement);
    if (addClass) {
        if (element.className.indexOf('hideMessage') === -1) {
            element.className = element.className + ' hideMessage'; 
        }
    } else {
        element.className = element.className.replace('hideMessage', '').trim();
    }
}