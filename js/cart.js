const cartButton = document.querySelector("#cart-button");
const cartButtonContainer = document.querySelector(".cart-button-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const number = params.get("n");
const cartIconLink = document.querySelector(".cartIconLink");
const image = document.querySelector(".image");
const quantity = document.querySelector(".quantity");
const id = params.get("i");
const type = params.get("t");
const price = document.querySelector(".price");
/*change button, cart icon and add link under button when clicking on btn*/

cartButton.addEventListener("click", function () {
  cartButton.textContent = "CONFIRMED";
  cartButton.style.backgroundColor = "gray";
  cartButton.style.cursor = "default";
  cartIconLink.innerHTML = `<img src="images/Cart Icon.png" alt="cart">`;

  cartButtonContainer.innerHTML += `<a href="payment.html" style="color:#005438; font-weight:bold; margin-top:20px;">
                                        GO TO DELIVERY AND PAYMENT</a>`;
});

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

/*cart image, name and price*/

const urlProduct =
  "https://bockey.one/rainydays-restapi/wp-json/wc/store/products/" + id;
async function getSingleProductCart() {
  try {
    const response = await fetch(urlProduct);
    const responseJson = await response.json();
    console.log(responseJson);
    cartItem(responseJson);
  } catch (error) {
    console.log(`Error is ${error}`);
  }
}
getSingleProductCart();

function cartItem(product) {
  image.innerHTML = `<img src="${product.images[0].src}">`;
  price.textContent = `${product.name} - kr ${product.prices.price}.00`;
}

/*Empty cart*/
if (type === "clear") {
  price.textContent = `Your cart is empty`;
  quantity.textContent = ``;
  cartButton.textContent = "Go back";
  cartButton.href = "javascript:history.go(-1)";
} else {
}
