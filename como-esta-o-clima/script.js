// Pergunta a temperatura ao usuário
let temperatura = Number(prompt("Digite a temperatura em °C:"));

let classificacao;

// Verifica a temperatura
if (temperatura < 15) {
    classificacao = "Está frio! 🥶";

} else if (temperatura <= 25) {
    classificacao = "O clima está agradável! 😊";

} else if (temperatura <= 35) {
    classificacao = "Está quente! 🥵";

} else {
    classificacao = "Está muito quente! 🔥";
}

// Mostra a temperatura na página
document.getElementById("temperatura").textContent =
    "Temperatura informada: " + temperatura + "°C";

// Mostra a classificação na página
document.getElementById("mensagem").textContent =
    classificacao;

// Mostra no console
console.log("Temperatura:", temperatura);
console.log("Classificação:", classificacao);