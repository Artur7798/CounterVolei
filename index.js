let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // pass in arguments
let countEl2 = document.getElementById("count-el2") // pass in arguments
let placar = "O placar final ficou: "
let inputText = document.getElementById('response_name');
let inputText2 = document.getElementById('response_time');
let outputField = document.getElementById('total_response');
let time1 = document.getElementById('time1');
let time2 = document.getElementById('time2');

let count = 0
let count2 = 0

    function increment() {
    if (count>=22){
        count-=1
        countEl.textContent = count
    } else
    count += 1
        countEl.textContent = count
    }
    function increment2() {
    if (count2>=22){
        count2-=1
        countEl2.textContent = count2
    }  else
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

function saveInput() {
    const inputText1 = document.getElementById("inputText1");
    const inputText2 = document.getElementById("inputText2");
    const tbody = document.getElementById("tbody");
    const newRow = tbody.insertRow();
    const participantCell = newRow.insertCell();
    const teamCell = newRow.insertCell();
    participantCell.textContent = inputText1.value;
    teamCell.textContent = inputText2.value;
    inputText1.value = "";
    inputText2.value = "";
}





