import menuPics from "../images/menuItemPics/menuPicsIndex.js";

function renderMenu() {
  const mainContent = document.getElementById("content");
  mainContent.textContent = "";
  console.log(menuPics);
  mainContent.appendChild(createMenu());
}

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Creole Soul Chicken",
      "Our signature soy chicken nuggets panko-breaded with Cajun and rosemary seasoning and fried. Served with our hickory-smoked vidalia dressing.",
      "$12.00",
      menuPics.pic1
    )
  );

  menu.appendChild(
    createMenuItem(
      "Broccoli and Sweet Potato Tempura",
      "Deep-fried in a traditional Japanese tempura batter. Served with soy-lime ginger dressing.",
      "$12.00",
      menuPics.pic2
    )
  );

  menu.appendChild(
    createMenuItem(
      "Caribbean Jerk-Spiced Seitan",
      "Grilled seitan skewers marinated in a spiced lime citrus dressing.",
      "$10.00",
      menuPics.pic3
    )
  );

  menu.appendChild(
    createMenuItem(
      "Collard Green Rolls",
      "Three fried rolls stuffed with sautéed collard greens and soy ham. Served with sweet chili dipping sauce.",
      "$11.00",
      menuPics.pic4
    )
  );

  menu.appendChild(
    createMenuItem(
      "Almond Coconut Chicken",
      "Crispy soy chicken strips breaded with toasted almonds and shaved coconut. Served with sweet chili dipping sauce.",
      "$14.00",
      menuPics.pic5
    )
  );

  menu.appendChild(
    createMenuItem(
      "Chicken Satay",
      "Skewered soy chicken charbroiled and marinated in coconut curry seasoning. Served with peanut chili dressing.",
      "$12.00",
      menuPics.pic6
    )
  );

  menu.appendChild(
    createMenuItem(
      "Bamboo Nuggets",
      "Garlic soy chicken nuggets fried and served with vidalia onion sauce.",
      "$12.00",
      menuPics.pic7
    )
  );

  menu.appendChild(
    createMenuItem(
      "Popcorn Chicken",
      "Fried soy chicken nuggets served with our homemade BBQ sauce.",
      "$11.00",
      menuPics.pic8
    )
  );

  menu.appendChild(
    createMenuItem(
      "Spring Rolls",
      "Two fried vegan rolls filled with cabbage, carrots and mushroom. Served with vegan duck sauce.",
      "$7.00",
      menuPics.pic9
    )
  );

  menu.appendChild(
    createMenuItem(
      "Dragonfly Dumplings",
      "Three fried rice dumplings filled with shredded soy protein, carrots and cabbage. Served over mixed greens and soy-lime ginger dressing.",
      "$12.00",
      menuPics.pic10
    )
  );

  menu.appendChild(
    createMenuItem(
      "Roti Canai",
      "Indian crepe served with a soy chicken and potato coconut curry dipping sauce.",
      "$9.00",
      menuPics.pic11
    )
  );

  menu.appendChild(
    createMenuItem(
      "Popcorn Shrimp",
      "Fried bite-sized soy shrimp. Served with Sriracha mayo.",
      "$11.00",
      menuPics.pic12
    )
  );

  return menu;
}

function createMenuItem(name, description, price, img) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-div");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-div");

  const nameEl = document.createElement("p");
  nameEl.classList.add("name");
  nameEl.textContent = name;

  const descEl = document.createElement("p");
  descEl.classList.add("desc");
  descEl.textContent = description;

  const priceEl = document.createElement("p");
  priceEl.classList.add("price");
  priceEl.textContent = price;

  const imgEl = document.createElement("img");
  imgEl.src = img;
  imgEl.alt = `${name} pic`;

  infoDiv.append(nameEl, descEl, priceEl);
  imgDiv.appendChild(imgEl);

  menuItem.append(infoDiv, imgDiv);

  return menuItem;
}

export default renderMenu;
