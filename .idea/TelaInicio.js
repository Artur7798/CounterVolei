
    const times = [{nome: "Time 1", jogadores: []}, {nome: "Time 2", jogadores: []}];

    for (let i = 0; i < times.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${times[i].nome}</h2>`;
    document.getElementById("form").appendChild(div);

    for (let j = 0; j <1; j++) {
    const jogador = {nome: "", grupo: "", jogo: ""};

    const inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.placeholder = `Nome do jogadores`;
    div.appendChild(inputNome);

    inputNome.addEventListener("blur", function() {
    jogador.nome = inputNome.value;
});

    const inputGrupo = document.createElement("input");
    inputGrupo.type = "text";
    inputGrupo.placeholder = "Nome do grupo";
    div.appendChild(inputGrupo);

    inputGrupo.addEventListener("blur", function() {
    jogador.grupo = inputGrupo.value;
});

    const inputJogo = document.createElement("input");
    inputJogo.type = "text";
    inputJogo.placeholder = "Número do jogo";
    div.appendChild(inputJogo);

    inputJogo.addEventListener("blur", function() {
    jogador.jogo = inputJogo.value;
});

    times[i].jogadores.push(jogador);
}
}

    function submit() {
    console.log(times);
}
