let soma = 0;

for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Digite o " + i + "º número:"));
    soma += num;
}

alert("A soma total dos números é: " + soma);