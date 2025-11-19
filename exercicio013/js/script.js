function executar() {
    let numero = prompt("Digite um número inteiro:");
    let i = 0;
    let resultado = "Dígitos separados:\n";

    while (i < numero.length) {
        resultado += numero[i] + "\n";
        i++;
    }

    alert(resultado);
}