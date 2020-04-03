let count = 0;
start();
clearButtonEvent();

function start() {
    let spanElements = document.getElementsByTagName('span');

    Array.from(spanElements).forEach(function(spanElement) {
        spanElement.onclick = function() {
            if (count < 6 && this.className.indexOf('selected') === -1) {
                count++;
                this.className = 'selected';
                appendSelectedNumbers(this.innerHTML);
            }
        };
    });
}

function appendSelectedNumbers(number) {
    let p = document.getElementById('sorted');
    if (count > 1) {
        p.innerHTML += ' -';
    }
    p.innerHTML += ' ' + number;
}

function clearButtonEvent() {
    let clearButton = document.getElementById('reset');
    clearButton.onclick = function() {
        count = 0;
        clearSelectedNumberArea();
        let selectedElements = document.getElementsByClassName('selected');

        Array.from(selectedElements).forEach(function(element) {
            element.className = '';
        });
    };
}

function clearSelectedNumberArea() {
    let p = document.getElementById('sorted');
    p.innerHTML = '';
}