// ==========================
// Tarefa 1 - Saudação Personalizada
// ==========================

let nome = prompt("Qual é o seu nome?");
let cidade = prompt("De qual cidade você é?");

alert("Seja bem-vindo(a), " + nome + "! É um prazer conhecer alguém de " + cidade + ".");

console.log("Nome do usuário: " + nome);
console.log("Cidade: " + cidade);

// ==========================
// Tarefa 2 - Adivinhe o Número
// ==========================

let numeroSecreto = 7;
let tentativa = Number(prompt("Tente adivinhar o número secreto (de 1 a 10):"));

if (tentativa === numeroSecreto) {
    alert("Parabéns! Você acertou o número secreto!");
} else {
    alert("Que pena! Você errou. O número secreto era " + numeroSecreto + ".");
}

console.log("Número secreto: " + numeroSecreto);
console.log("Tentativa do usuário: " + tentativa);