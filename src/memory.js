class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;

    for (let i = this.cards.length - 1; i > 0; i--) {

      const randNum = Math.floor(Math.random() * ( i + 1 ));

      [this.cards[randNum], this.cards[i]] = [this.cards[i], this.cards[randNum]];
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    let guessed = card1 === card2;

    if (guessed) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
