//Escreva um programa em JavaScript que leia um número e calcule a soma de
//todos eles de 1 até ele. Ex. se o usuário entrar com 6, o programa vai mostrar 21,
//pois 1 + 2 + 3 + 4 + 5 + 6 = 21.

var num = prompt("Digite um número:");
var soma = 0;

for (var i = 1; i <= num; i++) {
  soma += i;
}

console.log("A soma de 1 até " + num + " é " + soma + ".");


//Escreva um programa em JavaScript que leia dois valores A e B. Se A for igual
//B, devem ser lidos novos valores para A e B. Se A for menor que B, deve-se
//calcular e imprimir a subtração de B – A. Se A for maior que B, deve-se calcular
//e imprimir a subtração de A – B. Obs.: Considere que só serão informados
//valores inteiros positivos.


var a = parseInt(prompt("Digite o valor de A:"));
var b = parseInt(prompt("Digite o valor de B:"));

while (a === b) {
  alert("A e B não podem ser iguais. Digite valores diferentes:");
  a = parseInt(prompt("Digite o valor de A:"));
  b = parseInt(prompt("Digite o valor de B:"));
}

if (a < b) {
  var subtracao = b - a;
  alert("A subtração de B - A é " + subtracao + ".");
} else {
  var subtracao = a - b;
  alert("A subtração de A - B é " + subtracao + ".");
}


//Escreva um programa em JavaScript que apresente a soma dos 100 primeiros
//números pares.

var soma = 0;
for (var i = 2; i <= 200; i += 2) {
  soma += i;
}
alert("A soma dos 100 primeiros números pares é " + soma + ".");

//Escreva um programa em JavaScript que calcule a fatorial de um número
//qualquer.


var numero = parseInt(prompt("Digite um número para calcular sua fatorial:"));
var fatorial = 1;

for (var i = numero; i >= 1; i--) {
  fatorial *= i;
}

alert("A fatorial de " + numero + " é " + fatorial + ".");

//Escreva um programa em JavaScript que coloque na tela a tabuada de
//multiplicação para um número qualquer.

var numero = parseInt(prompt("Digite um número para exibir sua tabuada de multiplicação:"));

for (var i = 1; i <= 10; i++) {
  var resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}

var numero = parseInt(prompt("Digite um número para verificar se é primo:"));
var primo = true;

for (var i = 2; i < numero; i++) {
  if (numero % i === 0) {
    primo = false;
    break;
  }
}

if (primo) {
  console.log(numero + " é primo.");
} else {
  console.log(numero + " não é primo.");
}

//Escreva um programa em JavaScript que mostre os 100 primeiros números
//primos.

var quantidade = 0;
var numero = 2;

while (quantidade < 100) {
  var primo = true;

  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    console.log(numero);
    quantidade++;
  }

  numero++;
}

//Escreva um programa em JavaScript para mostrar na tela os números de 20 a 1
//em contagem regressiva.


for (var i = 20; i >= 1; i--) {
    console.log(i);
  }

//Escreva um programa em JavaScript que imprima somente os números ímpares
//no intervalo de 0 a 200.

for (var i = 1; i <= 200; i += 2) {
    console.log(i);
  }
  