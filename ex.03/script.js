let tabuadaNum = Number(prompt("Digite um número para ver a tabuada:"));
let exibicao = "Tabuada do " + tabuadaNum + ":\n";

for (let i = 1; i <= 10; i++) {
    exibicao += tabuadaNum + " x " + i + " = " + (tabuadaNum * i) + "\n";
}

alert(exibicao);