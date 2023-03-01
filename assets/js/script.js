document.addEventListener('DOMContentLoaded', function() {

// event listener to start the quiz by loading quiz area (question and answers) and the score display
// this checks if user has entered a name before letting them proceed

document.getElementById('start-btn').addEventListener('click', verifyUser)
document.getElementById('play-btn').addEventListener('click', playAgain);
document.getElementById('home').addEventListener('click', goHome);
document.getElementById('next-btn').addEventListener('click', moveToNextQuestion);

function verifyUser(){
if(document.getElementById('name').value === ''){
    let error = 'Please enter a name'
    alert(error);
 } else {
    startGame()
    captureUserName()
 }
}

});

let currentQuestionIndex = '';

// event listener for Next button to load next question, unless there are no questions left user will go to results screen



// function to move to next question

function moveToNextQuestion() {
    if (questions.length > currentQuestionIndex +1) {
        currentQuestionIndex++;
        setNextQuestion(); 
    } else {
        document.getElementById('next-btn').innerText = 'END';
        setTimeout (() => {
        document.getElementById('game-play').classList.add('hide');
        document.getElementById('game-results').classList.remove('hide');
        }, 1000);
}};

// function to capture name entered on home screen and display it on results screen

function captureUserName() {
    let name = document.getElementById('name').value;
    document.getElementById('username').innerText = name
};

// function to start quiz when user clicks start button

function startGame() {
    resetState();
    document.getElementById('login-rules').classList.add('hide');
    document.getElementById('game-results').classList.add('hide');
    document.getElementById('game-play').classList.remove('hide');
    displayNumberOfQuestions ();
    currentQuestionIndex = 0;
    oldScore = 0;
    finalScore = 0;
    setNextQuestion();
    document.getElementById('next-btn').innerText = "NEXT";
}

// function to calculate and display total number of questions. Total will increase if more questions are added.

function displayNumberOfQuestions() {
    const NoOfQs = questions.length;
    document.getElementById('number-of-qs').innerText = NoOfQs;
}


// function to build questions and answers from questions array

function showQuestion(question) {
    document.getElementById('question-box').innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button')   ;
        button.innerText = answer.text;
        button.classList.add('answers');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        document.getElementById('button-box').appendChild(button);
        });
}

//function to show fact
function showFact(question) {
    document.getElementById('question-box').innerText = question.fact
}

// function to display questions 

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

// function to remove previous answers when user moves to new question

function resetState() {
    const buttonBox = document.getElementById('button-box');
    while (buttonBox.firstChild) {
        buttonBox.removeChild(buttonBox.firstChild);
    }
}

// function to  identify if answer is correct or incorrect
// and increment score if correct
// and display a fact relevant to the question

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    
    showFact(questions[currentQuestionIndex])

    Array.from(document.getElementById('button-box').children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
        });
    if(correct) {
        let oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = ++oldScore;
        document.getElementById('final-score').innerText = ++finalScore;
        document.getElementById('final-number-of-qs').innerText = questions.length;
        }
    if (questions.length < currentQuestionIndex + 1) {
        document.getElementById('game-play').classList.add('hide');
        document.getElementById('game-results').classList.remove('hide');
        displayFinalScore();
    };
}

// function to add class to buttons to identify correct answer for each question

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct'); 
    } else {
        element.classList.add('incorrect');
    }   
}

// function to remove class added to identify correct answer for each question

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');

}

// function to display final score on results screen

let finalScore = parseInt(document.getElementById('final-score').innerText);
function displayFinalScore() {
    document.getElementById('final-score').innerText = ++finalScore;
}

// function to reset score when user finishes quiz and wants to replay

function resetScore() {
    document.getElementById('score').innerText = 0;
    document.getElementById('final-score').innerText = 0;
}

// function to bring user back to login and rules screen


function goHome() {
    document.getElementById('login-rules').classList.remove('hide');
    document.getElementById('game-play').classList.add('hide');
    document.getElementById('game-results').classList.add('hide');
    resetScore();
}

// function to bring user back to start of quiz


function playAgain() {
    resetScore();
    startGame();
}







