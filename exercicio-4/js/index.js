let count = 0;
start();

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
