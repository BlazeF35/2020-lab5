let moveImage = 0;
let intervalID = 0;

start();

function start() {
    let button = document.getElementById('changeColor');
    button.onclick = function() {
        changeTitleColor();
    };

    let buttonReset = document.getElementById('reset');
    buttonReset.onclick = function() {
        resetTitleColor();
    };

    let buttonPlus = document.getElementById('plus');
    buttonPlus.onclick = function() {
        plusMargin();
    };

    let buttonMinus = document.getElementById('minus');
    buttonMinus.onclick = function() {
        minusMargin();
    };

    let buttonStart = document.getElementById('startAnimation');
    buttonStart.onclick = function() {
        startAnimation();
    };

    let buttonStop = document.getElementById('stopAnimation');
    buttonStop.onclick = function() {
        stopAnimation();
    }
}

function changeTitleColor() {
    let h1 = document.getElementById('title');
    h1.style.color = 'blue';
    h1.style.backgroundColor = 'red';
}

function resetTitleColor() {
    let h1 = document.getElementById('title');
    h1.style.color = 'black';
    h1.style.backgroundColor = '';
}

function plusMargin() {
    changeMargin(15);
}

function minusMargin() {
    changeMargin(-15);
}

function changeMargin(value) {
    let img = document.getElementById('brasil');
    let currentMargin = img.style.marginLeft;
    if (currentMargin) {
        currentMargin = currentMargin.replace('px', '');
        currentMargin = parseInt(currentMargin, 10);
    } else {
        currentMargin = 0;
    }

    currentMargin += value;
    img.style.marginLeft = currentMargin + 'px';
}

function startAnimation() {
    let value = 25;

    intervalID = setInterval(function() {
        moveImage++;
        if (moveImage == 20) {
            value *= -1;
            moveImage = 0;
        }

        changeMargin(value);
       
     },  500);
}

function stopAnimation() {
    clearInterval(intervalID);
}