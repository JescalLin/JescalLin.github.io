var featureCoin = document.getElementById('featureCoin');
var tii = 0;
var myVar;

/* On click of button spin coin ainamtion */
function coinToss() {
  /* Random number 0 or 1  */
  var x = Math.floor(Math.random() * 2);
  /* If x = 0 change coin html to image of heads along with animation for flipping effect */
  if (x === 0) {
    featureCoin.className = "heads animate-coin";

    featureCoin.src="images/money_icon_01.png"
  } else {
    featureCoin.className = "tails animate-coin";
    featureCoin.src="images/money_icon_02.png"
  }
  tii = tii + 25;
  if (tii > 3000) {
    clearTimeout(myVar);
    featureCoin.className = ""
  }

}
/* Add the coin toss function to the button using on click */
featureCoin.onclick = function() {
  coinToss();
  tii = 0
  myVar = setInterval(coinToss, 10);
}
