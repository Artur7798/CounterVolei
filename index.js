    let saveEl = document.getElementById("save-el")
    let countEl = document.getElementById("count-el") // pass in arguments
    let countEl2 = document.getElementById("count-el2") // pass in arguments
    let NewCount = document.getElementById("count-new") // pass in arguments
    let NewCount2 = document.getElementById("count-new2") // pass in arguments
    let placar = "O placar final ficou: "
    //Tela de informações
    let inputBtn = document.getElementById("increment-btn1")
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
    const Info=document.getElementById("textarea")
    const Game=document.getElementById("game")
    const telaInicio=document.getElementById("telainicio")


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
        ulEl.innerHTML = "<b>Participantes:</b> " + ListItems
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
        ulEl2.innerHTML = "<b>Participantes:</b> " + ListItems
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
        ulEl3.innerHTML = "<b>Time:</b> " + ListItems
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
        ulEl4.innerHTML = "<b>Time:</b> " + ListItems
    }
    //N do Jogo 1
    inputBtn.addEventListener("click", function() {
        jogo1.push(inputTime5.value)
        inputTime5.value=""
        renderTime5()
        alert("Bom jogo")
        Game.style.display = "block";
        telaInicio.style.display="none";

    })
    //N jogo1
    function renderTime5() {
        let ListItems = ""
        for (let i = 0; i < jogo1.length; i++) {
            ListItems += jogo1[i]
        }
        ulEl5.innerHTML = "<b>Jogo N:</b>" + ListItems
    }

    let count = 0
    let count2 = 0
    let countNew= 0
    let countNew2= 0
    let limite = 21

        function increment() {
            if (count == 20 && count2 == 20) {
                count = 20
                count2 = 20
                limite = 2
                if (countNew>=limite){
                    countNew=countNew
                    NewCount.textContent=countNew
                } else
                    countNew += 1
                    NewCount.textContent=countNew
            }
                if (count >=limite) {
                    count = count;
                    countEl.textContent = count;
                } else
                    count += 1
                countEl.textContent = count
            }
        function increment2() {
            if (count == 20 && count2 == 20) {
                count = 20
                count2 = 20
                limite = 2
                if (countNew2>=limite){
                    countNew2=countNew2
                    NewCount2.textContent=countNew2
                } else
                    countNew2 += 1
                NewCount2.textContent=countNew2
            }
        if (count2>=limite){
            count2 = count2
            countEl2.textContent = count2
        }  else
            count2 += 1
            countEl2.textContent = count2
        }

    function menos() {
        if (count == 20 && count2 == 20) {
            limite = 0;
            if (countNew > limite) {
                countNew -= 1;
            }
            NewCount.textContent = countNew;
        } else {
            if (count > 0) {
                count -= 1;
                countEl.textContent = count;
            }
        }
    }
    function menos2() {
        if (count == 20 && count2 == 20) {
            limite = 0;
            if (countNew2 > limite) {
                countNew2 -= 1;
            }
            NewCount2.textContent = countNew2;
        } else {
            if (count2 > 0) {
                count2 -= 1;
                countEl2.textContent = count2;
            }
        }
    }
        function save(){
                if (count==0 && count2==0){
                    save()
                }
                document.getElementById("save_btn").onclick = null;
                let countStr= count + " " +"(" + countNew + ")" + " -"
                let countStr2= count2 + " " +"(" + countNew2 + ")"
                Info.style.display = "block";
                Info.textContent= "Participantes: " + time1 +" " + "do" +" "+"grupo:" + grupo1 +" " + "fizeram" +" "+ count + "("+ countNew +")" + "Já os Participantes: " + time2 +" " + "do" +" "+"grupo:" + grupo2 +" " + "fizeram" +" "+ count2 + "("+ countNew2 +")"
                saveEl.textContent = placar + countStr +" " + countStr2
                countEl.textContent = 0
                count = 0
                countEl2.textContent = 0
                count2 = 0
                NewCount.textContent=0
                countNew=0
                NewCount2.textContent=0
                countNew2=0
            }
            function NewGame(){
            window.location.reload()
            }
