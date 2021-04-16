const url = "https://bockey.one/rainydays-restapi/wp-json/wc/store/products";
const productsContainer = document.querySelectorAll(".new-products");
const mainContainer = document.querySelector("main");

async function getApi() {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    createHTMl(responseJson);
  } catch (error) {
    console.log(`Error is ${error}`);
    mainContainer.innerHTML += `<div class="errorApi">
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
  for (let i = 0; i < 4; i++) {
    productsContainer.forEach((element) => {
      element.innerHTML += `<div>
                                <h2>${products[i].description}</h2>
                                <a href="specific-product.html?c=${products[i].prices.price}&i=${products[i].id}"><img src="${products[i].images[0].src}" alt="{${products[i].images[0].alt}"></a>
                                <h3>${products[i].name}</h3>
                                <h3>kr ${products[i].prices.price}.00</h3>
                              </div>  `;
    });
  }
}
