startBtn.addEventListener("click", function(event) {
    startTimer();
    removeQuizTitle();
    displayQuestions(count);
}) 

function startTimer() {
    document.getElementById("start-btn").visibility = "hidden";
    timer = setInterval(function() {        
        displayTime.textContent = "Time: " + timeRemaining;
        timeRemaining --;

        if(timeRemaining <= 0){
            displayTime.textContent = "Time: OUT OF TIME!!";                 
            clearInterval(timer);
        }

    }, 1000);
}
if(timeRemaining <= 0) {
    stopTimer(timer);  
}


function removeQuizTitle() {
    document.getElementById("test-title").style.visibility = "hidden";
    document.getElementById("instructions").style.visibility = "hidden";   
}

function displayQuestions(count) {
    document.getElementById("main").setAttribute("class", "text-center text-primary");
    var divEl = document.createElement("div");
    divEl.setAttribute("class", "btn-group-lg btn-group-vertical rounded-pill");
    divEl.setAttribute("id", "btn");
        
    if (timeRemaining > 0) {

        //create h2 element
        displayedQuestion = document.createElement("h2");
        displayedQuestion.textContent = questions[count].question;

        // create 
        var displayed_ac_1 = document.createElement("button");
        displayed_ac_1.setAttribute("class", "btn m-3 p-3 btn-primary");
        displayed_ac_1.textContent = "1.  " + questions[count].answerChoice1;

        var displayed_ac_2 = document.createElement("button");
        displayed_ac_2.setAttribute("class", "btn m-3 p-3 btn-primary");
        displayed_ac_2.textContent = "2.  " + questions[count].answerChoice2;

        var displayed_ac_3 = document.createElement("button");
        displayed_ac_3.setAttribute("class", "btn m-3 p-3 btn-primary");
        displayed_ac_3.textContent = "3.  " + questions[count].answerChoice3;

        var displayed_ac_4 = document.createElement("button");
        displayed_ac_4.setAttribute("class", "btn m-3 p-3 btn-primary");
        displayed_ac_4.textContent = "4.  " + questions[count].answerChoice4;

        //display question and answer choices
        document.getElementById("main").append(displayedQuestion);
        document.getElementById("main").append(divEl);
        
        //append items
        document.getElementById("btn").append(displayed_ac_1);
        document.getElementById("btn").append(displayed_ac_2);
        document.getElementById("btn").append(displayed_ac_3);
        document.getElementById("btn").append(displayed_ac_4);

        count++; 

        }
    }

   
