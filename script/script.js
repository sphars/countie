//Buttons
const count = document.querySelector("#count");
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const saveBtn = document.querySelector('#save');
const resetBtn = document.querySelector('#reset');
const resetAllBtn = document.querySelector('#resetAll');
const countUl = document.querySelector('ul');

let totalCount = 0;

//Manage counts

//get the records from storage
let countRecordsArray = localStorage.getItem('counts') ? JSON.parse(localStorage.getItem('counts')) : [];

//store the records back in storage
localStorage.setItem('counts', JSON.stringify(countRecordsArray));

//fecth data for local modifications
const countData = JSON.parse(localStorage.getItem('counts'));

//create an li entry
const liMaker = record =>{
    const li = document.createElement('li');
    const recordDate = new Date(record.date).toLocaleString();
    li.textContent = recordDate + ": " + record.count + ": " + record.note;
    countUl.appendChild(li);
}

//loop through count array and make an li for each
countData.forEach(item => {
    liMaker(item);
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

    //creates a record object
    const countRecord = {
        date: new Date(),
        count: totalCount,
        note: prompt("Type a note")
    }

    countRecordsArray.push(countRecord);
    localStorage.setItem('counts', JSON.stringify(countRecordsArray));
    liMaker(countRecord);
    resetCount();
}

function resetCount(){
    totalCount = 0;
    updateCount();
}

function resetAll(){
    localStorage.clear();
    while (countUl.firstChild){
        countUl.removeChild(countUl.firstChild)
    }
}

//Event listeners
increaseBtn.addEventListener('click', increaseCount);
decreaseBtn.addEventListener('click', decreaseCount);
saveBtn.addEventListener('click', saveCount);
resetBtn.addEventListener('click', resetCount);
resetAllBtn.addEventListener('click', resetAll);
