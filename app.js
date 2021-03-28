const btcApi = "https://blockchain.info/ticker";
const btc = document.getElementById("btc");

const sekBtn = document.getElementById("sek");
const gbpBtn = document.getElementById("gbp");
const eurBtn = document.getElementById("eur");

document.addEventListener("DOMContentLoaded", getBtcValue);
sekBtn.addEventListener("click", getBtcValue);
gbpBtn.addEventListener("click", getBtcGBP);
eurBtn.addEventListener("click", getBtcEUR);

function getBtcValue() {
  fetch(btcApi)
    .then((result) => result.json())
    .then((data) => {
      btc.innerHTML = "1BTC = " + data.SEK.last + data.SEK.symbol;
    });
}

function getBtcGBP() {
  fetch(btcApi)
    .then((result) => result.json())
    .then((data) => {
      btc.innerHTML = "1BTC = " + data.GBP.symbol + data.GBP.last;
    });
}

function getBtcEUR() {
  fetch(btcApi)
    .then((result) => result.json())
    .then((data) => {
      btc.innerHTML = "1BTC = " + data.EUR.last + data.EUR.symbol;
    });
}
