function executar() {
    let a = 0, b = 1;
    let contador = 1;
    let texto = "Primeiros 20 números da sequência de Fibonacci:\n";

    while (contador <= 20) {
        texto += a + " ";
        let temp = a + b;
        a = b;
        b = temp;
        contador++;
    }

    alert(texto);
}