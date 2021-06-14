//model
const game = () => {
  let intro = "intro";
  let playerHand = "player-hand";
  let computerHand = "computer-hand";
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors;";
  let computerOptions = ["rock", "paper", "scissors"];
  let players = "Choose an option";
  let winner = " winner";
  let options = "options button";
  let Player = "Player";
  let Computer = "ComputerScore";
  let p = "0";
  let shakePlayer = "hands";
  button = "Let's Play";
  let score = "score";
  let PlayerScore = "player-score";
  let ComputerScore = "computer-score";
  let { pScore, cScore } = Model();

  //viwe
  showGame();
  function showGame() {
    document.getElementById('app').innerHTML = `
               <section class="game">
          <div class="${score}">
            <div class="${PlayerScore}">
              <h2>${Player}</h2>
              <p>${p}</p>
            </div>
            <div class="${ComputerScore}">
              <h2>${Computer}</h2>
              <p>${p}</p>
            </div>
          </div>

          <div class="${intro}">
            <h1>Rock Paper and Scissors</h1>
            <button>${button}</button>
          </div>

          <div class="match fadeOut">
            <h2 class="${winner}">${players}</h2>
            <div class="${shakePlayer}">
              <img class="${playerHand}" src="./assets/rock.png" alt="" />
              <img class="${computerHand}" src="./assets/rock.png" alt="" />
            </div>
            <div class="${options}">
              <button class="${rock}">rock</button>
              <button class="${paper}">paper</button>
              <button class="${scissors}">scissors</button>
            </div>
          </div>
        </section>`;

  }


  function startGame() {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");

    });
  }
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });




    options.forEach(option => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
function Model() {
  let pScore = 0;
  let cScore = 0;
  let playBtn;
  playBtn = ".intro button";
  let introScreen;
  introScreen = "intro button";
  return { pScore, cScore };
}