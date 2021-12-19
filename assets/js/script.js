startBtn.addEventListener("click", function(event) {
    startTimer();
    removeQuizTitle();
    displayQuestions(count);
}) 

function startTimer() {
    timer = setInterval(function() {        
        displayTime.textContent = "Time: " + timeRemaining;
        timeRemaining --;
        if (timeRemaining % 5 === 0) {             
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
    document.getElementById("main").setAttribute("class", "text-center text-primary");
    document.getElementById("questions").setAttribute("class", "text-center text-primary");
    divEl = document.createElement("div");
    divEl.setAttribute("class", "btn-group-lg btn-group-vertical answer-choices");
    divEl.setAttribute("id", "btn");
        
    if (timeRemaining > 0) {

        //create h2 element
        var displayedQuestion = document.createElement("h2");
        displayedQuestion.setAttribute("class", "questions");
        displayedQuestion.textContent = questions[count].question;

        // create 
        var displayed_ac_1 = document.createElement("button");
        displayed_ac_1.setAttribute("class", "btn m-3 p-3 btn-primary");
        displayed_ac_1.textContent = "1.  " + questions[count].answerChoice1;
        displayed_ac_1.addEventListener("click", function() {
            userAnswer = questions[count].answerChoice1;
            checkAnswer(count);
        });

        var displayed_ac_2 = document.createElement("button");
        displayed_ac_2.setAttribute("class", "btn m-3 p-3 btn-primary");
        displayed_ac_2.textContent = "2.  " + questions[count].answerChoice2;
        displayed_ac_2.addEventListener("click", function() {
            userAnswer = questions[count].answerChoice2;
            checkAnswer(count);
        });

        var displayed_ac_3 = document.createElement("button");
        displayed_ac_3.setAttribute("class", "btn m-3 p-3 btn-primary");
        displayed_ac_3.textContent = "3.  " + questions[count].answerChoice3;
        displayed_ac_3.addEventListener("click", function() {
            userAnswer = questions[count].answerChoice3;
            checkAnswer(count);
        });

        var displayed_ac_4 = document.createElement("button");
        displayed_ac_4.setAttribute("class", "btn m-3 p-3 btn-primary");
        displayed_ac_4.textContent = "4.  " + questions[count].answerChoice4;
        displayed_ac_4.addEventListener("click", function() {
            userAnswer = questions[count].answerChoice4;
            checkAnswer(count);            
        });

        //display question and answer choices
        document.getElementById("questions").append(displayedQuestion);
        document.getElementById("main").append(divEl);
        
        //append items
        document.getElementById("btn").append(displayed_ac_1);
        document.getElementById("btn").append(displayed_ac_2);
        document.getElementById("btn").append(displayed_ac_3);
        document.getElementById("btn").append(displayed_ac_4);
        }             
    }
    

    function checkAnswer(count) {
        
        if (!userAnswer){
            userAnswer = "wrong";
            timeRemaining -= 10;            
        }

        else if (questions[count].correctanswer === userAnswer){          
            score += 10;
            console.log(score);
          
        }
        else {
            timeRemaining -= 10;       
            
        }

        
    }



   
