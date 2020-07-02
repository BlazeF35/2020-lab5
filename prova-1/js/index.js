start();

function start() {
    let btnLogin = document.getElementById('login');
    btnLogin.onclick = function() {
        let matricula = document.getElementById('matricula');
        let password = document.getElementById('password');

        if (validateFields(matricula, password)
            && login(matricula, password)) {
                matricula.value = '';
                password.value = '';
                matricula.focus();
        }
    };
}

function login(matricula, password) {
    let loginErrorElement = document.getElementById('loginError');
    if (matricula.value === '123456' && password.value === '123456') {
        if (loginErrorElement.className.indexOf('hide') === -1) {
            loginErrorElement.className +=  ' hide';
        }
        alert('Seja bem vindo!');
        return true;
    } else {
        loginErrorElement.className =  loginErrorElement.className.replace('hide', '').trim();
        return false;
    }
}

function validateFields(matricula, password) {
    let result = true;
    let matriculaError = document.getElementById('matriculaError');
    if (matricula.value.trim() === '') {
        matriculaError.className = matriculaError.className.replace('hide', '').trim();
        result = false;

    } else if (matriculaError.className.indexOf('hide') === -1) {
        matriculaError.className += ' hide';
    }
    
    let passwordError = document.getElementById('passwordError');
    if (password.value.trim() === '') {
        passwordError.className = passwordError.className.replace('hide', '').trim();
        result = false;

    } else if (passwordError.className.indexOf('hide') === -1) {
        passwordError.className += ' hide';
    }

    return result;
}