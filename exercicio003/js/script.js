function executar() {
    let num = 1;
    let pares = "";

    while (num <= 50) {
        if (num % 2 === 0) {
            pares += num + " ";
        }
        num++;
    }

    alert("Números pares de 1 a 50:\n" + pares);
}