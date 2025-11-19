function executar() {
    let num = 1;
    let soma = 0;

    while (num <= 100) {
        soma += num;
        num++;
    }

    alert("A soma de 1 a 100 é: " + soma);
}