let quotess = [
  ["Stay Hungry. Stay Foolish.", "Steve Jobs", "yellow"],
  ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso", "OrangeRed"],
  ["Argue with idiots, and you become an idiot.", "Paul Graham", "GreenYellow"],
  ["Be yourself; everyone else is already taken.", "Oscar Wilde", "Cyan"],
  [
    "Simplicity is the ultimate sophistication.",
    "Leonardo Da Vinci",
    "BlanchedAlmond",
  ],
];

let random = Math.floor(Math.random() * quotess.length);
console.log(random);

const newQuote = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteContainer = document.getElementById("quote-container");

console.log(quotess[random][0]);

newQuote.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotess.length);
  console.log(random);
  quote.innerText = quotess[random][0];
  author.innerText = quotess[random][1];
  // quoteContainer.style.background = quotess[random][2];
});
