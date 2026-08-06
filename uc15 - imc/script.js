/* Classificaçâo 
Abaixo de 18,5 - Abaixo do peso
18,5 a 24,9 - Peso Normal 
25 a 29,9 - Sobrepeso
30 a 34,9 - Obesidade grau 1 
35 a 39.9 - Obesidade grau 2 
40 ou mais - Obesidade grau 3 e 5 */

let nome = prompt('Qual é o seu nome');
let pesoStr = prompt ('Ola, $ {nome}! Qual é o seu peso em kg?\n(use virgula ou ponto - ex : 75,5 ou 75 - 5 ');

let altStr = prompt ('Qual é a sua altura em metros ?\n(ex:1,75 ou 1,75');

console.log('nome:', nome); 


if (imc < 18,5 ){
 classificação = ' abaixo do peso';
} else if ()

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

console.log("Média do aluno: " + media);

if (media < 4) {
    console.log("REPROVADO");
} else if (media >= 5 && media <= 6) {
    console.log("RECUPERAÇÃO");
} else if (media > 7) {
    console.log("APROVADO");
} else {
    console.log("Média inválida ou faixa não definida");
}