import "./styles.css";
import { renderLandingPage } from "./pages/landing.js";
import { renderContactPage } from "./pages/contact.js";
import { renderMenuPage } from "./pages/menu.js";

console.log("Loading Page Template");

function clearContent() {
    document.getElementById("content").innerHTML = "";
}

renderLandingPage();


document.getElementById("nav-about").addEventListener("click", () => {
    clearContent();
    renderLandingPage();
});

document.getElementById("nav-menu").addEventListener("click", () => {
    clearContent();
    renderMenuPage();
});

document.getElementById("nav-contact").addEventListener("click", () => {
    clearContent();
    renderContactPage();
});