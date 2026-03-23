import "./style.css";
import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadContact from "./pages/contact";
import loadAbout from "./pages/about";


function clearContent() {
  const content = document.getElementById("content");
  content.textContent = "";
}

const pages = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
  about: loadAbout
};

const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const page = e.target.id;

  document.querySelectorAll("button").forEach(btn => {
    btn.classList.remove("active");
  });

  e.target.classList.add("active");

  if (pages[page]) {
    clearContent();
    pages[page]();
  }
});
// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Load default page
loadHome();