function executar() {
    let contador = 1;
    let soma = 0;

    while (contador <= 5) {
        let num = parseInt(prompt("Digite o número " + contador + ":"));
        soma += num;
        contador++;
    }

    let media = soma / 5;
    alert("A média dos números é: " + media);
}