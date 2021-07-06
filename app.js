//Select DOM Elements

const questionContainer = document.getElementById('question-container');
const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-buttons')

//Shuffle questions

let shuffleQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', ()=>{
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
    questionContainer.classList.remove('hide')
    startBtn.classList.add('hide')
    shuffleQuestions = questions.sort(()=> Math.random() - 0.5)
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
 questionElement.innerText = question.question;
 question.answers.forEach(ans => {
     const button = document.createElement('button')
     button.innerText = ans.text
     button.classList.add('btn')
     if (ans.correct) {
         button.dataset.correct = ans.correct
     }
     button.addEventListener('click', selectAnswer)
     answerElement.appendChild(button)
 })
}

function resetState(){
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1){
        nextBtn.classList.remove('hide')
    }else{
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

questions = [
    {
        question: 'Which planet is closer to Earth?',
        answers: [
            {text: 'Venus', correct: true},
            {text: 'Mars', correct: false},
            {text: 'Moon', correct: false},
            {text: 'Pluto', correct: false}
        ]
    },
    {
        question: 'What is the capital of Spain?',
        answers: [
            {text: 'Seville', correct: false},
            {text: 'Valencia', correct: false},
            {text: 'Madrid', correct: true},
            {text: 'Barcelona', correct: false}
        ]
    },
    {
        question: 'In which country were first cased of COVID-19 reported?',
        answers: [
            {text: 'United States', correct: true},
            {text: 'China', correct: true},
            {text: 'India', correct: false},
            {text: 'Brazil', correct: false}
        ]
    },
    {
        question: 'Which is the biggest ocean in the world',
        answers: [
            {text: 'Atlantic', correct: false},
            {text: 'Arctic', correct: false},
            {text: 'Indian', correct: false},
            {text: 'Pacific', correct: true}
        ]
    },
    {
        question: 'Where will Olympic 2021 be held?',
        answers: [
            {text: 'England', correct: true},
            {text: 'Germany', correct: false},
            {text: 'Canada', correct: false},
            {text: 'Japan', correct: true}
        ]
    }
]