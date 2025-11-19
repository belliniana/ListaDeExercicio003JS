function executar() {
    const limite = parseInt(prompt("Digite um número inteiro para limitar a sequência:"));

    let a = 0, b = 1;
    let texto = "Sequência de Fibonacci:\n";

    while (a <= limite) {
        texto += a + " ";
        let temp = a + b;
        a = b;
        b = temp;
    }

    alert(texto);
}