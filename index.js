function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)

    switch(random) {
        case 0:
            return "Rock"
            break
        case 1:
            return "Paper"
            break
        case 2:
            return "Scissors"
            break
    }
}

let playerSelection = ""

function playRound(playerSelection) {

    let computerSelection = getComputerChoice()
    
    switch(true) {
        case (playerSelection == 'Rock' && computerSelection == 'Paper'):
            return `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You lost!`
            break
        case (playerSelection == 'Rock' && computerSelection == 'Scissors'):
            return `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You won!`
            break
        case (playerSelection == 'Rock' && computerSelection == 'Rock'):
            return `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡It's a draw!`
            break
        case (playerSelection == 'Paper' && computerSelection == 'Rock'):
            return `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You won!`
            break
        case (playerSelection == 'Paper' && computerSelection == 'Scissors'):
            return `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You lost!`
            break
        case (playerSelection == 'Paper' && computerSelection == 'Paper'):
            return `You chose ${playerSelection}, The PC chose ${computerSelection}, It's a draw`
            break
        case (playerSelection == 'Scissors' && computerSelection == 'Paper'):
            return `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You won!`
            break
        case (playerSelection == 'Scissors' && computerSelection == 'Rock'):
            return `You chose ${playerSelection}, The PC chose ${computerSelection}, ¡You lost!`
            break
        case (playerSelection == 'Scissors' && computerSelection == 'Scissors'):
            return `You chose ${playerSelection}, The PC chose ${computerSelection}, It's a draw`
            break
    }
    
}

function game() {

    let winCount = 0
    let lossCount = 0

    for (let i = 0; i < 5; i++) {

        playerSelection = window.prompt('Choose Rock, Paper or Scissors')

        let result = playRound(playerSelection)

        console.log(result)

        if (result.includes('lost')) {
            lossCount++
        } else if (result.includes('won')) {
            winCount++
        }

    }

    console.log(`You: ${winCount}, The PC: ${lossCount}`)

    if (winCount < lossCount) {
        return '¡You lost!'
    } else if (winCount > lossCount) {
        return 'You won'
    } else {
        return "It's a draw"
    }
    
}