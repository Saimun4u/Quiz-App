//Select DOM Elements

const questionContainer = document.getElementById('question-container');
const startBtn = document.getElementById('start-btn')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-buttons')

//Shuffle questions

let shuffleQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)

function startGame(){
    questionContainer.classList.remove('hide')
    startBtn.classList.add('hide')
    shuffleQuestions = questions.sort(()=> Math.random() - 0.5)
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion(){
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

function selectAnswer(e){

}

questions = [
    {
        question: 'Which planet is closer to Earth?',
        answers: [
            {text: 'Venus', correct: true},
            {text: 'Mars', correct: false}
        ]
    }
]