/*add to cart button*/

const addToCart = document.querySelector("#product-button");
const container = document.querySelector("#container-link");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("i");
const c = params.get("c");
const type = params.get("t");
const number = params.get("n");

addToCart.addEventListener("click", function () {
  addToCart.textContent = "ADDED";
  addToCart.style.backgroundColor = "gray";
  addToCart.style.cursor = "default";
  container.innerHTML += `<a href="cart.html?n=1&i=${id}&t=${type}" id="toCartLink" style="color:#005438;font-weight:bold;margin-bottom:30px">
                              Go To Cart</a>`;
});

/*cart icon*/

const cartIconLink = document.querySelector(".cartIconLink");
cartIconLink.innerHTML = `<img src="images/Icon awesome-shopping-cart.png" alt="cart">`;
addToCart.addEventListener("click", function () {
  cartIconLink.innerHTML = `<img src="images/Cart Icon.png" alt="cart">`;
  cartIconLink.href = `cart.html?n=1&i=${id}&t=${type}`;
});
