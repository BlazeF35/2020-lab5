const images = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg'];
let position = 0;

start();

function start() {
    let leftButton = document.getElementsByClassName('glyphicon-chevron-left')[0];
    leftButton.onclick = function() {
        backImage();
    };

    let rightButton = document.getElementsByClassName('glyphicon-chevron-right')[0];
    rightButton.onclick = function() {
        fowardImage();
    };
}

function backImage() {
    position--;
    if (position === -1) {
        position = images.length - 1;
    }
    changeImage();
}

function fowardImage() {
    position++;
    if (position === images.length) {
        position = 0;
    }
    changeImage();
}

function changeImage() {
    let imageElement = document.getElementsByClassName('img-responsive')[0];
    imageElement.src = 'images/' + images[position];
}