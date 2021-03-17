/*thumbnail imgs*/

const thumbOne = document.querySelector(".left-image");
const thumbTwo = document.querySelector(".left-image2");
const thumbThree = document.querySelector(".left-image3");
const centerImage = document.querySelector("#center-image");

thumbOne.addEventListener("click", function () {
  centerImage.style.backgroundImage = "url(../../images/center.jpg)";
});
thumbTwo.addEventListener("click", function () {
  centerImage.style.backgroundImage = "url(../../images/left2.jpg)";
});
thumbThree.addEventListener("click", function () {
  centerImage.style.backgroundImage = "url(../../images/left3.jpg)";
});
