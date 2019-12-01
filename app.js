const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
      });
    });
  };

  startGame();
  playMatch();
};

game();
