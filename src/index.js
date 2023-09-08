const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      let cards = memoryGame.pickedCards;

      if (cards.length < 2) {
          cards.push(card);
          card.classList.toggle('turned');
      }

      if (cards.length === 2) {
          const card1 = cards[0];
          const card2 = cards[1];
          const card1Name = card1.getAttribute("data-card-name");
          const card2Name = card2.getAttribute("data-card-name");

          const guessed = memoryGame.checkIfPair(card1Name, card2Name);
          document.querySelector('#pairs-clicked').textContent = memoryGame.pairsClicked;

          if (guessed) {
            card1.classList.add('blocked');
            card2.classList.add('blocked');
            const isFinished = memoryGame.checkIfFinished();

            document.querySelector('#pairs-guessed').textContent = memoryGame.pairsGuessed;
            cards.length = 0;

            if (isFinished) {
              alert("You won!");
            }

            cards.length = 0
            return;

          } else {
            setTimeout(() => {
              card1.classList.remove('turned');
              card2.classList.remove('turned');
              cards.length = 0;
            }, 1000);
          }
      }

      console.log(`Card clicked:`, card);
    });
  })
})
