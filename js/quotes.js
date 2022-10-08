const quotes = [
  {
    quote:
      "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
  },
  {
    quote: "When you have faults, do not fear to abandon them. ",
    author: "Confucius",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The die is cast.",
    author: "Julius caesar",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "Nothing in more despicable than respect based on fear.",
    author: "Albert camus",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
