let card = document.querySelector(".card");
let cardid = Math.floor(Math.random() * (78)) + 1;;
let sound = new Audio("https://astro.meemodel.com/sound/tarotdaily/" + cardid + ".mp3");
let flip = false;

card.querySelector(".back img").src = "https://astro.meemodel.com/img/tarot/front/" + cardid + ".jpg";

card.addEventListener("click", () => {
  if (!flip) {
    flip = true;
    card.classList.add('flip');
    setTimeout(() => (sound.play()), 1000);
  }
});