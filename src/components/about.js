function renderAbout() {
  const mainContent = document.getElementById("content");
  mainContent.textContent = "";
  mainContent.appendChild(createAbout());
}

function createAbout() {
  const aboutPage = document.createElement("div");
  aboutPage.classList.add("about-page");

  const sectionOne = createSection(
    "VEGAN",
    "Since opening in 2002 we at Red Bamboo have strived to redefine what it means to be vegan by creating innovative mock meat and seafood dishes. "
  );

  const sectionTwo = createSection(
    "GLOBAL CUISINE",
    "Every year we add new vegan dishes from around the word. Newest dishes include: Portobello Fritters, Salmon Teriyaki, Pasta Carbonara, Rigatoni Bolognese, Caesar, Greek and Cobb Salad"
  );

  aboutPage.append(sectionOne, sectionTwo);

  return aboutPage;
}

function createSection(header, text) {
  const section = document.createElement("div");
  section.classList.add("section");

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-div");

  const pHead = document.createElement("p");
  pHead.classList.add("p-head");
  pHead.textContent = header;

  const pText = document.createElement("p");
  pText.classList.add("p-text");
  pText.textContent = text;

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-div");

  textDiv.append(pHead, pText);
  section.append(textDiv, imgDiv);

  return section;
}

export default renderAbout;
