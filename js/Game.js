/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.phrase();
    this.activePhrase = null;
  }

  phrase() {
    const phrases = [
      "You sure about that",
      "The chin kills",
      "It was also the night that the skeletons came to life",
      "If you dont give the whole thing goes dark",
      "How is tables a job",
    ];
  }
}
