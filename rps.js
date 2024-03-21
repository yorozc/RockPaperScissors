function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    let choice = getRandomIntInclusive(0, 2)
    return choices[choice]
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    let tie = "Tie! :-|"
    let lose = "You Lose! :("
    let win = "You win! :)"

    if ((playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        console.log(win)
    } else if (playerChoice === computerChoice) {
        console.log(tie)
    } else {
        console.log(lose)
    }
    
}

function playGame(num_of_rounds) {
    p_score = 0
    c_score = 0

    for (let i = 0; i < num_of_rounds; i++) {
        const playerChoice = prompt("Rock, Paper, or Scissors: ")
        const computerChoice = getComputerChoice()
        play = playRound(playerChoice, computerChoice)
        console.log(playerChoice)
        console.log(computerChoice)
        console.log(play)
        if (play === "You win! :") {
            p_score += 1
        } else if (play === "Tie! :-|") {
            continue
        }
        else if (play === "You Lose! :("){
            c_score += 1
        }
    
    }
    console.log("Player score: " + p_score)
    console.log("Computer score: " + c_score)
    
}

const rockBtn = document.querySelector("#Rock");

rockBtn.addEventListener("click", () =>{
    console.clear() 
    playRound("rock", getComputerChoice())
});

const paperBtn = document.querySelector("#Paper");

paperBtn.addEventListener("click", () =>{
    console.clear() 
    playRound("paper", getComputerChoice())
});

const scissBtn = document.querySelector("#Scissors");

scissBtn.addEventListener("click", () =>{
    console.clear() 
    playRound("scissors", getComputerChoice())
});

//result displayer



    

