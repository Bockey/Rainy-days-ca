const cartButton = document.querySelector("#cart-button");
const cartButtonContainer = document.querySelector(".cart-button-container");

/*change button, cart icon and add link under button when clicking on btn*/

cartButton.addEventListener("click", function () {
  cartButton.textContent = "CONFIRMED";
  cartButton.style.backgroundColor = "gray";
  cartButton.style.cursor = "default";
  cartIconLink.innerHTML = `<img src="images/Cart Icon.png" alt="cart">`;

  cartButtonContainer.innerHTML += `<a href="payment.html" style="color:#005438; font-weight:bold; margin-top:20px;">
                                        GO TO DELIVERY AND PAYMENT</a>`;
});

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const number = params.get("n");
const cartIconLink = document.querySelector(".cartIconLink");

/*change parameters in cart icon link on click on it which help change image*/

cartIconLink.addEventListener("click", function () {
  cartIconLink.href = `cart.html?n=1&i=${id}&t=${type}`;
});
console.log(number);

if (number === "1") {
  cartIconLink.innerHTML = `<img src="images/Cart Icon.png" alt="cart">`;
} else {
  cartIconLink.innerHTML = `<img src="images/Icon awesome-shopping-cart.png" alt="cart">`;
}

const image = document.querySelector(".image");
const price = document.querySelector(".price");
const quantity = document.querySelector(".quantity");
const id = params.get("i");
const type = params.get("t");

/*change image preview on cart page*/

if (id === "redgirl") {
  image.innerHTML = `<img src="images/redgirl1thumb.jpg">`;
} else if (id === "greenboy") {
  image.innerHTML = `<img src="images/greenboy1thumb.jpg">`;
} else if (id === "yellowgirl") {
  image.innerHTML = `<img src="images/yellowgirl1thumb.jpg">`;
} else if (id === "orangeboy") {
  image.innerHTML = `<img src="images/orangeboy1thumb.jpg">`;
} else if (id === "yellowboy") {
  image.innerHTML = `<img src="images/little-boy.jpg">`;
} else if (id === "purplegirl") {
  image.innerHTML = `<img src="images/little-girl.jpg">`;
} else if (id === "empty") {
  image.innerHTML = ``;
} else {
  image.innerHTML = `<img src="images/redgirl1thumb.jpg">`;
}

/*change price on cart page*/

if (type === "wj") {
  price.textContent = `RainyDays Winter Jacket kr 1199.00`;
} else if (type === "clear") {
  price.textContent = `Your cart is empty`;
  quantity.textContent = ``;
  cartButton.textContent = "Go back";
  cartButton.href = "javascript:history.go(-1)";
} else {
  price.textContent = `RainyDays Rain Coat kr 999.00`;
}
