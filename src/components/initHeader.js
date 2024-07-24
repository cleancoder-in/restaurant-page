import createNav from "./initNav.js";

function createHeader() {
  const header = document.createElement("header");
  header.appendChild(createNav());

  return header;
}

export default createHeader;
