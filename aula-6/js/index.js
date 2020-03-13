startApp();

function startApp() {
    alert('Ola mundo!!!');

    console.log('Estou chamando de dentro do JS');

    let name = 'Rodrigo';
    let lastName = "Faria";
    name = 100;
    name = false;
    name = {};

    var otherName = 'José';

    if (otherName == 'José') {
        console.log('O nome é José!');
        var a = 10;
        let b = 11;
    }

    console.log("A vale: " + a);
    //console.log("B vale: " + b); //não exerga à variavel!

    let c = '10';

    if (a == c) {
        console.log('A é igual a C!');
    }

    if (a === c) {
        console.log('A é igual a C !!');
    }
    
    for (let i = 0; i < 10; i++) {
        console.log('Imprimindo ' + i);
    }

    let idade = 18;
    while (idade > 10) {
        console.log('Idade atual...' + idade);
        idade--;
    }

    do {
        console.log('Menor de idade ainda..' + idade);
        idade++;
    } while (idade < 18);

    let resultado = soma(10, 15);
    console.log('Resultado da soma: ' + resultado);
}

function soma(a, b) {
    return a + b;
}