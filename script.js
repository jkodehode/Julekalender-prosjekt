//Countdown
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

const christmas = "24 Dec 2022";

const countdown = () => {
  const chrismasDate = new Date(christmas);
  const currentDate = new Date();

  const totalSeconds = (chrismasDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(seconds);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

countdown();

setInterval(countdown, 1000);

// Countdown

//** FUNKSJON FOR LUKENE */

const hovedSkjerm = document.querySelector("#skjerm");
const lukene = document.querySelectorAll(".luke");

//* Legge inn en API
const jokeApi = new XMLHttpRequest();

jokeApi.open("GET", "https://v2.jokeapi.dev/joke/Christmas", true);

jokeApi.onload = function () {
  const data = JSON.parse(this.response);
  data.forEach((joke) => {
    hovedSkjerm.innerText = joke.setup;
  });
};

jokeApi.send();

// 1. lage en loop som henter ut lukene for oss, som indekser.
// - brukte først en forEach for å fange de.

// 2. Bruke indeksene til å få lagt inn en eventListner på hver av de.
// - må så finne ut åssen vi kan gjøre de unike.

//* Loopen fungerer. Men vi lar den ligge litt. Skal ende opp med å forenkle kallet slik at vi kan legge inn ett parameter som gjør den unike endringen.
//! Vi lager en ekstra script fil for mer kompleks kode. Holder denne filen funksjonell og helle litt repeterende
// lukene.forEach(function (indeksen) {
//   indeksen.addEventListener("click", () => {
//     hovedSkjerm.innerText = "klikk";
//   });
//   return indeksen;
// });
// Bruke en if som sjekker index? hvis brukt sender ny?

//* Henter ut de unike lukene på lettvin måte. Vi gjør det først enkelt og funksjonelt.
lukene[0].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 1";
  lukene[0].innerText = "";
  lukene[0].style.backgroundImage = "url('./images/Gift01.png')";
});
lukene[1].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 2";
  lukene[1].innerText = "";
  lukene[1].style.backgroundImage = "url('./images/Gift02.png')";
});
lukene[2].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 3";
  lukene[2].innerText = "";
  lukene[2].style.backgroundImage = "url('./images/Gift03.png')";
});
lukene[3].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 4";
  lukene[3].innerText = "";
  lukene[3].style.backgroundImage = "url('./images/Gift04.png')";
});
lukene[4].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 5";
  lukene[4].innerText = "";
  lukene[4].style.backgroundImage = "url('./images/Gift05.png')";
});
lukene[5].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 6";
  lukene[5].innerText = "";
  lukene[5].style.backgroundImage = "url('./images/Gift06.png')";
});
lukene[6].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 7";
  lukene[6].innerText = "";
  lukene[6].style.backgroundImage = "url('./images/Gift07.png')";
});
lukene[7].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 8";
  lukene[7].innerText = "";
  lukene[7].style.backgroundImage = "url('./images/Gift08.png')";
});
lukene[8].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 9";
  lukene[8].innerText = "";
  lukene[8].style.backgroundImage = "url('./images/Gift09.png')";
});
lukene[9].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 10";
  lukene[9].innerText = "";
  lukene[9].style.backgroundImage = "url('./images/Gift10.png')";
});
lukene[10].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 11";
  lukene[10].innerText = "";
  lukene[10].style.backgroundImage = "url('./images/Gift 11.png')";
});
lukene[11].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 12";
  lukene[11].innerText = "";
  lukene[11].style.backgroundImage = "url('./images/Gift12.png')";
});
lukene[12].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 13";
  lukene[12].innerText = "";
  lukene[12].style.backgroundImage = "url('./images/Gift13.png')";
});
lukene[13].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 14";
  lukene[13].innerText = "";
  lukene[13].style.backgroundImage = "url('./images/Gift14.png')";
});
lukene[14].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 15";
  lukene[14].innerText = "";
  lukene[14].style.backgroundImage = "url('./images/Gift15.png')";
});
lukene[15].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 16";
  lukene[15].innerText = "";
  lukene[15].style.backgroundImage = "url('./images/Gift16.png')";
});
lukene[16].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 17";
  lukene[16].innerText = "";
  lukene[16].style.backgroundImage = "url('./images/Gift17.png')";
});
lukene[17].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 18";
  lukene[17].innerText = "";
  lukene[17].style.backgroundImage = "url('./images/Gift18.png')";
});
lukene[18].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 19";
  lukene[18].innerText = "";
  lukene[18].style.backgroundImage = "url('./images/Gift19.png')";
});
lukene[19].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 20";
  lukene[19].innerText = "";
  lukene[19].style.backgroundImage = "url('./images/Gift20.png')";
});
lukene[20].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 21";
  lukene[20].innerText = "";
  lukene[20].style.backgroundImage = "url('./images/Gift21.png')";
});
lukene[21].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 22";
  lukene[21].innerText = "";
  lukene[21].style.backgroundImage = "url('./images/Gift22.png')";
});
lukene[22].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 23";
  lukene[22].innerText = "";
  lukene[22].style.backgroundImage = "url('./images/Gift23.png')";
});
lukene[23].addEventListener("click", () => {
  hovedSkjerm.innerText = "Luke 24";
  lukene[23].innerText = "";
  lukene[23].style.backgroundImage = "url('./images/GiftLast.png')";
});

function kallPaKnapp(IndreTekst) {}
