


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
const answerBoxes = document.getElementsByClassName('answers')
const buttonBox = document.getElementById('button-box')

// function to start the quiz by loading quiz area (question and answers) and the score display

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    resetState()
    currentQuestionIndex++
    
    setNextQuestion();
})

let shuffledQuestion = ""
let currentQuestionIndex = ""


function startGame() {
    console.log('started')
    quizRules.classList.add('hide')
    playGameArea.classList.remove('hide')
    displayNumberOfQuestions ()
    questionsOrdered = questions
    currentQuestionIndex = 0
    setNextQuestion()
}

// function to calculate and display total number of questions. Total will increase if more questions are added.

function displayNumberOfQuestions() {
    const NoOfQs = questions.length;
    document.getElementById('number-of-qs').innerText = NoOfQs;
}

function setNextQuestion() {
    
    showQuestion(questionsOrdered[currentQuestionIndex])
    
        
        
}

 

function showQuestion(question) {
    questionBox.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')   
        button.innerText = answer.text
        button.classList.add('answers')
        if(answer.correct) {
            button.dataset.correct = answer.correct
            
        }

        button.addEventListener('click', selectAnswer)
        buttonBox.appendChild(button)
})
}

function resetState() {
    clearStatusClass(document.body)
    while (buttonBox.firstChild) {
        buttonBox.removeChild(buttonBox.firstChild)
    }
  }

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if(correct) {
        let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    }
    setStatusClass(document.body, correct)
    Array.from(buttonBox.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        
    })

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        
    } else {
        element.classList.add('incorrect')
    }
    
    
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')

}



// function to increase the score displayed when a correct answer is selected

function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

        }
    
   
  





// function to bring user back to login and rules screen

function goHome() {
    let home = document.getElementById('home')
    quizRules.classList.remove('hide')
    playGameArea.classList.add('hide')
    resultsArea.classList.add('hide')
    home.addEventListener('click', goHome)
}

// function to bring user back to start of quiz

function playAgain() {
    let again = document.getElementById('play-btn')
    playGameArea.classList.remove('hide')
    resultsArea.classList.add('hide')
    again.addEventListener('click', playAgain)

}







