document.addEventListener('DOMContentLoaded', function() {

// event listener to start the quiz by loading quiz area (question and answers) and the score display
// this checks if user has entered a name before letting them proceed

document.getElementById('start-btn').addEventListener('click', verifyUser);

// event listener for bring user to start of quiz screen once they have completed the quiz

document.getElementById('play-btn').addEventListener('click', playAgain);

// event listener for bring user to home screen once they complete the quiz

document.getElementById('home').addEventListener('click', goHome);

// event listener for Next button to load next question, unless there are no questions left user will go to results screen

document.getElementById('next-btn').addEventListener('click', moveToNextQuestion);

function verifyUser(){
    if(document.getElementById('name').value === ''){
    alert('Please enter a name');
    } else {
    startGame();
    captureUserName();
    }
}

});

let currentQuestionIndex = '';

// function to move to next question

function moveToNextQuestion() {
    if (questions.length > currentQuestionIndex +1) {
        currentQuestionIndex++;
        showCurrentQuestionNumber();
        setNextQuestion(); 
    } else {
        document.getElementById('next-btn').innerText = 'END';
        setTimeout (() => {
        document.getElementById('game-play').classList.add('hide');
        document.getElementById('game-results').classList.remove('hide');
        displayFinalScore();
        }, 1000);
    }
}

// function to capture name entered on home screen and display it on results screen

function captureUserName() {
    document.getElementById('username').innerText = document.getElementById('name').value;
}

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
    document.getElementById('next-btn').innerText = 'NEXT';
}

// function to calculate and display total number of questions. Total will increase if more questions are added.

function displayNumberOfQuestions() {
    document.getElementById('number-of-qs').innerText = questions.length;
}

// function to display question and build and display answer buttons from questions array
// Some of below code was researched for how to create, populate and assign class to buttons on Web Dev Simplified youtube video (see Readme)

function showQuestion(question) {
    document.getElementById('question-box').innerText = question.question;
    document.getElementById('question-box').style.fontSize = '26px';

    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answers');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        document.getElementById('button-box').appendChild(button);
        });

    document.getElementById('next-btn').classList.remove('jiggle');
}

//function to show fact

function showFact(question) {
    document.getElementById('question-box').innerText = question.fact;
    document.getElementById('question-box').style.fontSize = '16px';
}

//function to show current question number above score to show progress

function showCurrentQuestionNumber() {
    document.getElementById('q-number').innerText = currentQuestionIndex + 1;
}

// function to display questions 

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    document.getElementById('next-btn').classList.remove('jiggle');
}

// function to remove previous answers when user moves to new question

function resetState() {
    const buttonBox = document.getElementById('button-box');
    while (buttonBox.firstChild) {
        buttonBox.removeChild(buttonBox.firstChild);
    }
    clearTimeout(timeoutId); 
}

// function to determine selected answer and functon added to assign correct or incorrect class (setStatusClass)
// and increment score if correct
// and display a fact relevant to the question (function showFact)
// and makes Next button jiggle 4 seconds after user selects an answer if they haven't clicked Next yet
// Some of below code was researched for how to identify selected button and apply correct or incorrect status on Web Dev Simplified youtube video (see Readme)

let timeoutId = '';

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    
    showFact(questions[currentQuestionIndex]);

    Array.from(document.getElementById('button-box').children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
        });
    timeoutId = setTimeout (() => {
            document.getElementById('next-btn').classList.add('jiggle');
            }, 4000);  
    if(correct) {
        let oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = ++oldScore;
        document.getElementById('final-score').innerText = ++finalScore;
        document.getElementById('final-number-of-qs').innerText = questions.length;
        }
    if (questions.length < currentQuestionIndex + 1) {
        document.getElementById('game-play').classList.add('hide');
        document.getElementById('game-results').classList.remove('hide');
        }
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

// function to display final score and final message on results screen

function displayFinalScore() {
    let finalScore = parseInt(document.getElementById('final-score').innerText);
    document.getElementById('final-score').innerText = finalScore;
    if (finalScore < 3) {
        document.getElementById('message').innerText = "Hopefully you learned something today";
    } else if (finalScore <= 5) {
        document.getElementById('message').innerText = "Not bad but better luck next time";
    } else if (finalScore <= 8) {
        document.getElementById('message').innerText = "You know your geography";
    } else if (finalScore == questions.length) {
        document.getElementById('message').innerText = "Wow. Maybe you should be a teacher";
    } else {
        document.getElementById('message').innerText = "There seems to be a problem with the score";
    }
}

// function to reset score when user finishes quiz and wants to replay

function resetScore() {
    document.getElementById('score').innerText = 0;
    document.getElementById('final-score').innerText = 0;
    document.getElementById('q-number').innerText = 1;
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
