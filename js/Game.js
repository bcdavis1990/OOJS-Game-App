/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("whose the carved beef"),
      new Phrase("you sure about that"),
      new Phrase("sloppy steaks"),
      new Phrase("the skeletons will pull your hair"),
      new Phrase("you gotta give"),
    ];
    this.activePhrase = null;
  }

  // returns a random phrase from the this.phrases array
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomIndex];
    return randomPhrase;
  }

  //hides the overlay upon game start and changes a phrase to active
  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  // checks to see if the 'hide' class is on any remaining li elements when live have run out
  checkForWin() {
    const letter = document.querySelectorAll(".hide");
    if (letter.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // increases value of this.missed
  removeLife() {
    this.missed++;
    if (this.missed === 5) {
      this.gameOver(false);
    }
    const heartNodeList = document.querySelectorAll("#scoreboard ol li");
    for (let i = 0; i < this.missed; i++) {
      heartNodeList[i].firstElementChild.setAttribute(
        "src",
        "./images/lostHeart.png"
      );
    }
  }

  //brings back the overlay when the game ends and displays messages and colors depending on the outcome
  gameOver(gameWon) {
    document.getElementById("overlay").style.display = "block";

    if (gameWon === false) {
      document.getElementById(
        "game-over-message"
      ).textContent = `Better luck next time! The phrase was ${this.activePhrase.phrase.toUpperCase()}`;
      document.getElementById("overlay").classList.remove("win");
      document.getElementById("overlay").classList.add("lose");
      document.getElementById("overlay").classList.remove("start");
    } else {
      document.getElementById(
        "game-over-message"
      ).textContent = `Congratulations! You guessed ${this.activePhrase.phrase.toUpperCase()}!`;
      document.getElementById("overlay").classList.remove("lose");
      document.getElementById("overlay").classList.add("win");
      document.getElementById("overlay").classList.remove("start");
    }
  }

  //adds the wrong and chosen classes to the elements depending on if they are correct or not
  handleInteraction(e) {
    if (this.activePhrase.checkLetter(e.textContent) === false) {
      e.classList.add("wrong");
      this.removeLife();
    } else if (this.activePhrase.checkLetter(e.textContent)) {
      e.classList.add("chosen");
      this.activePhrase.showMatchedLetter(e.textContent);
      this.checkForWin();
      if (this.checkForWin() === true) {
        this.gameOver(true);
      }
      if (this.missed > 4) {
        this.gameOver(false);
      }
    }
    e.disabled = true;
  }

  //handles resetting of the game when the game ends and user clicks start game again
  reset(e) {
    const selectPhraseDiv = document.getElementById("phrase");
    const ulOfDiv = selectPhraseDiv.firstElementChild;
    ulOfDiv.innerHTML = "";

    this.missed = 0;

    const button = document.getElementsByClassName("key");

    for (let i = 0; i < button.length; i++) {
      button[i].disabled = false;
      button[i].classList.remove("chosen");
      button[i].classList.remove("wrong");
    }

    const images = document.getElementsByClassName("tries");

    for (let i = 0; i < images.length; i++) {
      let symbols = images[i].firstElementChild;
      symbols.src = "images/liveHeart.png";
    }
  }
}
