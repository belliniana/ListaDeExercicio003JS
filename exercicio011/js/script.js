function executar() {
    const numero = parseInt(prompt("Digite um número inteiro:"));
    let i = 1;
    let soma = 0;

    while (i <= numero) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    }

    alert("A soma dos números pares entre 1 e " + numero + " é: " + soma);
}