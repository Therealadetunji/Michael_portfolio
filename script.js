const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".NavMenu");
const Close = document.querySelector(".Close");
const Navitem = document.querySelector(".nav-link1");
const Navitem2 = document.querySelector(".nav-link2");
const Navitem3 = document.querySelector(".nav-link3");

hamburger.onclick = () => {
  //call-back function
  navMenu.classList.add("mike");
};
Close.onclick = () => {
  //call-back function
  navMenu.classList.remove("mike");
};

Navitem.onclick = () => {
  navMenu.classList.remove("mike");
};

Navitem2.onclick = () => {
  navMenu.classList.remove("mike");
};

Navitem3.onclick = () => {
  navMenu.classList.remove("mike");
};
