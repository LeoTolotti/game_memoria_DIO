const emojis = [
  "🙉",
  "🙉",
  "🦒",
  "🦒",
  "🐯",
  "🐯",
  "🐮",
  "🐮",
  "🐰",
  "🐰",
  "🐼",
  "🐼",
  "🦓",
  "🦓",
  "🐲",
  "🐲",
];
let openCards = [];
let randomEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let index = 0; index < emojis.length; index++) {
  const element = document.createElement("div");
  element.className = "item";
  element.innerHTML = randomEmojis[index];
  element.onclick = clickCard;
  document.querySelector(".game").appendChild(element);
}
function clickCard() {
  if (openCards.length < 2) {
    this.classList.add("itemOpen");
    openCards.push(this);
  }
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}
function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("itemMatch");
    openCards[1].classList.add("itemMatch");
  } else {
    openCards[0].classList.remove("itemOpen");
    openCards[1].classList.remove("itemOpen");
  }
  openCards = [];
  if (document.querySelectorAll(".itemMatch").length == emojis.length) {
    alert("Você venceu!");
    window.location.reload();
  }
}
