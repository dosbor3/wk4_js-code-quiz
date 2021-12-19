startBtn.addEventListener("click", function(event) {
    startTimer();
    removeQuizTitle();
    displayQuestions(count);
}) 

function startTimer() {
    timer = setInterval(function() {        
        displayTime.textContent = "Time: " + timeRemaining;
        timeRemaining --;
        if (timeRemaining % 5 === 0 && timeRemaining != 0) {             
            count++;
            displayQuestions(count);
        }

        if(timeRemaining === 0){
            displayTime.textContent = "Time: OUT OF TIME!!";                 
            clearInterval(timer);
            count = 0;
            displayQuestions();
        }

    }, 1000);
}

function removeQuizTitle() {
    document.getElementById("test-title").style.visibility = "hidden";
    document.getElementById("instructions").style.visibility = "hidden"; 
    document.getElementById("start-btn").style.visibility = "hidden";  
}

function displayQuestions(count) {
    if (timeRemaining > 0) {
        displayedQuestion.textContent = questions[count].question;

        displayed_ac_1.textContent = questions[count].answerChoice1;
        displayed_ac_1.addEventListener("click", function() {
            userAnswer = questions[count].answerChoice1;
            checkAnswer(count);
        });

        displayed_ac_2.textContent = questions[count].answerChoice2;
        displayed_ac_2.addEventListener("click", function() {
            userAnswer = questions[count].answerChoice2;
            checkAnswer(count);
        });
        
        displayed_ac_3.textContent = questions[count].answerChoice3;
        displayed_ac_3.addEventListener("click", function() {
            userAnswer = questions[count].answerChoice3;
            checkAnswer(count);
        });

        
        displayed_ac_4.textContent = questions[count].answerChoice4;
        displayed_ac_4.addEventListener("click", function() {
            userAnswer = questions[count].answerChoice4;
            checkAnswer(count);            
        });    
    }

        //display question and answer choices
        document.getElementById("questions").append(displayedQuestion);
        document.getElementById("main").append(divEl);
        
        //append items
        document.getElementById("btn").append(displayed_ac_1);
        document.getElementById("btn").append(displayed_ac_2);
        document.getElementById("btn").append(displayed_ac_3);
        document.getElementById("btn").append(displayed_ac_4);
}             
    

    function checkAnswer(count) {
        
       if (questions[count].correctanswer === userAnswer){          
            score += 10;
            console.log(score);
          
        }
        else {
            timeRemaining -= 10;            
        }        
    }



   
