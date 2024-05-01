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

    if ((playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        return "win"

    } else if (playerChoice === computerChoice) {
        //pass
    } else {
        return "lose"
    }
}


function disableButtons(){
    document.getElementById("Rock").disabled = true;
    document.getElementById("Scissors").disabled = true;
    document.getElementById("Paper").disabled = true;
}

function scoreChecker(score){
    if (score === "win"){
        p_score += 1

    } else if (score === "lose"){
        c_score += 1
    }else{
        //pass
    }

    if (p_score == 5){
        winner.textContent = "Player Wins!"
        results.appendChild(winner)
        disableButtons()
    }else if (c_score == 5){
        winner.textContent = "Computer Wins!"
        results.appendChild(winner)
        disableButtons()
    }

    playerScore.textContent = "Player Score: " + p_score
    results.appendChild(playerScore)
    compScore.textContent = "Computer Score: " + c_score
    compChoice.textContent = "Computer choice: " + comp_choice
    results.appendChild(compScore)
    results.appendChild(compChoice)
}


p_score = 0
c_score = 0
const results = document.querySelector("#results")

const playerScore = document.createElement("div")
playerScore.classList.add("p_score")

const compScore = document.createElement("div")
compScore.classList.add("c_score")

const compChoice = document.createElement("div")
compChoice.classList.add("comp_choice")

const winner = document.createElement("div")
winner.classList.add("winner")

const rockBtn = document.querySelector("#Rock");

rockBtn.addEventListener("click", () =>{
    console.clear() 
    comp_choice = getComputerChoice()
    score = playRound("rock", comp_choice)
    scoreChecker(score)
});

const paperBtn = document.querySelector("#Paper");

paperBtn.addEventListener("click", () =>{
    console.clear() 
    comp_choice = getComputerChoice()
    score = playRound("paper", comp_choice)
    scoreChecker(score)
});

const scissBtn = document.querySelector("#Scissors");

scissBtn.addEventListener("click", () =>{
    console.clear() 
    comp_choice = getComputerChoice()
    score = playRound("scissors", comp_choice)
    scoreChecker(score)
});

const restbtn = document.querySelector("#restart")
restbtn.addEventListener("click", () => {
    location.reload()
})

//takeaways: I need to put figure out how to make these into functions
//because a lot of it is the same code


    

