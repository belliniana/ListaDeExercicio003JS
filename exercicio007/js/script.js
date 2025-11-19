function executar() {
    const numero = parseInt(prompt("Digite um número inteiro:"));
    let divisor = 1;
    let qtdDivisores = 0;

    while (divisor <= numero) {
        if (numero % divisor === 0) {
            qtdDivisores++;
        }
        divisor++;
    }

    if (qtdDivisores === 2) {
        alert(numero + " é primo.");
    } else {
        alert(numero + " NÃO é primo.");
    }
}