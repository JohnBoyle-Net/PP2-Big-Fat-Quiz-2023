addEventListener('DOMContentLoaded', (event) => {


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



let i = 0; 
    iLoop:
    while (i < questions.length) {
        let j = 0;
        jLoop:
        while (j < 4) {
            if (j === 0) {
                
        }
        console.log(questions[i].answer[j])
        j++;
    }
    if (i === 0) {
        console.log(questions[i].question)
        break;
    }
    console.log(questions[i].question)
    i++;
}



const startButton = document.getElementById('start-btn')
const quizRules = document.getElementById('login-rules');
const playGameArea = document.getElementById('game-play')
const questionBox = document.getElementById('question-box')
const nextButton = document.getElementById('next-btn')
const resultsArea = document.getElementById('game-results')

// function to start the quiz by loading quiz area (question and answers) and the score display

startButton.addEventListener('click', startGame)



function startGame() {
    console.log('started')
    quizRules.classList.add('hide')
    playGameArea.classList.remove('hide')
    setFirstQuestion()
    displayNumberOfQuestions ()
    displayCorrectAnswer()
}

// function to calculate and display total number of questions. Total will increase if more questions are added.

function displayNumberOfQuestions () {
    const NoOfQs = questions.length;
    document.getElementById('number-of-qs').innerText = NoOfQs;
}

// function to display the first question and the possible answers

function setFirstQuestion() {
    let i = 0; 
    iLoop:
    while (i < questions.length) {
        let j = 0;
        jLoop:
        while (j < 4) {
            if (j === 0) {
                
        }
        console.log(questions[i].answer[j])
        j++;
    }
    if (i === 0) {
        console.log(questions[i].question)
        break;
    }
    
    i++;
    }
    questionBox.innerHTML = (questions[i].question)

    let firstAnswerBox = document.getElementById('one');
    let firstAnswer = questions[0].answer[0].text;
    firstAnswerBox.innerHTML = firstAnswer
    let secondAnswerBox = document.getElementById('two');
    let secondAnswer = questions[0].answer[1].text;
    secondAnswerBox.innerHTML = secondAnswer
    let thirdAnswerBox = document.getElementById('three');
    let thirdAnswer = questions[0].answer[2].text;
    thirdAnswerBox.innerHTML = thirdAnswer
    let fourthAnswerBox = document.getElementById('four');
    let forthAnswer = questions[0].answer[3].text;
    fourthAnswerBox.innerHTML = forthAnswer
}

// function to display correct answer. When user clicks on an answer it should turn either green or red. Correct answer will be green 
// and all incorrect will be red

// not working

function displayCorrectAnswer(event) {
    const answerBoxes = document.getElementsByClassName('answers')
    if (questions.correct) {
        answerBoxes.classList.add('correct');
    } else {
        answerBoxes.classList.add('incorrect');
    };
    incrementUserScore()
    answerBoxes.addEventListener('click', displayCorrectAnswer())
};




// function to increase the score displayed when a correct answer is selected

function incrementUserScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

function displayNextQuestion() {
   
    let nextQuestion = questions[0].question++
    questionBox.innerHTML = nextQuestion
    let firstAnswerBox = document.getElementById('one')++;
    let firstAnswer = questions[0].answer[0].text++;
    firstAnswerBox.innerHTML = firstAnswer
    let secondAnswerBox = document.getElementById('two')++;
    let secondAnswer = questions[0].answer[1].text++;
    secondAnswerBox.innerHTML = secondAnswer
    let thirdAnswerBox = document.getElementById('three')++;
    let thirdAnswer = questions[0].answer[2].text++;
    thirdAnswerBox.innerHTML = thirdAnswer
    let fourthAnswerBox = document.getElementById('four')++;
    let forthAnswer = questions[0].answer[3].text++;
    fourthAnswerBox.innerHTML = forthAnswer

  }    

nextButton.addEventListener('click', displayNextQuestion) 


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


}




)