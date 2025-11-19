function executar() {
    let i = 1;
    let lista = "Números ímpares de 1 a 50:\n";

    while (i <= 50) {
        if (i % 2 !== 0) {
            lista += i + " ";
        }
        i++;
    }

    alert(lista);
}