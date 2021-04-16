/*sorting of products by name and price*/
const list = document.querySelector("#sort");

function sortProductsPrice(products) {
  list.addEventListener("change", function (e) {
    if (e.target.value === "0") {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
      createHTMl(products);
    } else if (e.target.value === "1") {
      products.sort((a, b) => (a.name > b.name ? 1 : -1));
      createHTMl(products);
    } else if (e.target.value === "2") {
      products.sort((a, b) => (a.name < b.name ? 1 : -1));
      createHTMl(products);
    } else if (e.target.value === "3") {
      products.sort((a, b) => (a.prices.price < b.prices.price ? 1 : -1));
      createHTMl(products);
    } else if (e.target.value === "4") {
      products.sort((a, b) => (a.prices.price > b.prices.price ? 1 : -1));
      createHTMl(products);
    }
  });
}
