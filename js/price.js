const price = document.querySelector(".price");
const productName = document.querySelector(".productName");

const thumbOne = document.querySelector(".left-image");
const thumbTwo = document.querySelector(".left-image2");
const thumbThree = document.querySelector(".left-image3");
const centerImage = document.querySelector("#center-image");

console.log(id);
console.log(c);

/*changing images on product page*/

if (id === "redgirl") {
  centerImage.style.backgroundImage = "url(../../images/redgirl1center.jpg)";
  thumbOne.style.backgroundImage = "url(../../images/redgirl1thumb.jpg)";
  thumbTwo.style.backgroundImage = "url(../../images/redgirl2thumb.jpg)";
  thumbThree.style.backgroundImage = "url(../../images/redgirl3thumb.jpg)";
  thumbOne.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/redgirl1center.jpg)";
  });
  thumbTwo.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/redgirl2center.jpg)";
  });
  thumbThree.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/redgirl3center.jpg)";
  });
} else if (id === "greenboy") {
  centerImage.style.backgroundImage = "url(../../images/greenboy1center.jpg)";
  thumbOne.style.backgroundImage = "url(../../images/greenboy1thumb.jpg)";
  thumbTwo.style.backgroundImage = "url(../../images/greenboy2thumb.jpg)";
  thumbThree.style.backgroundImage = "url(../../images/greenboy3thumb.jpg)";
  thumbOne.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/greenboy1center.jpg)";
  });
  thumbTwo.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/greenboy2center.jpg)";
  });
  thumbThree.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/greenboy3center.jpg)";
  });
} else if (id === "yellowgirl") {
  centerImage.style.backgroundImage = "url(../../images/yellowgirl1center.jpg)";
  thumbOne.style.backgroundImage = "url(../../images/yellowgirl1thumb.jpg)";
  thumbTwo.style.backgroundImage = "url(../../images/yellowgirl2thumb.jpg)";
  thumbThree.style.backgroundImage = "url(../../images/yellowgirl3thumb.jpg)";
  thumbOne.addEventListener("click", function () {
    centerImage.style.backgroundImage =
      "url(../../images/yellowgirl1center.jpg)";
  });
  thumbTwo.addEventListener("click", function () {
    centerImage.style.backgroundImage =
      "url(../../images/yellowgirl2center.jpg)";
  });
  thumbThree.addEventListener("click", function () {
    centerImage.style.backgroundImage =
      "url(../../images/yellowgirl3center.jpg)";
  });
} else if (id === "orangeboy") {
  centerImage.style.backgroundImage = "url(../../images/orangeboy1center.jpg)";
  thumbOne.style.backgroundImage = "url(../../images/orangeboy1thumb.jpg)";
  thumbTwo.style.backgroundImage = "url(../../images/orangeboy2thumb.jpg)";
  thumbThree.style.backgroundImage = "url(../../images/orangeboy3thumb.jpg)";
  thumbOne.addEventListener("click", function () {
    centerImage.style.backgroundImage =
      "url(../../images/orangeboy1center.jpg)";
  });
  thumbTwo.addEventListener("click", function () {
    centerImage.style.backgroundImage =
      "url(../../images/orangeboy2center.jpg)";
  });
  thumbThree.addEventListener("click", function () {
    centerImage.style.backgroundImage =
      "url(../../images/orangeboy3center.jpg)";
  });
} else if (id === "purplegirl") {
  centerImage.style.backgroundImage = "url(../../images/little-girl.jpg)";
  thumbOne.style.backgroundImage = "url(../../images/little-girl.jpg)";
  thumbTwo.style.backgroundImage = "url(../../images/rainythumb.jpg)";
  thumbThree.style.backgroundImage = "url(../../images/little-girl2thumb.jpg)";
  thumbOne.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/little-girl.jpg)";
  });
  thumbTwo.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/rainycenter.jpg)";
  });
  thumbThree.addEventListener("click", function () {
    centerImage.style.backgroundImage =
      "url(../../images/little-girl2center.jpg)";
  });
} else if (id === "yellowboy") {
  centerImage.style.backgroundImage = "url(../../images/little-boy.jpg)";
  thumbOne.style.backgroundImage = "url(../../images/little-boy.jpg)";
  thumbTwo.style.backgroundImage = "url(../../images/rainythumb.jpg)";
  thumbThree.style.backgroundImage = "url(../../images/little-boy2thumb.jpg)";
  thumbOne.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/little-boy.jpg)";
  });
  thumbTwo.addEventListener("click", function () {
    centerImage.style.backgroundImage = "url(../../images/rainycenter.jpg)";
  });
  thumbThree.addEventListener("click", function () {
    centerImage.style.backgroundImage =
      "url(../../images/little-boy2center.jpg)";
  });
}

/*changing price and name of product*/

if (c === "999") {
  price.textContent = `kr 999.00`;
} else {
  price.textContent = `kr 1199.00`;
}

if (type === "wj") {
  productName.textContent = `RainyDays Winter Jacket`;
} else {
  productName.textContent = `RainyDays Rain Coat`;
}
