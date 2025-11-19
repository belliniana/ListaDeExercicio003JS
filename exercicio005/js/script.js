function executar() {
    const numero = parseInt(prompt("Digite um número inteiro:"));
    let i = 1;
    let texto = "Tabuada de " + numero + ":\n";

    while (i <= 10) {
        texto += numero + " x " + i + " = " + (numero * i) + "\n";
        i++;
    }

    alert(texto);
}