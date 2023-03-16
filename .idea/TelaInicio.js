let inputBtn = document.getElementById("increment-btn")
const inputTime1 = document.getElementById("input-time1")
const ulEl= document.getElementById("ul-el")
const inputTime2 = document.getElementById("input-time2")
const ulEl2= document.getElementById("ul-el2")
const inputTime3 = document.getElementById("input-time3")
const ulEl3= document.getElementById("ul-el3")
const inputTime4 = document.getElementById("input-time4")
const ulEl4= document.getElementById("ul-el4")
const inputTime5 = document.getElementById("input-time5")
const ulEl5= document.getElementById("ul-el5")
const inputTime6 = document.getElementById("input-time6")
const ulEl6= document.getElementById("ul-el6")
time1=[]
time2=[]
grupo1=[]
grupo2=[]
jogo1=[]
jogo2=[]

    //Time1
    inputBtn.addEventListener("click", function() {
        time1.push(inputTime1.value)
        inputTime1.value=""
        renderTime1()
    })
    //Time1
    function renderTime1() {
        let ListItems = ""
        for (let i = 0; i < time1.length; i++) {
            ListItems += time1[i]
        }
        ulEl.innerHTML = ListItems
    }
    //Time2
    inputBtn.addEventListener("click", function() {
        time2.push(inputTime2.value)
        inputTime2.value=""
        renderTime2()
    })
    //Time2
    function renderTime2() {
        let ListItems = ""
        for (let i = 0; i < time2.length; i++) {
            ListItems += time2[i]
        }
        ulEl2.innerHTML = ListItems
    }

    //Time3
    inputBtn.addEventListener("click", function() {
        grupo1.push(inputTime3.value)
        inputTime3.value=""
        renderTime3()
    })
    //Time3
    function renderTime3() {
        let ListItems = ""
        for (let i = 0; i < grupo1.length; i++) {
            ListItems += grupo1[i]
        }
        ulEl3.innerHTML = ListItems
    }

    //Time4
    inputBtn.addEventListener("click", function() {
        grupo2.push(inputTime4.value)
        inputTime4.value=""
        renderTime4()
    })
    //Time3
    function renderTime4() {
        let ListItems = ""
        for (let i = 0; i < grupo2.length; i++) {
            ListItems += grupo2[i]
        }
        ulEl4.innerHTML = ListItems
    }
    //N do Jogo 1
    inputBtn.addEventListener("click", function() {
        jogo1.push(inputTime5.value)
        inputTime5.value=""
        renderTime5()
    })
    //N jogo1
    function renderTime5() {
        let ListItems = ""
        for (let i = 0; i < jogo1.length; i++) {
            ListItems += jogo1[i]
        }
        ulEl5.innerHTML = ListItems
    }

    //N do Jogo 2
    inputBtn.addEventListener("click", function() {
        jogo2.push(inputTime6.value)
        inputTime6.value=""
        renderTime6()
    })
    //N jogo1
    function renderTime6() {
        let ListItems = ""
        for (let i = 0; i < jogo2.length; i++) {
            ListItems += jogo2[i]
        }
        ulEl6.innerHTML = ListItems
    }



   /* const times = [{nome: "Time 1", jogadores: []}, {nome: "Time 2", jogadores: []}];

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
}*/
