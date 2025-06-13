import "./styles.css"
import loadHome from "./home.js"
import loadDishes from "./dishes.js";
import loadContact from "./contact.js";


loadHome();

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    loadDishes();
});

contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
});


function clearContent() {
    const content = document.querySelector("#content");
    content.textContent = "";
  }