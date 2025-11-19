function executar() {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    let fatorial = 1;
    let i = 1;

    while (i <= numero) {
        fatorial *= i;
        i++;
    }

    alert("O fatorial de " + numero + " é: " + fatorial);
}