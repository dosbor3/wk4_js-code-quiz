startBtn.addEventListener("click", function(event) {
    startTimer();
    removeQuizTitle();
    displayQuestions(count);
}) 

function startTimer() {
    timer = setInterval(function() {        
        displayTime.textContent = "Time: " + timeRemaining;
        timeRemaining --;     
        if ((timeRemaining % 10 === 0 && timeRemaining > 0) || clickEvent == true) {             
            count++;
            displayQuestions(count);
            clickEvent = false;
            //console.log("StartTimer function and count of " + count);
        }
        if (timeRemaining <= 0 || count > 9) {
            displayTime.textContent = "Time: OUT OF TIME!!";                 
            endGame();
            clearInterval(timer);
            count = 0;            
        }
    }, 1000);    
}

function removeQuizTitle() {
    document.getElementById("test-title").style.visibility = "hidden";
    document.getElementById("instructions").style.visibility = "hidden"; 
    document.getElementById("start-btn").style.visibility = "hidden";  
}

function displayQuestions(count) {
    //debugger
    //if (timeRemaining > 0 && count < 9) {   

            displayedQuestion.textContent = questions[count].question;

            displayed_ac_1.textContent = questions[count].answerChoice1;          
            displayed_ac_1.addEventListener("click", function() {
                userAnswer = questions[count].answerChoice1;
                checkAnswer(count);
                clickEvent = true;           
            });    
        
            displayed_ac_2.textContent = questions[count].answerChoice2;
            displayed_ac_2.addEventListener("click", function() {
                userAnswer = questions[count].answerChoice2;
                checkAnswer(count);
                clickEvent = true;
            });
            
            displayed_ac_3.textContent = questions[count].answerChoice3;
            displayed_ac_3.addEventListener("click", function() {
                userAnswer = questions[count].answerChoice3;
                checkAnswer(count);
                clickEvent = true;
            });

            
            displayed_ac_4.textContent = questions[count].answerChoice4;
            displayed_ac_4.addEventListener("click", function() {
                userAnswer = questions[count].answerChoice4;
                checkAnswer(count);
                clickEvent = true;            
            }); 
            
            

           /* if (!userAnswer ) {
                checkAnswer(count);
            }
            else if (!userAnswer && timeRemaining <= 0){
                displayTime.textContent = "Time: OUT OF TIME!!";                 
                endGame();
                clearInterval(timer);
                count = 0;   
            }  
            else {
                checkAnswer(count);
            }  */   

    
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
        
        var tester = questions[count].correctanswer;
        console.log(tester);

        if (tester == userAnswer){              
            score += 10;
            tester = "wrong";
            
        }
        else {
            score -= 10;                 
            timeRemaining -= 10;
            tester = "wrong";

            if (timeRemaining <= 0 ){
                timeRemaining = 0;
            } 

            displayHighScore.innerHTML = "Score: " + score;            
        }                
    }

    function endGame() {
        if (gameOver == false){

            var removeQuestions = document.getElementById("question-answer-section").style.visibility = "hidden";
            
            var endGameTitle = document.createElement("h2");
            endGameTitle.setAttribute("class", "container-fix p-5 bg-primary text-white text-center");
            endGameTitle.innerHTML = "Quiz Complete!!";

            var endGameMessage = document.createElement("h4");
            endGameMessage.setAttribute("class", "text-center");
            endGameMessage.innerHTML = "Your Final Score is " + score;
            
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



   
