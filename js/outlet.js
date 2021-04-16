const url = "https://bockey.one/rainydays-restapi/wp-json/wc/store/products";
const productsContainer = document.querySelectorAll(".new-products");
const mainContainer = document.querySelector("main");

async function getApi() {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    responseJson.sort((a, b) => (a.id > b.id ? 1 : -1));
    sortProductsPrice(responseJson);
    createHTMl(responseJson);
  } catch (error) {
    console.log(`Error is ${error}`);
    mainContainer.innerHTML = `<div class="errorApi">
                                  <h1> We are sorry</h1>
                                  <h2> An error occurred</h2>
                                  <p>Try again later</p> 
                                </div>  `;
  }
}
getApi();
function createHTMl(products) {
  productsContainer.forEach((element) => {
    element.innerHTML = "";
  });

  products.forEach((product) => {
    productsContainer.forEach((element) => {
      element.innerHTML += `<div>
                              <h2>${product.description}</h2>
                              <a href="specific-product.html?c=${product.prices.price}&i=${product.id}"><img src="${product.images[0].src}" alt="{${product.images[0].alt}"></a>
                              <h3>${product.name}</h3>
                              <h3>kr ${product.prices.price}.00</h3>
                            </div>  `;
    });
  });
}
