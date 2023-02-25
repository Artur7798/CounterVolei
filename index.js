let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // pass in arguments
let countEl2 = document.getElementById("count-el2") // pass in arguments
let placar = "O placar final ficou: "
const inputText1 = document.getElementById("inputText1");
const inputText2 = document.getElementById("inputText2");

let participantes = ["Artur","Ana", "Marina","Leo","Dilan","Rodrigo","Keli","Carla"];

let count = 0
let count2 = 0

    function increment() {
            if (count >= 21) {
                count = count
                countEl.textContent = count
            } else
                count += 1
            countEl.textContent = count
        }
    function increment2() {
    if (count2>=21){
        count2 = count2
        countEl2.textContent = count2
    }  else
        count2 += 1
        countEl2.textContent = count2
    }
    function menos() {
        if (count < 0) {
            count=0
            countEl.textContent = count
        } else {
            count -= 1
            countEl.textContent = count
        }
    }
    function menos2() {
        if (count2 < 0) {
            count2=0
            countEl2.textContent = count2
        } else {
            count2 -= 1
            countEl2.textContent = count2
        }
    }
    function save(){
            let countStr= count + " -"
            let countStr2= count2
            let p = participantes
            saveEl.textContent = placar + countStr +" " + countStr2 + " O time que ganhou foi:" + p[3]
            countEl.textContent = 0
            count = 0
            countEl2.textContent = 0
            count2 = 0
        }
    function saveInput() {
    const tbody = document.getElementById("tbody");
    const newRow = tbody.insertRow();
    // Loop através dos valores dos inputs
    for (let input of [inputText1.value, inputText2.value]) {
        const cell = newRow.insertCell();
        cell.textContent = input;
    }
    inputText1.value = "";
    inputText2.value = "";
}

// Script para a divisão dos valores do Vôlei//

var valorSegunda = 500; // substitua o valor da matrícula aqui
var pessoasDomingo=5
var valorDomingo = 500; // substitua o valor da matrícula aqui
var pessoasSegunda=4

var valorPorPessoa = valorSegunda / pessoasSegunda;
var valorPorPessoa2 = valorDomingo / pessoasDomingo;

console.log("O valor de segunda é R$" + valorSegunda + ", e cada pessoa deve pagar R$" + valorPorPessoa + ".");
console.log("O valor de segunda é R$" + valorDomingo + ", e cada pessoa deve pagar R$" + valorPorPessoa2 + ".");






