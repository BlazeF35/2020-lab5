start();

function start() {
    let calc = document.getElementById('calculate');
    calc.onclick = function() {
        if (validateFields()) {
            let resultValue = calculate();
            showTotal(resultValue);
        }
    };
}

function calculate() {
    let month = getNumberValue('month');
    let interest = getNumberValue('interest') / 100;
    let capital = getNumberValue('capital');

    return ((1 + interest) 
        * (   
            ( 
                (Math.pow(1 + interest, month) - 1) 
            / interest
            )
        ) * capital).toFixed(2);
}

function getNumberValue(inputId) {
    let input = document.getElementById(inputId);
    return parseFloat(input.value);
}

function showTotal(resultValue) {
    let paragraph = document.getElementById('result');
    paragraph.innerHTML = 'Valor obtido ao final: R$ ' + resultValue;
}

function validateFields() {
    let fieldsId = ['month', 'interest', 'capital'];
    let allFieldsValid = true;

    for (let i = 0; i < fieldsId.length; i++) {
        let id = fieldsId[i];
        let field = document.getElementById(id);
        if (field.value.trim() === '') {
            allFieldsValid = false;
            showFieldMessageError(id);
        } else {
            hideFieldMessageError(id);
        }
    }

    return allFieldsValid;
}

function showFieldMessageError(inputId) {
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    spanError.className = spanError.className.replace('hide', '').trim();
}

function hideFieldMessageError(inputId) {
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    if (!spanError.className.includes('hide')) {
        spanError.className = spanError.className + ' hide';
    }
}