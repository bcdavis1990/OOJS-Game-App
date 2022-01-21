/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowercase();
  }
  addPhraseToDisplay() {
    //targets the ul that the li items will append to
    const phraseList = document.getElementById("phrase").firstElementChild;
    //targets the phrase that was chosen
    const chosenPhrase = this.phrase;
    //splits the chosen phrase into an array to be targeted for the li items
    const phraseArray = chosenPhrase.split("");

    //loops over the created phrase array and sets a class on each individual li created appending each to the designated ul
    phraseArray.forEach((letter) => {
      const li = document.createElement("li");
      // determines if the letter is equal to a space in the phrase and then assigns classNames based on the reults. Determined the classNames from the example html provided
      if (letter === " ") {
        li.className = "space";
        li.textContent = `${letter}`;
      } else {
        li.className = `hide letter ${letter}`;
        li.textContent = `${letter}`;
      }
      phraseList.appendChild(li);
    });
  }

  //Checks to make sure the letter in the phrase returns a Boolean value
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  showMatchedLetter(letter) {
    const phraseIncludes = this.phrase.includes(letter);
    //loops over the li items and changes the className of all li items that match the selected letter to show them
    if (phraseIncludes) {
      const phrase =
        document.getElementById("phrase").firstElementChild.children;
      for (let i = 0; i < phrase.length; i++) {
        if (phrase[i].textContent === letter) {
          phrase[i].className = `show letter ${letter}`;
        }
      }
    }
  }
}

console.log();
