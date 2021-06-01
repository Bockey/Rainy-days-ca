const menuIcon = document.querySelector("nav label");
const navigation = document.querySelector("#nav-list");

menuIcon.addEventListener("click", function () {
  navigation.classList.toggle("visibility");
});
