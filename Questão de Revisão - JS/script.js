// ==========================================
// QUESTÃO 1 - OPERAÇÕES MATEMÁTICAS
// ==========================================

let numero1 = 10;
let numero2 = 5;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);


// ==========================================
// QUESTÃO 2 - DOBRO E TRIPLO
// ==========================================

let numero = 7;

console.log("Dobro:", numero * 2);
console.log("Triplo:", numero * 3);


// ==========================================
// QUESTÃO 3 - NOME E IDADE DO USUÁRIO
// ==========================================

let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");

console.log("Olá, " + nome + "! Seja bem-vindo! Você tem " + idade + " anos.");


// ==========================================
// QUESTÃO 4 - MÉDIA DE TRÊS NOTAS
// ==========================================

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Média:", media);


// ==========================================
// QUESTÃO 5 - SISTEMA DE LOGIN
// ==========================================

let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (usuario !== usuarioCorreto) {
    console.log("Usuário incorreto.");
} else if (senha !== senhaCorreta) {
    console.log("Senha incorreta.");
} else {
    console.log("Login realizado com sucesso!");
}


// ==========================================
// QUESTÃO 6 - NÚMERO MAIOR
// ==========================================

let primeiroNumero = Number(prompt("Digite o primeiro número:"));
let segundoNumero = Number(prompt("Digite o segundo número:"));

if (primeiroNumero > segundoNumero) {
    console.log("O maior número é " + primeiroNumero + ".");
} else if (segundoNumero > primeiroNumero) {
    console.log("O maior número é " + segundoNumero + ".");
} else {
    console.log("Os dois números são iguais.");
}
