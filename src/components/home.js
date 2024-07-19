import BackgroundImage from "../images/red-bamboo-bgImage.jpeg";
import CardImg from "../images/red-bamboo-logo.jpeg";

function home() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-div");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card-div");

  const h1 = document.createElement("h1");
  h1.textContent = "red bamboo cafe";

  const cardImgDiv = document.createElement("div");
  cardImgDiv.classList.add("cardImg-div");

  const cardImg = document.createElement("img");
  cardImg.src = CardImg;
  cardImg.alt = "card-image";

  const p = document.createElement("p");
  p.textContent = "Your culinary adventure awaits.";

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "Explore!";

  cardImgDiv.appendChild(cardImg);
  cardDiv.append(h1, cardImgDiv, p, btn);
  homeDiv.appendChild(cardDiv);

  return homeDiv;
}

export default home;
