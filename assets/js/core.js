let card = document.querySelector(".card");
let cardid = Math.floor(Math.random() * 78) + 1;
let sound = new Audio(
  "https://astro.meemodel.com/sound/tarotdaily/" + cardid + ".mp3"
);
let flip = false;

card.querySelector(".back img").src =
  "https://www.myhora.net/astrology/tarot/card/" + (cardid - 1) + ".png";

card.addEventListener("click", () => {
  if (!flip) {
    flip = true;
    card.classList.add("flip");
    setTimeout(() => sound.play(), 1000);
  }
});
