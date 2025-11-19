function executar() {
    const numero = parseInt(prompt("Digite um número inteiro positivo:"));
    let divisor = 1;
    let lista = "";

    while (divisor <= numero) {
        if (numero % divisor === 0) {
            lista += divisor + " ";
        }
        divisor++;
    }

    alert("Divisores de " + numero + ":\n" + lista);
}