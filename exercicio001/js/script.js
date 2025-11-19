function executar() {
    let num = 1;
    let texto = "";

    while (num <= 10) {
        texto += num + " ";
        num++;
    }

    alert("Números de 1 a 10:\n" + texto);
}