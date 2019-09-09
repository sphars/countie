//Buttons
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const saveBtn = document.querySelector('#save');
const resetBtn = document.querySelector('#reset');
const resetAllBtn = document.querySelector('#resetAll');

//DOM things
const count = document.querySelector("#count");
const countUl = document.querySelector('ul');
const countTable = document.querySelector('#countTable');

let totalCount = 0;

//Manage counts
//get the records from storage
let countRecordsArray = localStorage.getItem('counts') ? JSON.parse(localStorage.getItem('counts')) : [];

//store the records back in storage
localStorage.setItem('counts', JSON.stringify(countRecordsArray));

//fecth data for local modifications
const countData = JSON.parse(localStorage.getItem('counts'));

//create a new row
const addRow = record => {
    var tableBody = countTable.querySelector('tbody');
    let newRow = tableBody.insertRow(-1);
    
    //cells
    newRow.insertCell(0).textContent = new Date(record.date).toLocaleString();
    newRow.insertCell(1).textContent = record.count;
    newRow.insertCell(2).textContent = record.note;

}

//loop through count array and make a new row for each
countData.forEach(item => {
    addRow(item);
});

//Functions
function increaseCount(){
    window.navigator.vibrate(25);
    totalCount++;
    updateCount();
}

function decreaseCount(){
    window.navigator.vibrate(25);
    if(totalCount > 0) totalCount--;
    updateCount();
}

function updateCount(){
    count.textContent = totalCount.toString();
}

//saves the current count, creates a record, adds to the storage
function saveCount(){

    if (totalCount == 0) {
        alert("Can't save an empty count!");
    } else {
        let countDescription = prompt('Count note:');
        if (countDescription != null){
            
            //create a record object
            const countRecord = {
                date: new Date(),
                count: totalCount,
                note: countDescription
            }
        
            countRecordsArray.push(countRecord);
            localStorage.setItem('counts', JSON.stringify(countRecordsArray));

            addRow(countRecord);
            resetCount();
        }
    }    
}

function resetCount(){
    totalCount = 0;
    updateCount();
}

function resetAll(){
    localStorage.clear();
    let tableBody = countTable.querySelector('tbody');
    while (tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }
}

//Event listeners
increaseBtn.addEventListener('click', increaseCount);
decreaseBtn.addEventListener('click', decreaseCount);
saveBtn.addEventListener('click', saveCount);
resetBtn.addEventListener('click', resetCount);
resetAllBtn.addEventListener('click', resetAll);
