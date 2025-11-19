function executar() {
    let contador = 1;
    let somaIdades = 0;

    while (contador <= 5) {
        let nome = prompt("Digite o nome da pessoa " + contador + ":");
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));

        somaIdades += idade;
        contador++;
    }

    const media = somaIdades / 5;
    alert("A média das idades é: " + media);
}