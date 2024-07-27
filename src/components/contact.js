function renderContact() {
  const mainContent = document.getElementById("content");
  mainContent.textContent = "";
  mainContent.appendChild(createContact());
}

function createContact() {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");

  const sectionOne = createSectionOne();
  const sectionTwo = createSectionTwo();

  contactPage.append(sectionOne, sectionTwo);

  return contactPage;
}

function createSectionOne() {
  const section = document.createElement("div");
  section.classList.add("section");

  const imgBox = document.createElement("div");
  imgBox.classList.add("img-box");

  const textBox = document.createElement("div");
  textBox.classList.add("text-box");

  textBox.innerHTML = `<p class="pTitle">contact us!</p>
                        <div class="contact-info">
                            <p class="address"><span><svg xmlns="http://www.w3.org/2000/svg" fill ="#52071b" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg></span> 140 West 4th Street NY, NY 10012</p>
                            <p class="phone"><span><svg xmlns="http://www.w3.org/2000/svg" fill ="#52071b" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></span> 212-260-7049</p>
                            <p class="email"><span><svg xmlns="http://www.w3.org/2000/svg" fill ="#52071b" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></span>redbamboonyc@gmail.com</p>
                        </div>
                        
                        <div class="location-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3982922728082!2d-74.00495792464828!3d40.73126067322389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599166ac45c1%3A0xd2bb7efe730dd284!2sRed%20Bamboo!5e0!3m2!1sen!2sin!4v1722015161592!5m2!1sen!2sin" width="350" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>`;

  section.append(imgBox, textBox);

  return section;
}

function createSectionTwo() {
  const section = document.createElement("div");
  section.classList.add("section");

  const textBox = document.createElement("div");
  textBox.classList.add("text-box");

  textBox.innerHTML = `<p class="pTitle">opening hours!</p>
                        <div class="hours-info">
                            <div class="day">
                              <p>MONDAY</p>
                              <p>12pm - 9pm</p>
                            </div>
                            <div class="day">
                              <p>TUESDAY</p>
                              <p>12pm - 9pm</p>
                            </div>
                            <div class="day">
                              <p>WEDNESDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                            <div class="day">
                              <p>THURSDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                            <div class="day">
                              <p>FRIDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                            <div class="day">
                              <p>SATURDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                            <div class="day">
                              <p>SUNDAY</p>
                              <p>12pm - 10pm</p>
                            </div>
                        </div>
                        <p class="pTitle">Follow us on social!</p>
                            <div class="contact-social">
                              <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></p>
                              <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></p>
                              <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></p>
                            </div>`;

  const imgBox = document.createElement("div");
  imgBox.classList.add("img-box");
  section.append(textBox, imgBox);

  return section;
}

export default renderContact;