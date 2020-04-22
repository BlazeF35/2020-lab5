console.log('Olá aula 11');

let nomes = ['Rodrigo', 'Maria', 'João', 'José', 'João', 'Livia', 'João', 'Luiza'];
let nomeAtual = nomes[0];

console.log(nomes);
console.log(nomeAtual);

let sobreNomes = new Array();
console.log(sobreNomes);

let outrosNomes = Array.of('Rodolfo', 'Juliana', 'Bartolomeu');
console.log(outrosNomes);

console.log(nomes.length);
console.log(sobreNomes.length);
console.log(outrosNomes.length);

console.log('Nomes existentes:');
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('Usando forEach:::');
nomes.forEach(function(xuxa) {
    console.log(xuxa);
});

console.log('Usando forEach 2.0!');
nomes.forEach(xuxa => console.log(xuxa));

console.log('Usando indexOf');
console.log(nomes.indexOf('Joao')); //vai retornar -1

let index = -1;
do {
    index++;
    index = nomes.indexOf('João', index);
    console.log('João encontrado na posição: ' + index);

} while (index !== -1);

console.log('Usando lastIndexOf');
console.log(nomes.lastIndexOf('João'));

sobreNomes.push('Faria');
console.log('Tamanho do Array: ' + sobreNomes.length);

sobreNomes.push('Silva');
console.log('Tamanho do Array: ' + sobreNomes.length);
console.log(sobreNomes);

//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//['Faria', 'Silva',undefined,undefined,undefined,undefined,
//undefined,undefined,undefined,undefined, 'Ferreira']
sobreNomes[10] = 'Ferreira';
console.log(sobreNomes);

console.log(sobreNomes.pop());
console.log('Tamanho do Array: ' + sobreNomes.length);

console.log(sobreNomes.pop());
console.log('Tamanho do Array: ' + sobreNomes.length);

sobreNomes[4] = 'Santos';
console.log(sobreNomes);

sobreNomes.splice(4, 1);
console.log(sobreNomes);

sobreNomes.splice(4);
console.log(sobreNomes);

console.log('MAP')
let numerosMegaSena = [1, 5, 8, 9, 11, 13];
let novosNumerosMegaSena = numerosMegaSena.map(n => n + 10);

console.log(numerosMegaSena);
console.log(novosNumerosMegaSena);