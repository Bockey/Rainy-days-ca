const price = document.querySelector(".price");
const productName = document.querySelector(".productName");
const productDescription = document.querySelector("#right-text > p");

const thumbOne = document.querySelector(".left-image");
const thumbTwo = document.querySelector(".left-image2");
const thumbThree = document.querySelector(".left-image3");
const centerImage = document.querySelector("#center-image");

console.log(id);

const urlProduct =
  "https://bockey.one/rainydays-restapi/wp-json/wc/store/products/" + id;

async function getSingleProduct() {
  try {
    const response = await fetch(urlProduct);
    const responseJson = await response.json();
    console.log(responseJson);
    productInformation(responseJson);
  } catch (error) {
    console.log(`Error is ${error}`);
  }
}
getSingleProduct();

function productInformation(product) {
  centerImage.style.backgroundImage = `url(${product.images[3].src})`;
  thumbOne.style.backgroundImage = `url(${product.images[0].src})`;
  thumbTwo.style.backgroundImage = `url(${product.images[1].src})`;
  thumbThree.style.backgroundImage = `url(${product.images[2].src})`;
  thumbOne.addEventListener("click", function () {
    centerImage.style.backgroundImage = `url(${product.images[3].src})`;
  });
  thumbTwo.addEventListener("click", function () {
    centerImage.style.backgroundImage = `url(${product.images[4].src})`;
  });
  thumbThree.addEventListener("click", function () {
    centerImage.style.backgroundImage = `url(${product.images[5].src})`;
  });
  price.textContent = `kr ${product.prices.price}.00`;
  productName.textContent = `${product.name}`;
  productDescription.innerHTML = `${product.short_description}`;
}

/*featured products*/

const featuredUrl =
  "https://bockey.one/rainydays-restapi/wp-json/wc/v3/products?consumer_key=ck_e17f78ed3f2e99b4743e658e57cf9c22c40c1635&consumer_secret=cs_1fc7571ed0ddb7f501bf251f73f573714eea1ba0";
async function getAllProducts() {
  try {
    const response = await fetch(featuredUrl);
    const responseJson = await response.json();
    console.log(responseJson);
    displayFeatured(responseJson);
  } catch (error) {
    console.log(`Error is ${error}`);
  }
}
getAllProducts();

function displayFeatured(products) {
  const feturedContainer = document.querySelector(".featured");
  products.forEach((product) => {
    if (product.featured === true) {
      feturedContainer.innerHTML += `
                                      <div class="featured-block">
                                        <a href="specific-product.html?c=${product.price}&i=${product.id}">
                                        <img src="${product.images[0].src}" alt="${product.images[0].alt}">
                                        </a>
                                      </div>`;
    }
  });
}
