const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header-container");
const icon = document.querySelector(".icon1");
console.log(navbar);
// icon.onclick = function () {
//   navbar.classList.toggle("active");
// };

icon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  header.classList.toggle("header-active");
});
