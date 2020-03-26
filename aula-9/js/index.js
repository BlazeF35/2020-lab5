start();

function start() {
    let button = document.getElementById('newParagraph');
    button.onclick = function() {
        addNewParagraph();
    };
}

function addNewParagraph() {
    console.log('ALEXANDRE!');
    let newP = document.createElement('p');

    let div = document.getElementById('container');

    div.appendChild(newP);

    let text = document.getElementById('text').value;

    let newTextNode = document.createTextNode(text);

    newP.appendChild(newTextNode);
}