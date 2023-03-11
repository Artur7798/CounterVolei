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
            saveEl.textContent = placar + countStr +" " + countStr2
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

    document.getElementById("ValorSegunda").textContent = valorSegunda;
    document.getElementById("ValorDomingo").textContent = valorDomingo;

console.log("O valor de segunda é R$" + valorSegunda + ", e cada pessoa deve pagar R$" + valorPorPessoa + ".");
console.log("O valor de segunda é R$" + valorDomingo + ", e cada pessoa deve pagar R$" + valorPorPessoa2 + ".");


const pessoas = document.querySelectorAll('#pessoas li');
const checkboxesSegunda = document.querySelectorAll('input[type=checkbox][id^=segunda]');
const checkboxesDomingo = document.querySelectorAll('input[type=checkbox][id^=domingo]');
const resultadosSegunda = document.querySelector('#resultados-segunda');
const resultadosDomingo = document.querySelector('#resultados-domingo');

// Função para atualizar os resultados de acordo com os checkboxes marcados
function atualizarResultados(checkboxes, resultados) {
    resultados.innerHTML = '';
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const pessoa = checkbox.nextElementSibling.textContent;
            const valorTotal = 500; // exemplo: valor total da conta
            const valorPorPessoa = valorTotal / checkboxes.length;
            const li = document.createElement('li');
            li.textContent = `${pessoa} - Valor: ${valorPorPessoa.toFixed(2)}`;
            resultados.appendChild(li);
        }
    });

    const quantidadePessoas = Array.from(checkboxes).filter(c => c.checked).length;
    const valorTotal = 500; // exemplo: valor total da conta
    const valorPorPessoa = valorTotal / quantidadePessoas;

    const li = document.createElement('li');
    li.textContent = `Valor total dividido por ${quantidadePessoas} pessoas: ${valorPorPessoa.toFixed(2)}`;
    resultados.appendChild(li);
}

// Adiciona um event listener para cada checkbox da segunda-feira
checkboxesSegunda.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        atualizarResultados(checkboxesSegunda, resultadosSegunda);
    });
});

// Adiciona um event listener para cada checkbox do domingo
checkboxesDomingo.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        atualizarResultados(checkboxesDomingo, resultadosDomingo);
    });
});