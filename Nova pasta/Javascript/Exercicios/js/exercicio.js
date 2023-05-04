//Exercicio 1

var horas = parseInt(prompt("Digite a quantidade de horas:"));
var minutos = parseInt(prompt("Digite a quantidade de minutos:"));
var segundos = parseInt(prompt("Digite a quantidade de segundos:"));

var totalSegundos = horas * 3600 + minutos * 60 + segundos;

document.write("O total de segundos é:"+totalSegundos);


//Exercicio 2

var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));
var nota4 = parseFloat(prompt("Digite a quarta nota:"));

var somaNotas = nota1 + nota2 + nota3 + nota4;
var mediaNotas = somaNotas / 4;

var situacao;
if (mediaNotas >= 6) {
  situacao = "Aprovado";
} else {
  situacao = "Reprovado";
}

document.write("Soma das notas: " + somaNotas);
document.write("Média das notas: " + mediaNotas);
document.write("Situação do aluno: " + situacao);

//Exercicio 3

var valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
var taxaJuros = parseFloat(prompt("Digite a taxa de juros (%):"));

var rendimento = valorDeposito * (taxaJuros / 100);
var valorTotal = valorDeposito + rendimento;

console.log("Valor do rendimento: R$ " + rendimento.toFixed(2));
console.log("Valor total após o rendimento: R$ " + valorTotal.toFixed(2));

//Exercicio 4

var numero = parseInt(prompt("Digite um número:"));

if (numero % 2 === 0) {
  console.log("O número " + numero + " é par.");
} else {
  console.log("O número " + numero + " é ímpar.");
}

//Exercicio 5

var operacao = prompt("Digite o símbolo da operação (+, -, / ou *):");
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

var resultado;

if (operacao === "+") {
  resultado = numero1 + numero2;
} else if (operacao === "-") {
  resultado = numero1 - numero2;
} else if (operacao === "/") {
  resultado = numero1 / numero2;
} else if (operacao === "*") {
  resultado = numero1 * numero2;
} else {
  console.log("Operação inválida.");
  return;
}

console.log("Resultado: " + resultado);

//Exercicio 6

var valor1 = parseFloat(prompt("Digite o primeiro valor: "));
var valor2 = parseFloat(prompt("Digite o segundo valor: "));
var valor3 = parseFloat(prompt("Digite o terceiro valor: "));

var maior;
if (valor1 >= valor2 && valor1 >= valor3) {
    maior = valor1;
} else if (valor2 >= valor1 && valor2 >= valor3) {
    maior = valor2;
} else {
    maior = valor3;
}

var menor;
if (valor1 <= valor2 && valor1 <= valor3) {
    menor = valor1;
} else if (valor2 <= valor1 && valor2 <= valor3) {
    menor = valor2;
} else {
    menor = valor3;
}

var media = (valor1 + valor2 + valor3) / 3;

console.log("O maior valor é: " + maior);
console.log("O menor valor é: " + menor);
console.log("A média dos valores é: " + media);

// Exercicio 7

const salario = parseFloat(prompt("Informe o seu salário:"));

if (salario <= 420) {
  const desconto = salario * 0.08;
  console.log(`O desconto do INSS é de R$ ${desconto.toFixed(2)}.`);
} else if (salario <= 1350) {
  const desconto = salario * 0.09;
  console.log(`O desconto do INSS é de R$ ${desconto.toFixed(2)}.`);
} else {
  const desconto = salario * 0.1;
  console.log(`O desconto do INSS é de R$ ${desconto.toFixed(2)}.`);
}


// Exercicio 8

const letra = prompt("Digite uma letra:");

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
  console.log("A letra digitada é uma vogal.");
} else {
  console.log("A letra digitada é uma consoante.");
}

// Exercicio 9

const precoGasolina = parseFloat(prompt("Digite o preço da gasolina: "));
const precoEtanol = parseFloat(prompt("Digite o preço do etanol: "));
const proporcao = precoEtanol / precoGasolina;

if (proporcao <= 0.7) {
  console.log("Abasteça com etanol.");
} else {
  console.log("Abasteça com gasolina.");
}

// Exercicio 10

const ano = parseInt(prompt("Digite o ano: "));

if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
  console.log(ano + " é um ano bissexto.");
} else {
  console.log(ano + " não é um ano bissexto.");
}
