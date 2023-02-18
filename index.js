let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // pass in arguments
let countEl2 = document.getElementById("count-el2") // pass in arguments
let placar = "O placar final ficou: "
let inputText = document.getElementById('response_name');
let inputText2 = document.getElementById('response_time');
let outputField = document.getElementById('total_response');
let time1 = document.getElementById('time1');


let count = 0
let count2 = 0

    function increment() {
        count += 1
        countEl.textContent = count
    }
    function increment2() {
        count2 += 1
        countEl2.textContent = count2
    }
    function save(){
        let countStr= count + " -"
        let countStr2= count2
        saveEl.textContent = placar + countStr +" " + countStr2
        countEl.textContent = 0
        count = 0
        countEl2.textContent = 0
        count2 = 0
    }
    function save_input(){
            outputField.textContent = "Os participantes são: " + inputText.value + " " + "o nome do time é: " + inputText2.value
            time1.textContent = inputText2.value
        }




