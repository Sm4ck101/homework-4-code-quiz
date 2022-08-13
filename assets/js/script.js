// Start Quiz Values
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

// Question array
var questions = [{
    title: 'How do you create a function in JavaScript?',
    choices: ['A. function = myFunction()', 'B. function:myFunction()', 'C. function myFunction()', 'D. $Function()'],
    answer: 'A. function = myFunction()'
},
{
    title: 'What is the correct syntax for referring to an external script called "script.js"?',
    choices: ['A. script name="./script.js"', 'B. script href="./script.js"', 'C. script src="./script.js"', 'D. script="./script.js"'],
    answer: 'C. script src="./script.js"'
},
{
    title: 'How can you add a comment in a JavaScript?',
    choices: ['A. ""This is a comment', 'B. //This is a comment', 'C. !--This is a comment--', 'D. !**This is a comment**'],
    answer: 'B. //This is a comment'
},
{
    title: 'What syntax wraps around strings?',
    choices: ['A. quotes', 'B. semicolon', 'C. parenthesis', 'D. square braces'],
    answer: 'A. quotes'
},
{
    title: 'What is an array enclosed between?',
    choices: ['A. square brackets','B. curly braces','C. quotation marks', 'D. parentheses'],
    answer: 'B. curly braces'
}];

// Quiz start button function
function startTimer()   {
    timeLeft = 60;
    document.getElementById("time-left").innerHTML = timeLeft;

    timer = setInterval(function()  {
        timeLeft--;
        document.getElementById("time-left").innerHTML = timeLeft;
        if (timeLeft <= 0)  {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
    nextQuestion(); 
};

// Quiz end function
function gameOver() {
    clearInterval(timer);

    var quizContent = 
    `<h2>Game Over</h2>
    <h2>Your score is ` + score + `/100</h2>
    <input type="text" id="name" placeholder="Enter Name">
    <button onclick="setHighScore()">Set High Score</button>`;
    
    document.getElementById("quiz-body").innerHTML = quizContent;
};

// Set scores in local storage
function setHighScore() {
    localStorage.setItem("highScore", score)
    localStorage.setItem("highScoreName", document.getElementById('name').value)
    getScore();
};


// Get scores from local storage
function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highScoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highScore") + `</h1><br>
    <button onclick="clearScore()">Clear Score</button><button onclick="resetGame()">Play Again?</button>`;

    document.getElementById("quiz-body").innerHTML = quizContent;
}

// Clear Highscore funtion
function clearScore()   {
    localStorage.setItem("highScore", "");
    localStorage.setItem("highScoreName", "");

    resetGame();
}

// Game reset
function resetGame()    {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("time-left").innerHTML = timeLeft;

    var quizContent = 
    `<h1>
        Web Developer Quiz
    </h1>
    <h2>
        Click start to begin your knowledge quiz of Web Development!
    </h2>
    <button onclick="startTimer()">Begin!</button>`;

    document.getElementById("quiz-body").innerHTML = quizContent;
}

// Time penalty function for wrong answers
function incorrectAnswer()  {
    timeLeft -= 15;
    nextQuestion();
}

// Increase score for correct answers
function correctAnswer()    {
    score += 20;
    nextQuestion();
}

// Question loop
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        gameOver();
        return;
    }
    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var i = 0; i < questions[currentQuestion].choices.length; i++)  {
        var buttonLoop = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        buttonLoop = buttonLoop.replace("[CHOICE]", questions[currentQuestion].choices[i]);
        if (questions[currentQuestion].choices[i] == questions[currentQuestion].answer)    {
            buttonLoop = buttonLoop.replace("[ANS]", "correctAnswer()");
        } else {
            buttonLoop = buttonLoop.replace("[ANS]", "incorrectAnswer()");
        }
        quizContent += buttonLoop;
    }

    document.getElementById("quiz-body").innerHTML = quizContent;
}





