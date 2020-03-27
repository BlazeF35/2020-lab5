start();

function start() {
    let button = document.getElementById('newParagraph');
    button.onclick = function() {
        addNewParagraph();
    };

    let addButton = document.getElementById('add');
    addButton.onclick = addNewListItem;
}

function addNewParagraph() {
    let newP = document.createElement('p');

    newP.onclick = removeParagraph;

    let div = document.getElementById('container');

    div.appendChild(newP);

    let text = document.getElementById('text').value;

    let newTextNode = document.createTextNode(text);

    newP.appendChild(newTextNode);
}

function removeParagraph() {
    let myParent = this.parentNode;
    myParent.removeChild(this);
}

function addNewListItem() {
    let myList = document.getElementById('lista');
    let inputName = document.getElementById('name').value.trim();

    if (inputName === '') {
        alert('Por favor digite algo válido!');
    
    } else if (alreadyExist(myList, inputName)) {
        alert('Esse nome já está na lista! Digite outro, por favor!');

    } else {
        let li = createNewListItem(inputName);
        myList.appendChild(li);
    }
}

function alreadyExist(myList, newName) {
    let child = myList.children;

    for (let i = 0; i < child.length; i++) {
        let li = child[i];
        if (li.innerHTML === newName) {
            return true;
        }
    }

    return false;
}

function createNewListItem(value) {
    let newLi = document.createElement('li');
    let text = document.createTextNode(value);
    newLi.appendChild(text);
    return newLi;
}