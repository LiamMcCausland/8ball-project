const text = document.getElementById("text");
const ball = document.getElementById("ball");

function shake() {
  text.innerHTML = "";
  const responses = ["It is certain", "Reply hazy, try again", "Don’t count on it",
    "It is decidedly so", "Ask again later", "My reply is no",
    "Without a doubt", "Better not tell you now", "My sources say no",
    "Yes definitely", "Cannot predict now", "Outlook not so good",
    "You may rely on it", "Concentrate and ask again", "Very doubtful",
    "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes"]

  var randomNumber = Math.floor(Math.random() * responses.length);
  ball.classList.add('animated');

  setTimeout(function () {
    ball.classList.remove('animated');
    text.innerHTML = responses[randomNumber];
  }, 1000);
}