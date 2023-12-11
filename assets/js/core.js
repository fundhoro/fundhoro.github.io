let card = document.querySelector(".card");
let cardid = Math.floor(Math.random() * 78) + 1;

const king = [35, 49, 63, 77];
const queen = [34, 48, 62, 76];

let sound;

function initize(id) {
  if (king.includes(id - 1))
    sound = new Audio(
      "https://astro.meemodel.com/sound/tarotdaily/" + (id - 1) + ".mp3"
    );
  else if (queen.includes(id - 1))
    sound = new Audio(
      "https://astro.meemodel.com/sound/tarotdaily/" + (id + 1) + ".mp3"
    );
  else
    sound = new Audio(
      "https://astro.meemodel.com/sound/tarotdaily/" + id + ".mp3"
    );

  let flip = false;

  card.querySelector(".back img").src =
    "https://www.myhora.net/astrology/tarot/card/" + (id - 1) + ".png";

  card.addEventListener("click", () => {
    if (!flip) {
      flip = true;
      card.classList.add("flip");
      setTimeout(() => sound.play(), 1000);
    }
  });
}

initize(cardid);
