// Global Variables
// var scores = document.querySelector("#scores");
var quizWrapper = document.querySelector("#quiz-wrapper");
var title = document.querySelector("#title");
var content = document.querySelector("#content");
var startBtn = document.querySelector("#start-btn");
var questionWrapper = document.querySelector("#question-wrapper");
// var answer = document.querySelector("#answer");

// Start of game variables
var time = 60;
var score = "";


// Timer Function
function timer()    {
    setInterval(function (){
        var timer = document.getElementById("timer");
        if (time > 0 && i < 5){
            time = time -1;
            timer.textContent = "Time left:" + time + "!";
        }
    },1000);
};


// List of Questions
var questionBank = [
    {
        question: "How do you create a function in JavaScript?",
        selection: ["A. function = myFunction()", "B. function:myFunction()", "C. function myFunction()", "D. $Function()"],
        answer: "A. function myFunction()",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        selection: ["A. <script name='./script.js'>", "B. <script href='./script.js'>", "C. <script scr='./script.js'>", "D. <script ='./script.js'>"],
        answer: "C. <script scr='./script.js'>",
    },
    {
        question: "How can you add a comment in a JavaScript?",
        selection: ["A. 'This is a comment", "B. //This is a comment", "C. <!--This is a comment-->", "D. <!**This is a comment**>"],
        answer: "B. //This is a comment",
    },
    {
        question: "JavaScript is the same as Java?",
        selection: ["A. True", "B. False", "C. Maybe", "D. I don't know"],
        answer: "B. False",
    },
    {
        question: "What is an array enclosed between?",
        selection: ["A. Square brackets","B. Curly braces","C. Quotation marks", "D. Parentheses"],
        answer: "A. Square brackets",
    },
]

var i = 0;

var startQuiz