startBtn.addEventListener("click", function(event) {
    startTimer();
    removeQuizTitle();
    displayQuestions(count);
}) 

function startTimer() {
    timer = setInterval(function() {        
        displayTime.textContent = "Time: " + timeRemaining;
        timeRemaining --;
        if ((timeRemaining % 25 === 0 && timeRemaining > 0) || clickEvent == true) {             
            count++;
            displayQuestions(count);
            clickEvent = false;
        }

        if(timeRemaining <= 0){
            displayTime.textContent = "Time: OUT OF TIME!!";                 
            clearInterval(timer);
            count = 0;
            endGame();
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


        for ( var i = 0; i < questions.length; i ++){
            displayedQuestion.textContent = questions[i].question;

            displayed_ac_1.textContent = questions[count].answerChoice1;
            displayed_ac_1.addEventListener("click", function() {
            userAnswer = questions[count].answerChoice1;
            checkAnswer(count);
            
        }
        

        
        
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
        var userPrompt = document.createElement("h3");
        userPrompt.setAttribute("id", "user-prompt");
        userPrompt.setAttribute("class", "p-3 bg-primary text-white text-center");
        document.getElementById("main").append(userPrompt);
        document.getElementById("user-prompt").style.visibility = "hidden";


        
        console.log(localStorage.getItem("correctResponse"));
        console.log(localStorage.getItem("userResponse"));
        if (localStorage.getItem("correctResponse") === localStorage.getItem("userResponse")){    
            
            score += 10;            
            document.getElementById("user-prompt").style.visibility = "visible";
            userPrompt.innerHTML = "CORRECT!!!";

          
        }
        else {
            score -= 10;                 
            timeRemaining -= 10;

            if (timeRemaining <= 0 ){
                timeRemaining = 0;
            } 

            displayHighScore.innerHTML = "Score: " + score;
            document.getElementById("user-prompt").style.visibility = "visible";
            userPrompt.innerHTML = "WRONG!!!";

        }          
        
        userPrompt.remove();
             
    }

    function endGame() {
        if (gameOver == false){

            var removeQuestions = document.getElementById("question-answer-section").style.visibility = "hidden";
            
            var endGameTitle = document.createElement("h2");
            endGameTitle.setAttribute("class", "container-fix p-5 bg-primary text-white text-center");
            endGameTitle.innerHTML = "Quiz Complete!!";

            var endGameMessage = document.createElement("h4");
            endGameMessage.setAttribute("class", "text-center");
            endGameMessage.innerHTML = "Your Final Score is " + saved_score;
            
            var textLabel = document.createElement("label");
            textLabel.setAttribute("class", "text-center col-xs-2 text-center text-blue");
            textLabel.innerHTML = "Enter Initials:";
            textLabel.setAttribute("for", "input");

            var initials = document.createElement("input");
            initials.setAttribute("class", "col-xs-2 text-center")
            initials.setAttribute("id", "initials")
            initials.setAttribute("name", "user-initials");
            initials.setAttribute("type", "text");
            initials.setAttribute("placeholder", "Enter Your Initials Here");

            var submitBtn = document.createElement("button");
            submitBtn.setAttribute("class", "btn m-3 p-3 btn-info");
            submitBtn.setAttribute("id", "submit-btn"); 
            submitBtn.textContent = "Submit";
           

            document.getElementById("end-game").append(endGameTitle);
            document.getElementById("end-game").append(endGameMessage);
            document.getElementById("end-game").append(textLabel);
            document.getElementById("end-game").append(initials);
            document.getElementById("end-game").append(submitBtn);




            //document.getElementById("end-game").append(inputDivEl);
            localStorage.setItem("highScore", score);            

            submitBtn.addEventListener("click", function() {
                var saved_initials = document.getElementById("initials").value;
               
                localStorage.setItem("user_initials", JSON.stringify(saved_initials));
                submitBtn.disabled = true;
            });

            clearInterval(timer);
        }
        gameOver = true;
    }



   
