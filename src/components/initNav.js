import Logo from "../images/red-bamboo-logo.jpeg";
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";
import renderContact from "./contact.js";

function createNav() {
  const nav = document.createElement("nav");
  nav.appendChild(createLogo());
  nav.appendChild(createButtonTab());
  return nav;
}

function createLogo() {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.onclick = () => {
    setCurrentTabActive(null);
    renderHome();
  };

  const logoImg = document.createElement("img");
  logoImg.src = Logo;
  logoImg.classList.add("logo-img");
  logoImg.alt = "logo";

  logo.appendChild(logoImg);

  return logo;
}

function createButtonTab() {
  const buttonTab = document.createElement("div");
  buttonTab.classList.add("btn-tab");

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-btn");
  menuButton.textContent = "Menu";
  menuButton.setAttribute("data-name", "menu");

  const aboutButton = document.createElement("button");
  aboutButton.classList.add("nav-btn");
  aboutButton.textContent = "About";
  aboutButton.setAttribute("data-name", "about");

  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-btn");
  contactButton.textContent = "Contact";
  contactButton.setAttribute("data-name", "contact");

  buttonTab.append(menuButton, aboutButton, contactButton);
  buttonTab.addEventListener("click", btnClickHandler);
  return buttonTab;
}

function btnClickHandler(e) {
  const btns = document.querySelectorAll(".nav-btn");
  btns.forEach((btn) => {
    if (e.target.dataset.name === "menu" && btn.textContent === "Menu") {
      if (e.target.classList.contains("active")) return;
      setCurrentTabActive(btn);
      renderMenu();
    }
    if (e.target.dataset.name === "about" && btn.textContent === "About") {
      if (e.target.classList.contains("active")) return;
      setCurrentTabActive(btn);
      renderAbout();
    }
    if (e.target.dataset.name === "contact" && btn.textContent === "Contact") {
      if (e.target.classList.contains("active")) return;
      setCurrentTabActive(btn);
      renderContact();
    }
  });
}

function setCurrentTabActive(clickedBtn) {
  const btns = document.querySelectorAll(".nav-btn");
  btns.forEach((btn) => {
    if (btn !== clickedBtn) {
      btn.classList.remove("active");
    }
  });
  if (clickedBtn !== null) {
    clickedBtn.classList.add("active");
  }
}

export default createNav;
