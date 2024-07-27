import renderHeader from "./initHeader.js";
import initMain from "./initMain.js";
import renderFooter from "./initFooter.js";
import renderHome from "./home.js";

function initWebsite() {
  document.body.appendChild(renderHeader());
  document.body.appendChild(initMain());
  document.body.appendChild(renderFooter());
  renderHome();
}

export default initWebsite;
