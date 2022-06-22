const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".NavMenu");
const Close = document.querySelector(".Close");

hamburger.onclick = () => {
  //call-back function
  navMenu.classList.add("mike");
};
