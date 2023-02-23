document.addEventListener("DOMContentLoaded", function() {

// questions and answers arrays 

const questions = [
    {
        question: 'Which country has the most Pyramids?',
        answer: [
            {text: 'Egypt', correct: false },
            {text: 'Sudan', correct: true},
            {text: 'Libya', correct: false},
            {text: 'Israel', correct: false}
        ]
    },
    {
        question: 'Which country has the highest waterfall?',
        answer: [
            {text: 'South Africa', correct: false },
            {text: 'USA', correct: false},
            {text: 'Venezuela', correct: true},
            {text: 'Peru', correct: false}
        ]
    },
    {
        question: 'Which country has the most official languages?',
        answer: [
            {text: 'Bolivia', correct: true },
            {text: 'Zimbabwe', correct: false},
            {text: 'Singapore', correct: false},
            {text: 'South Africa', correct: false}
        ]
    },
    {
        question: 'Which country has the most active volcanoes?',
        answer: [
            {text: 'Japan', correct: false},
            {text: 'USA', correct: false},
            {text: 'Indonesia', correct: true},
            {text: 'Iceland', correct: false}
        ]
    },
    {
        question: "In which country is Europe's highest mountain",
        answer: [
            {text: 'Slovenia', correct: false },
            {text: 'Russia', correct: true},
            {text: 'Italy', correct: false},
            {text: 'Switzerland', correct: false}
        ]
    },

];




const startButton = document.getElementById('start-btn')
const quizRules = document.getElementById('login-rules');
const playGameArea = document.getElementById('game-play')
const questionBox = document.getElementById('question-box')
const nextButton = document.getElementById('next-btn')
const resultsArea = document.getElementById('game-results')
const buttonBox = document.getElementById('button-box')
let currentQuestionIndex = ""

// event listener to start the quiz by loading quiz area (question and answers) and the score display

startButton.addEventListener('click', startGame)

// event listener for Next button to load next question, unless there are no questions left user will go to results screen

nextButton.addEventListener('click', () => {
    
    if (questions.length > currentQuestionIndex +1) {
    
    currentQuestionIndex++
    setNextQuestion(); }
    else {
        console.log("end")
        nextButton.innerText = "END"
        setTimeout (() => {
            
        playGameArea.classList.add('hide')
        resultsArea.classList.remove('hide')
    }, 1000)


}
})

// function to start quiz when user clicks start button

function startGame() {
    resetState()
    console.log('started')
    quizRules.classList.add('hide')
    resultsArea.classList.add('hide')
    playGameArea.classList.remove('hide')
    displayNumberOfQuestions ()
    currentQuestionIndex = 0
    setNextQuestion()
    nextButton.innerText = "NEXT"
}

// function to calculate and display total number of questions. Total will increase if more questions are added.

function displayNumberOfQuestions() {
    const NoOfQs = questions.length;
    document.getElementById('number-of-qs').innerText = NoOfQs;
}


// function to build questions and answers from questions array

function showQuestion(question) {
    questionBox.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')   
        button.innerText = answer.text
        button.classList.add('answers')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        buttonBox.appendChild(button)
        
        })
  
  

}

// function to display questions 

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
       
    
}

// function to remove previous answers when user moves to new question

function resetState() {
    while (buttonBox.firstChild) {
        buttonBox.removeChild(buttonBox.firstChild)
    }
  }

// function to  identify if answer is correct or incorrect
//  and increment score if correct

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    
    Array.from(buttonBox.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        
    }
    )
    if(correct) {
        let oldScore = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++oldScore;
        selectedButton.disabled = true
    }
    if (questions.length < currentQuestionIndex + 1) {
    
        playGameArea.classList.add('hide')
        resultsArea.classList.remove('hide')
    }

    
    }

// function to add class to buttons to identify correct answer for each question

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        
    } else {
        element.classList.add('incorrect')
    }   
}

// function to remove class added to identify correct answer for each question

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')

}

// function to bring user back to login and rules screen
    let home = document.getElementById('home')
function goHome() {

    quizRules.classList.remove('hide')
    playGameArea.classList.add('hide')
    resultsArea.classList.add('hide')

}

// function to bring user back to start of quiz
let again = document.getElementById('play-btn')
function playAgain() {
    startGame()
    
}

again.addEventListener('click', playAgain)
home.addEventListener('click', goHome)



});

