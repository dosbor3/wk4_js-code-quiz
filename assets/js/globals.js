var startBtn = document.getElementById("start-btn");
var displayHighScore = document.getElementById("view-high-score");
var displayTime = document.getElementById("view-timer");

var score = 0;
var userInitials = "";
var timer = 0;
var myInterval = setInterval(timer, 1000);
var timeRemaining = 30;
var count = 0;  //<-- used to loop through questions array
var userAnswer = "";
var divEl = "";
var clickEvent = false;
var gameOver = false;
var questionsMissed = 0;

document.getElementById("main").setAttribute("class", "text-center text-primary");
document.getElementById("questions").setAttribute("class", "text-center text-primary");
divEl = document.createElement("div");
divEl.setAttribute("class", "btn-group-lg btn-group-vertical answer-choices");
divEl.setAttribute("id", "btn");
var displayedQuestion = document.createElement("h2");
displayedQuestion.setAttribute("class", "questions");  

var displayed_ac_1 = document.createElement("button");
displayed_ac_1.setAttribute("class", "btn m-3 p-3 btn-primary");
displayed_ac_1.setAttribute("id", "btn-1");

var displayed_ac_2 = document.createElement("button");
displayed_ac_2.setAttribute("class", "btn m-3 p-3 btn-primary");
displayed_ac_2.setAttribute("id", "btn-2");

var displayed_ac_3 = document.createElement("button");
displayed_ac_3.setAttribute("class", "btn m-3 p-3 btn-primary");
displayed_ac_3.setAttribute("id", "btn-3");

var displayed_ac_4 = document.createElement("button");
displayed_ac_4.setAttribute("class", "btn m-3 p-3 btn-primary");
displayed_ac_4.setAttribute("id", "btn-4");

var questions = [
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answerChoice1: "<scripting>",
        answerChoice2: "<javascript>",
        answerChoice3: "<script>",
        answerChoice4: "<js>",
        correctanswer: "<script>",
        userResponse: "document.get"

    },
    {
        question:"What is the correct JavaScript syntax to change the content of the HTML element " +
                 "<p id=\"demo\">This is a demonstration.</p>",
        answerChoice1: "#demo.innerHTML = \"Hello World!;\"",
        answerChoice2: "document.getElement(\"p\").innerHTML = \"Hello World!\";",
        answerChoice3: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
        answerChoice4: "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
        correctanswer: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";"

    },
    {
        question:"What does the acronym DOM stand for?",
        answerChoice1: "Declaration Object Model",
        answerChoice2: "Declaration Observance Mode",
        answerChoice3: "Document Observance Model",
        answerChoice4: "Document Object Model",
        correctanswer: "Document Object Model"

    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        answerChoice1: "The <head> section",
        answerChoice2: "The <body> section",
        answerChoice3: "Both the <head> section and the <body> section are correct",
        answerChoice4: "The <jsp> section",
        correctanswer: "Both the <head> section and the <body> section are correct"

    },
    {
        question:"What is the correct syntax for referring to an external script called \"xxx.js\"?",
        answerChoice1: "<script href= \"xxx.js\">",
        answerChoice2: "<script name= \"xxx.js\">",
        answerChoice3: "<script src= \"xxx.js\">",
        answerChoice4: "<script link= \"xxx.js\">",
        correctanswer: "<script src= \"xxx.js\">"

    },
    {
        question:"The external JavaScript file must contain the <script> tag.",
        answerChoice1: "True",
        answerChoice2: "False", 
        answerChoice3: "Either True or False",  
        answerChoice4: "Only True when NOt False",     
        correctanswer: "False"

    },
    {
        question:"How do you write \"Hello World\" in an alert box?",
        answerChoice1: "alertBox(\"Hello World\");",
        answerChoice2: "msg(\"Hello World\");",
        answerChoice3: "msgBox(\"Hello World\");",
        answerChoice4: "alert(\"Hello World\");",
        correctanswer: "alert(\"Hello World\");"

    },
    {
        question:"How do you create a function in JavaScript?",
        answerChoice1: "var myFunction = function() {};",
        answerChoice2: "myFunction = var myFunction() {};",
        answerChoice3: "var myFunction:myFunction() {};",
        answerChoice4: "alert(\"Hello World\");",
        correctanswer: "var myFunction = function() {};"

    },
    {
        question:"How do you call a function named \"myFunction\"?",
        answerChoice1: "call function myFunction()",
        answerChoice2: "myFunction()",
        answerChoice3: "call function myFunction()",
        answerChoice4: "call myFunction()",
        correctanswer: "myFunction()"

    },
    {
        question:"How to write an IF statement in JavaScript?",
        answerChoice1: "if i = 5 then",
        answerChoice2: "if i == 5 then",
        answerChoice3: "if(i == 5)",
        answerChoice4: "if i = 5",
        correctanswer: "if(i == 5)"

    },
];

