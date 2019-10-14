var slideIndex = 1;
export class experienceOffers extends HTMLElement {

  constructor() {
    super();
    this.template();
    this.activeSlide(slideIndex);
    this.plusSlides();
  }

  get banner() {
    return this.getAttribute('banner');
  }

  get link() {
    return this.getAttribute('link') || '#';
  }

  template() {
    this.innerHTML = `
      <div class="exp-offers">
        <div class="container">
          <p class="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="39.115" height="38.483" viewBox="0 0 39.115 38.483">
              <g id="Group_728" data-name="Group 728" transform="translate(-377.066 -234.276)">
                <path id="Path_402" data-name="Path 402" d="M400.533,245.6h-6.5a.4.4,0,0,1-.382-.277l-2.008-6.18a.4.4,0,0,0-.765,0l-2.008,6.18a.4.4,0,0,1-.382.277h-6.5a.4.4,0,0,0-.236.727l5.258,3.819a.4.4,0,0,1,.144.45l-2.008,6.18a.4.4,0,0,0,.618.448l5.258-3.819a.4.4,0,0,1,.472,0l5.256,3.819a.4.4,0,0,0,.618-.448l-2.008-6.18a.407.407,0,0,1,.146-.45l5.258-3.819A.4.4,0,0,0,400.533,245.6Z" transform="translate(5.36 5.433)" fill="#89c966"/>
                <path id="Path_403" data-name="Path 403" d="M415.63,257.046l-.738-1.079c-.577-.839-1.151-1.676-1.737-2.519q.937-1.842,1.846-3.7a5.834,5.834,0,0,0,.3-.848l.155-.487-.013-.17a2.758,2.758,0,0,0-1.711-2.351q-1.966-.931-3.934-1.844l-.69-4.162a2.946,2.946,0,0,0-1.23-1.916,2.8,2.8,0,0,0-2.095-.476c-.99.192-1.986.345-2.982.5l-1.544.293q-1.592-1.5-3.2-2.975l-.184-.17a2.853,2.853,0,0,0-4.085,0q-1.665,1.537-3.325,3.1c-1.26-.247-2.519-.494-3.784-.712a2.737,2.737,0,0,0-3.347,2.394l-.192,1.134c-.159.907-.315,1.809-.437,2.72-.033.264-.07.312-.315.419-1.326.575-2.628,1.2-3.923,1.846a2.438,2.438,0,0,0-1.341,2.8,5.016,5.016,0,0,0,.437,1.169q.868,1.763,1.763,3.517c-.64,1.265-1.278,2.532-1.9,3.808a2.85,2.85,0,0,0-.14,2.2,2.887,2.887,0,0,0,1.523,1.654l.942.443q1.445.678,2.9,1.357l.295,1.789c.127.773.258,1.547.38,2.322a2.99,2.99,0,0,0,1.243,1.966,2.749,2.749,0,0,0,2.115.476c.889-.17,1.785-.306,2.68-.441.629-.1,1.258-.19,1.894-.286,1.046.987,2.1,1.962,3.305,3.074a2.84,2.84,0,0,0,4.109,0l1.236-1.145a26.268,26.268,0,0,0,1.96-1.942l.893.129c1.243.179,2.49.358,3.72.6a2.8,2.8,0,0,0,2.167-.463,3.053,3.053,0,0,0,1.258-1.949c.118-.793.253-1.582.385-2.368l.216-1.732c1.348-.616,2.685-1.252,4.026-1.887a2.647,2.647,0,0,0,1.095-4.081Zm-1.8,2.6c-1.333.634-2.665,1.265-4,1.879a1.408,1.408,0,0,0-.848,1.132l-.3,1.818c-.133.8-.269,1.593-.393,2.392a1.379,1.379,0,0,1-.575.856,1.144,1.144,0,0,1-.907.2c-1.26-.249-2.534-.432-3.805-.616l-.9-.131a1.458,1.458,0,0,0-1.147.374c-.725.658-1.442,1.324-2.161,1.99l-1.232,1.14c-.638.585-1.252.592-2.034-.135q-1.579-1.458-3.144-2.925a1.52,1.52,0,0,0-1.09-.463,1.763,1.763,0,0,0-.317.028c-.62.1-1.239.2-1.859.293-.918.138-1.833.277-2.744.45a1.132,1.132,0,0,1-.865-.208,1.371,1.371,0,0,1-.568-.88c-.122-.78-.251-1.558-.38-2.335l-.315-1.9a1.329,1.329,0,0,0-.8-1.055q-1.507-.691-3.006-1.4l-.942-.441a1.266,1.266,0,0,1-.673-.719,1.208,1.208,0,0,1,.066-.939q.957-1.956,1.949-3.9a1.324,1.324,0,0,0,0-1.258c-.609-1.2-1.217-2.4-1.811-3.613a3.542,3.542,0,0,1-.3-.78.813.813,0,0,1,.467-.992c1.269-.629,2.547-1.247,3.847-1.811a2.012,2.012,0,0,0,1.289-1.708c.116-.887.271-1.769.422-2.654l.2-1.145a1.351,1.351,0,0,1,.474-.9,1.331,1.331,0,0,1,.979-.151c1.289.221,2.573.472,3.858.725a1.341,1.341,0,0,0,1.245-.36q1.687-1.589,3.395-3.161a1.233,1.233,0,0,1,1.859,0l.184.17c1.066.985,2.132,1.97,3.187,2.964a1.425,1.425,0,0,0,1.287.391l1.63-.253c1.018-.157,2.036-.31,3.045-.507a1.152,1.152,0,0,1,.85.212,1.306,1.306,0,0,1,.548.841l.708,4.264a1.332,1.332,0,0,0,.791,1.057q2.025.934,4.037,1.894c.531.251.708.524.765.863l-.061.2a3.959,3.959,0,0,1-.21.6c-.614,1.271-1.25,2.534-1.892,3.792a1.305,1.305,0,0,0,.1,1.442c.607.869,1.208,1.748,1.809,2.624l.741,1.081a1.171,1.171,0,0,1,.234.961A1.186,1.186,0,0,1,413.832,259.645Z" transform="translate(0 0)" fill="#89c966"/>
              </g>
            </svg>&nbsp;
            Offers
          <p>

          <div class="slide">
            <ul>
              <li class="mySlides fade">
                <img src="./assets/images/slide-01.jpg" alt="slide-01">
              </li>
              <li class="mySlides fade">
                <img src="./assets/images/slide-01.jpg" alt="slide-01">
              </li>
            </ul>

            <div class="next-previous">
              <span></span>
              <div class="btn-next-previous">
                <button class="previous">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25.221" height="35.125" viewBox="0 0 25.221 35.125">
                    <path id="Path_341" data-name="Path 341" d="M211.039,351.235,189.683,336.45a2.85,2.85,0,0,1,0-5.013l21.356-14.784a1.511,1.511,0,0,1,2.372,1.242v32.1A1.512,1.512,0,0,1,211.039,351.235Z" transform="translate(-188.19 -316.382)" fill="#bebebe"/>
                  </svg>
                </button>
                <button class="next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25.223" height="35.125" viewBox="0 0 25.223 35.125">
                    <path id="Path_342" data-name="Path 342" d="M221.192,316.654l21.356,14.784a2.849,2.849,0,0,1,0,5.013l-21.356,14.785a1.512,1.512,0,0,1-2.372-1.244V317.9A1.511,1.511,0,0,1,221.192,316.654Z" transform="translate(-218.82 -316.382)" fill="#bebebe"/>
                  </svg>
                </button>
              </div>
              <span></span>
            </div>
          </div>

          <p class="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="48.858" height="37.369" viewBox="0 0 48.858 37.369">
              <g id="Group_585" data-name="Group 585" transform="translate(-220.78 -234.254)">
                <g id="Group_583" data-name="Group 583" transform="translate(246.387 234.254)">
                  <path id="Path_390" data-name="Path 390" d="M245.727,234.254a11.626,11.626,0,1,0,11.625,11.625A11.638,11.638,0,0,0,245.727,234.254Zm0,21.325a9.7,9.7,0,1,1,9.7-9.7A9.71,9.71,0,0,1,245.727,255.579Z" transform="translate(-234.102 -234.254)" fill="#89c966"/>
                  <circle id="Ellipse_39" data-name="Ellipse 39" cx="5.399" cy="5.399" r="5.399" transform="translate(5.432 7.162) rotate(-9.217)" fill="#89c966"/>
                  <path id="Path_391" data-name="Path 391" d="M243.2,252.762a.3.3,0,0,1-.536,0l-2.831-5.457a7.946,7.946,0,0,1-2.693-1.005l5.221,10.061a.643.643,0,0,0,1.142,0L248.72,246.3a7.924,7.924,0,0,1-2.691,1.005Z" transform="translate(-231.303 -223.146)" fill="#89c966"/>
                </g>
                <g id="Group_584" data-name="Group 584" transform="translate(220.78 239.598)">
                  <path id="Path_392" data-name="Path 392" d="M227.8,237.034a7.019,7.019,0,1,0,7.018,7.02A7.027,7.027,0,0,0,227.8,237.034Zm0,12.875a5.856,5.856,0,1,1,5.855-5.855A5.862,5.862,0,0,1,227.8,249.909Z" transform="translate(-220.78 -237.034)" fill="#89c966"/>
                  <circle id="Ellipse_40" data-name="Ellipse 40" cx="3.26" cy="3.26" r="3.26" transform="translate(3.759 3.759)" fill="#89c966"/>
                  <path id="Path_393" data-name="Path 393" d="M226.272,248.209a.184.184,0,0,1-.325,0l-1.709-3.295a4.813,4.813,0,0,1-1.626-.607l3.152,6.074a.389.389,0,0,0,.69,0l3.152-6.074a4.791,4.791,0,0,1-1.626.607Z" transform="translate(-219.091 -230.327)" fill="#89c966"/>
                </g>
                <path id="Path_394" data-name="Path 394" d="M240.94,254.671c-1.057-.04-1.865-.519-1.788-1.088h0c.077-.557,1-.975,2.057-.944h0c1.057.04,1.864.529,1.788,1.086h0c-.077.538-.923.946-1.922.946h-.135Z" transform="translate(16.938 16.952)" fill="#89c966"/>
                <path id="Path_395" data-name="Path 395" d="M237.106,254.166v.012c-.961-.244-1.384-.844-.942-1.351h0a2.875,2.875,0,0,1,2.556-.5h0c.961.235,1.384.842.942,1.351h0a2.454,2.454,0,0,1-1.749.588h0A3.143,3.143,0,0,1,237.106,254.166Z" transform="translate(14.025 16.582)" fill="#89c966"/>
                <path id="Path_396" data-name="Path 396" d="M233.827,252.653c-.538-.486-.231-1.105.692-1.39h0a3.017,3.017,0,0,1,2.633.365h0c.538.488.211,1.107-.692,1.392h0a3.556,3.556,0,0,1-.98.131h0A2.532,2.532,0,0,1,233.827,252.653Z" transform="translate(11.787 15.556)" fill="#89c966"/>
                <path id="Path_397" data-name="Path 397" d="M232.508,251.063c-.519-.486-.192-1.105.73-1.39h0a3,3,0,0,1,2.614.386h0c.519.477.211,1.105-.711,1.38h0a3.423,3.423,0,0,1-.961.133h0A2.628,2.628,0,0,1,232.508,251.063Z" transform="translate(10.588 14.099)" fill="#89c966"/>
                <path id="Path_398" data-name="Path 398" d="M230.942,250.373c-.961-.234-1.384-.844-.923-1.351h0a2.825,2.825,0,0,1,2.537-.5h0c.961.244,1.384.844.942,1.351h0a2.412,2.412,0,0,1-1.749.588h0A3.721,3.721,0,0,1,230.942,250.373Z" transform="translate(8.348 13.075)" fill="#89c966"/>
                <path id="Path_399" data-name="Path 399" d="M223.486,249.416c-.25-.548.384-1.1,1.422-1.228h0c1.019-.133,2.076.2,2.307.752h0c.269.548-.384,1.1-1.4,1.228h0a3.381,3.381,0,0,1-.461.031h0A2.079,2.079,0,0,1,223.486,249.416Z" transform="translate(2.445 12.823)" fill="#89c966"/>
                <path id="Path_400" data-name="Path 400" d="M228.47,250.052c-1.057-.04-1.865-.529-1.788-1.086h0c.077-.559,1-.975,2.057-.944h0v.01h0c1.057.031,1.845.517,1.768,1.076h0c-.058.538-.9.944-1.9.944h-.135Z" transform="translate(5.438 12.695)" fill="#89c966"/>
              </g>
            </svg>&nbsp;
            Ways to Experience
          <p>

          <div class="experience">
            <div class="row-experience">
              <div class="list-ways">
                <div class="box-ways">
                  <div class="detail-ways">
                    <div class="img-ways" style="background-image:url('./assets/images/ways-01.jpg')"></div>
                    <p class="name-ways">3-Day Dali, Shaxi & Lijiang Tour</p>
                  </div>
                </div>
              </div>
              <div class="list-ways">
                <div class="box-ways">
                  <div class="detail-ways">
                    <div class="img-ways" style="background-image:url('./assets/images/ways-02.jpg')"></div>
                    <p class="name-ways">Two-day Dali & Lijiang tour</p>
                  </div>
                </div>
              </div>
              <div class="list-ways">
                <div class="box-ways">
                  <div class="detail-ways">
                    <div class="img-ways" style="background-image:url('./assets/images/ways-02.jpg')"></div>
                    <p class="name-ways">Two-day Dali & Lijiang tour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p class="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="32.498" viewBox="0 0 39 32.498">
              <g id="Group_43" data-name="Group 43" transform="translate(-602.763 -223.447)">
                <g id="Group_40" data-name="Group 40" transform="translate(602.763 245.918)">
                  <rect id="Rectangle_45" data-name="Rectangle 45" width="39" height="2.255" fill="#89c966"/>
                </g>
                <g id="Group_41" data-name="Group 41" transform="translate(602.763 253.689)">
                  <rect id="Rectangle_46" data-name="Rectangle 46" width="39" height="2.255" fill="#89c966"/>
                </g>
                <g id="Group_42" data-name="Group 42" transform="translate(602.763 223.447)">
                  <path id="Path_28" data-name="Path 28" d="M639.506,225.7v12.618H605.018V225.7h34.487m2.255-2.255h-39v17.129h39V223.447Z" transform="translate(-602.763 -223.447)" fill="#89c966"/>
                </g>
              </g>
            </svg>&nbsp;
            Stories
          <p>

          <div class="stories">
            <div class="row-stories">
              <div class="list-stories">
                <div class="box-stories">
                  <div class="detail-stories">
                    <div class="img-stories" style="background-image:url('./assets/images/stories-01.jpg')">
                      <div class="img-blur" style="background-image:url('./assets/images/stories-01.jpg')"></div>
                      <div class="text-stories">
                        <p class="name">The Linden Story <br><span>by Duen Punyashthiti</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-stories">
                <div class="box-stories">
                  <div class="detail-stories">
                    <div class="img-stories" style="background-image:url('./assets/images/stories-02.jpg')">
                      <div class="img-blur" style="background-image:url('./assets/images/stories-02.jpg')"></div>
                      <div class="text-stories">
                        <p class="name">The Linden Story <br><span>by Duen Punyashthiti</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="div-btn">
              <a href="#" class="btn-see-all">See all</a>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  plusSlides() {
    const previous = document.querySelector(".previous");
    const next = document.querySelector(".next");
    previous.addEventListener('click', () => {
      this.activeSlide(slideIndex += -1)
    });
    next.addEventListener('click', () => {
      this.activeSlide(slideIndex += 1)
    });
  }

  activeSlide(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

}