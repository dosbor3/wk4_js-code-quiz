startBtn.addEventListener("click", function(event) {
    console.log("It works!")
    startTimer();

}) 

function startTimer() {
    timer = setInterval(function() {
        console.log(timeRemaining);
        timeRemaining --;
    }, 1000)

    if(timeRemaining <= 0) {
        stopTimer();
    }
}

function stopTimer(timer){
    clearInterval(timer);
}

function displayQuestion() {
    
}

