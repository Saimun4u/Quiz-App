//Select DOM Elements

const questionContainer = document.getElementById('question-container');
const startBtn = document.getElementById('start-btn')


startBtn.addEventListener('click', startGame)

function startGame(){
    questionContainer.classList.remove('hide')
    startBtn.classList.add('hide')
}

function showNextQuestion(){

}

function showAnswer(){

}