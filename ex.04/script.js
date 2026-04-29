let totalNotas = 0;

for (let i = 1; i <= 5; i++) {
    let nota = Number(prompt("Digite a " + i + "ª nota:"));
    totalNotas += nota;
}
let media = totalNotas / 5;
alert("A média das notas é: " + media.toFixed(2));