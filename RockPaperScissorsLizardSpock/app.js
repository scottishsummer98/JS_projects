// app.js

// Complete logic of game inside this function
const game = () => {
  let playerScore = 0
  let computerScore = 0
  let moves = 0

  // Function to
  const playGame = () => {
    const rockBtn = document.querySelector('.rock')
    const paperBtn = document.querySelector('.paper')
    const scissorBtn = document.querySelector('.scissor')
    const lizardBtn = document.querySelector('.lizard')
    const spockBtn = document.querySelector('.spock')
    const playerOptions = [rockBtn, paperBtn, scissorBtn, lizardBtn, spockBtn]
    const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']

    // Function to start playing game
    playerOptions.forEach((option) => {
      option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.movesleft')
        moves++
        movesLeft.innerText = `Moves Left: ${10 - moves}`

        const choiceNumber = Math.floor(Math.random() * 3)
        const computerChoice = computerOptions[choiceNumber]

        // Function to check who wins
        winner(this.innerText, computerChoice)

        // Calling gameOver function after 10 moves
        if (moves == 10) {
          gameOver(playerOptions, movesLeft)
        }
      })
    })
  }

  // Function to decide winner
  const winner = (player, computer) => {
    const result = document.querySelector('.result')
    const playerScoreBoard = document.querySelector('.p-count')
    const computerScoreBoard = document.querySelector('.c-count')
    player = player.toLowerCase()
    computer = computer.toLowerCase()
    if (player === computer) {
      result.textContent = 'Tie'
    } else if (player == 'rock') {
      if (computer == 'paper') {
        result.textContent =
          'Computer Choose Paper. Paper Coveres Rock. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      } else if (computer == 'scissors') {
        result.textContent =
          'Computer Choose Scissors. Rock Breaks Scissors. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      } else if (computer == 'lizard') {
        result.textContent =
          'Computer Choose Lizard. Rock Crushes Lizard. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      } else if (computer == 'spock') {
        result.textContent =
          'Computer Choose Spock. Spock Vaporizes Rock. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      }
    } else if (player == 'scissors') {
      if (computer == 'rock') {
        result.textContent =
          'Computer Choose Rock. Rock Breaks Scissors. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      } else if (computer == 'paper') {
        result.textContent =
          'Computer Choose Paper. Scissors Cut paper. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      } else if (computer == 'lizard') {
        result.textContent =
          'Computer Choose Lizard. Scissors Decapitates Lizard. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      } else if (computer == 'spock') {
        result.textContent =
          'Computer Choose Spock. Spock Smashes Scissors. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      }
    } else if (player == 'paper') {
      if (computer == 'rock') {
        result.textContent =
          'Computer Choose Rock. Paper Covers Rock. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      } else if (computer == 'scissors') {
        result.textContent =
          'Computer Choose Scissors. Scissors Cut paper. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      } else if (computer == 'lizard') {
        result.textContent =
          'Computer Choose Lizard. Lizard Eats Paper. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      } else if (computer == 'spock') {
        result.textContent =
          'Computer Choose Spock. Paper Disproves Spock. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      }
    } else if (player == 'lizard') {
      if (computer == 'rock') {
        result.textContent =
          'Computer Choose Rock. Rock Crushes Lizard. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      } else if (computer == 'scissors') {
        result.textContent =
          'Computer Choose Scissors. Scissors Decapitate Lizard. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      } else if (computer == 'paper') {
        result.textContent =
          'Computer Choose Paper. Lizard Eats Paper. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      } else if (computer == 'spock') {
        result.textContent =
          'Computer Choose Spock. Lizard Poisons Spock. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      }
    } else if (player == 'spock') {
      if (computer == 'rock') {
        result.textContent =
          'Computer Choose Rock. Spock Vaporizes Rock. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      } else if (computer == 'scissors') {
        result.textContent =
          'Computer Choose Scissors. Spock Smashes Scissors. Player Won!'
        playerScore++
        playerScoreBoard.textContent = playerScore
      } else if (computer == 'paper') {
        result.textContent =
          'Computer Choose Paper. Paper Disproves Spock. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      } else if (computer == 'lizard') {
        result.textContent =
          'Computer Choose Lizard. Lizard Poisons Spock. Computer Won!'
        computerScore++
        computerScoreBoard.textContent = computerScore
      }
    }
  }

  // Function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector('.move')
    const result = document.querySelector('.result')
    const reloadBtn = document.querySelector('.reload')

    playerOptions.forEach((option) => {
      option.style.display = 'none'
    })

    chooseMove.innerText = 'Game Over!!'
    movesLeft.style.display = 'none'

    if (playerScore > computerScore) {
      result.style.fontSize = '2rem'
      result.innerText = 'You Won The Game'
      result.style.color = 'green'
    } else if (playerScore < computerScore) {
      result.style.fontSize = '2rem'
      result.innerText = 'You Lost The Game'
      result.style.color = 'red'
    } else {
      result.style.fontSize = '2rem'
      result.innerText = 'Tie'
      result.style.color = 'grey'
    }
    reloadBtn.innerText = 'Restart'
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click', () => {
      window.location.reload()
    })
  }

  // Calling playGame function inside game
  playGame()
}

// Calling the game function
game()
