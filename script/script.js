let totalCount = 0;

let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');
let saveButton = document.getElementById('save');
let resetButton = document.getElementById('reset');

increaseButton.addEventListener('click', increaseCount);
decreaseButton.addEventListener('click', decreaseCount);
saveButton.addEventListener('click', saveCount);
resetButton.addEventListener('click', resetCount);

function increaseCount(){
    totalCount++;
    console.log(totalCount);
    updateCount();
}

function decreaseCount(){
    if(totalCount > 0) totalCount--;
    console.log(totalCount);
    updateCount();
}

function updateCount(){
    let countDisplay = document.getElementById("count");
    countDisplay.innerHTML = totalCount.toString();
}

function saveCount(){
    localStorage.setItem('totalCount', totalCount);
}

function resetCount(){
    totalCount = 0;
    updateCount();
}
