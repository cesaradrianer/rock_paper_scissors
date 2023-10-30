const rockButton = document.getElementById('rock-btn')
const paperButton = document.getElementById('paper-btn')
const scissorsButton = document.getElementById('scissors-btn')
const resultText = document.getElementById('result')
const pcSelectionIcon = document.getElementById('pc-selection-icon')
const pcSelectionWrapper = document.getElementById('pc-selection-img')

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)

    switch(random) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

let playerSelection = ""

function playRound(playerSelection) {

    let computerSelection = getComputerChoice()
    
    switch(true) {
        case (playerSelection == 'Rock' && computerSelection == 'Paper'):
            resultText.innerText = `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You lost!`
            pcSelectionIcon.className = 'fa-regular fa-hand'
            break
        case (playerSelection == 'Rock' && computerSelection == 'Scissors'):
            resultText.innerText = `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You won!`
            pcSelectionIcon.className = 'fa-regular fa-hand-scissors'
            break
        case (playerSelection == 'Rock' && computerSelection == 'Rock'):
            resultText.innerText = `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡It's a draw!`
            pcSelectionIcon.className = 'fa-regular fa-hand-back-fist'
            break
        case (playerSelection == 'Paper' && computerSelection == 'Rock'):
            resultText.innerText = `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You won!`
            pcSelectionIcon.className = 'fa-regular fa-hand-back-fist'
            break
        case (playerSelection == 'Paper' && computerSelection == 'Scissors'):
            resultText.innerText = `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You lost!`
            pcSelectionIcon.className = 'fa-regular fa-hand-scissors'
            break
        case (playerSelection == 'Paper' && computerSelection == 'Paper'):
            resultText.innerText = `You chose ${playerSelection}, The PC chose ${computerSelection}, It's a draw`
            pcSelectionIcon.className = 'fa-regular fa-hand'
            break
        case (playerSelection == 'Scissors' && computerSelection == 'Paper'):
            resultText.innerText = `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You won!`
            pcSelectionIcon.className = 'fa-regular fa-hand'
            break
        case (playerSelection == 'Scissors' && computerSelection == 'Rock'):
            resultText.innerText = `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You lost!`
            pcSelectionIcon.className = 'fa-regular fa-hand-back-fist'
            break
        case (playerSelection == 'Scissors' && computerSelection == 'Scissors'):
            resultText.innerText = `You chose ${playerSelection}, The PC chose ${computerSelection}, It's a draw`
            pcSelectionIcon.className = 'fa-regular fa-hand-scissors'
            break
    }
    
}

rockButton.addEventListener('click', () => {
    rockButton.className = 'play-btn-clicked'
    paperButton.className = 'play-btn'
    scissorsButton.className = 'play-btn'
    playRound('Rock')
})

paperButton.addEventListener('click', () => {
    rockButton.className = 'play-btn'
    paperButton.className = 'play-btn-clicked'
    scissorsButton.className = 'play-btn'
    playRound('Paper')
})

scissorsButton.addEventListener('click', () => {
    scissorsButton.className = 'play-btn-clicked'
    rockButton.className = 'play-btn'
    paperButton.className = 'play-btn'
    playRound('Scissors')
})