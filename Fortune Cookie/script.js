const cookie = document.getElementById("cookie");
const fortune = document.getElementById("fortune");

const messages = [
  "You will have a great day!",
  "Good news is coming your way!",
  "Believe in yourself!",
  "Today is your lucky day!",
  "Adventure awaits you.",
  "You are stronger than you think."
];

cookie.addEventListener("click", () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  fortune.textContent = randomMessage;
});
