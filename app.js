var userScore=0;
var computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices=['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
//console.log(getComputerChoice());()

function convertToWord(letter) {
    if (letter == 'r') return "Rock";
    else if(letter=='p') return "Paper";
    else return "Scissor";
}



function win(userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML= convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(computerChoice) + smallCompWord +". You win:)";
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 300);
    
}
function loose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "(user)".fontsize(4).sub();
    const smallCompWord = "(comp)".fontsize(4).sub();
    result_div.innerHTML= convertToWord(userChoice) + smallUserWord +" gets beated by " + convertToWord(computerChoice) + smallCompWord +". You lost:(";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 300);
    
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "(user)".fontsize(4).sub();
    const smallCompWord = "(comp)".fontsize(4).sub();
    result_div.innerHTML= convertToWord(userChoice) + smallUserWord +" is equal to " + convertToWord(computerChoice) + smallCompWord +". It's draw :|";
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow')}, 300);
    
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice); break;
        case "rp" :
        case "ps":
        case "sr":
            loose(userChoice, computerChoice); break;
        case "rr":
        case "pp":
        case "ss":
           draw(userChoice, computerChoice); break;

    }
}

function main() {


rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}
main();