// ===============================
// TAREFA 1 - CARTÃO DE VISITA
// ===============================

let nome = prompt("Digite seu nome completo:");
let cargo = prompt("Digite seu cargo ou função:");
let empresa = prompt("Digite a empresa ou escola:");
let email = prompt("Digite seu e-mail:");

nome = nome.toUpperCase();

console.log("===== CARTÃO DE VISITA =====");
console.log("Nome: " + nome);
console.log("Cargo/Função: " + cargo);
console.log("Empresa/Escola: " + empresa);
console.log("E-mail: " + email);

alert("Cartão de visita gerado com sucesso!");

// ===============================
// TAREFA 2 - CALCULADORA DE DESCONTO
// ===============================

let produto = prompt("Digite o nome do produto:");
let preco = parseFloat(prompt("Digite o preço original:"));
let percentual = parseFloat(prompt("Digite o percentual de desconto:"));

let valorDesconto = preco * (percentual / 100);
let precoFinal = preco - valorDesconto;

console.log("===== CALCULADORA DE DESCONTO =====");
console.log("Produto: " + produto);
console.log("Preço Original: R$ " + preco.toFixed(2));
console.log("Valor do Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço Final: R$ " + precoFinal.toFixed(2));

alert(
    "Produto: " + produto +
    "\nPreço Original: R$ " + preco.toFixed(2) +
    "\nDesconto: R$ " + valorDesconto.toFixed(2) +
    "\nPreço Final: R$ " + precoFinal.toFixed(2)
);

// ===============================
// TAREFA 3 - VERIFICADOR DE SENHA
// ===============================

let senha = prompt("Digite uma senha:");

let tamanho = senha.length;
let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);

let classificacao;

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Forte";
} else {
    classificacao = "Fraca";
}

console.log("===== VERIFICADOR DE SENHA =====");
console.log("Tamanho da senha: " + tamanho);
console.log("Classificação: " + classificacao);

alert("Classificação da senha: " + classificacao);