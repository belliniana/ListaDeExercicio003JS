function executar() {
    let nome = "";
    let somaIdades = 0;
    let quantidade = 0;

    while (true) {
        nome = prompt("Digite um nome (ou 'fim' para encerrar):").toLowerCase();

        if (nome === "fim") {
            break;
        }

        let idade = parseInt(prompt("Digite a idade:"));

        somaIdades += idade;
        quantidade++;
    }

    if (quantidade > 0) {
        let media = somaIdades / quantidade;
        alert("A média das idades é: " + media.toFixed(2));
    } else {
        alert("Nenhuma idade foi informada.");
    }
}