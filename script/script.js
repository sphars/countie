let totalCount = 0;

function increaseCount(){
    totalCount++;
    console.log(totalCount);
    updateCount(totalCount);
}

function decreaseCount(){
    if(totalCount > 0) totalCount--;
    console.log(totalCount);
    updateCount(totalCount);
}

function updateCount(counter){
    let countDisplay = document.getElementById("count");
    countDisplay.innerHTML = totalCount.toString();
}
