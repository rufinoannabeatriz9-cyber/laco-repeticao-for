let inicio = Number(prompt("Digite o número inicial do intervalo:"));
let fim = Number(prompt("Digite o número final do intervalo:"));
let pares = "";

for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        pares += i + " ";
    }
}

alert("Números pares encontrados: " + pares);