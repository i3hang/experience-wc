export class experienceNearby extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  template() {
    this.innerHTML = `
      <div class="exp-nearby">
        <div class="container">
          <p class="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="66.116" height="33.637" viewBox="0 0 66.116 33.637">
              <g id="Group_25" data-name="Group 25" transform="translate(-441.935 -225.506)">
                <path id="Path_12" data-name="Path 12" d="M451.637,228.294a9.7,9.7,0,1,0,9.7,9.7A9.713,9.713,0,0,0,451.637,228.294Zm0,17.8A8.094,8.094,0,1,1,459.73,238,8.1,8.1,0,0,1,451.637,246.089Z" transform="translate(0 1.355)" fill="#89c966"/>
                <path id="Path_13" data-name="Path 13" d="M450.269,246.69a.252.252,0,0,1-.447,0l-2.363-4.554a6.606,6.606,0,0,1-2.247-.838l4.357,8.394a.536.536,0,0,0,.952,0l4.357-8.394a6.623,6.623,0,0,1-2.247.838Z" transform="translate(1.592 7.674)" fill="#89c966"/>
                <path id="Path_14" data-name="Path 14" d="M483.074,228.294a9.7,9.7,0,1,0,9.7,9.7A9.713,9.713,0,0,0,483.074,228.294Zm0,17.8A8.094,8.094,0,1,1,491.167,238,8.1,8.1,0,0,1,483.074,246.089Z" transform="translate(15.276 1.355)" fill="#89c966"/>
                <path id="Path_15" data-name="Path 15" d="M481.706,246.69a.252.252,0,0,1-.447,0l-2.363-4.554a6.606,6.606,0,0,1-2.247-.838l4.357,8.394a.536.536,0,0,0,.952,0l4.357-8.394a6.623,6.623,0,0,1-2.247.838Z" transform="translate(16.868 7.674)" fill="#89c966"/>
                <path id="Path_16" data-name="Path 16" d="M467.994,225.506a11.652,11.652,0,1,0,11.651,11.653A11.666,11.666,0,0,0,467.994,225.506Zm0,21.373a9.722,9.722,0,1,1,9.721-9.721A9.733,9.733,0,0,1,467.994,246.879Z" transform="translate(7)" fill="#89c966"/>
                <path id="Path_17" data-name="Path 17" d="M466.35,247.6a.3.3,0,0,1-.538,0l-2.838-5.468a7.958,7.958,0,0,1-2.7-1.007l5.232,10.082a.644.644,0,0,0,1.144,0l5.232-10.082a7.976,7.976,0,0,1-2.7,1.007Z" transform="translate(8.913 7.589)" fill="#89c966"/>
                <path id="Path_18" data-name="Path 18" d="M461.375,240.561h2.945v-3.244h2.453v3.244h2.945V229.69h-8.343Zm4.513-9.47h2.9v.886h-2.9Zm0,1.834h2.9v.886h-2.9Zm0,1.834h2.9v.886h-2.9Zm-3.584-3.667h2.9v.886h-2.9Zm0,1.834h2.9v.886h-2.9Zm0,1.834h2.9v.886h-2.9Z" transform="translate(9.446 2.033)" fill="#89c966"/>
                <path id="Path_19" data-name="Path 19" d="M446.035,241.065h2.548v-2.807h2.122v2.807h2.548v-9.407h-7.219Zm3.9-8.195h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm-3.1-3.174h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Z" transform="translate(1.992 2.989)" fill="#89c966"/>
                <path id="Path_20" data-name="Path 20" d="M477.472,241.065h2.548v-2.807h2.122v2.807h2.548v-9.407h-7.219Zm3.9-8.195h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm-3.1-3.174h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Z" transform="translate(17.268 2.989)" fill="#89c966"/>
              </g>
            </svg> &nbsp;
            Nearby Hotels
          </p>

          <div class="nearby-hotels">
            <div class="row-hotels">
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-01.png')"></div>
                    <div class="name-hotels">
                      <button class="btn-book">
                        Book Now
                      </button>
                      <p class="name">Dali Yunxi Boutique Inn</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-02.png')"></div>
                    <div class="name-hotels">
                      <button class="btn-book">
                        Book Now
                      </button>
                      <p class="name">Dali Old Courtyard Boutique Inn</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-03.png')"></div>
                    <div class="name-hotels">
                      <button class="btn-book">
                        Book Now
                      </button>
                      <p class="name">The Jade Emu International Guesthouse</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-04.png')"></div>
                    <div class="name-hotels">
                      <button class="btn-book">
                        Book Now
                      </button>
                      <p class="name">Dali Ronglu Hotel</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-05.png')"></div>
                    <div class="name-hotels">
                      <button class="btn-book">
                        Book Now
                      </button>
                      <p class="name">Mengyuanju Boutique Inn</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-06.png')"></div>
                    <div class="name-hotels">
                      <p class="name">Anantara</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <exp-banner banner="./assets/images/banner-02.jpg"></exp-banner>

          <p class="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="66.116" height="33.637" viewBox="0 0 66.116 33.637">
              <g id="Group_25" data-name="Group 25" transform="translate(-441.935 -225.506)">
                <path id="Path_12" data-name="Path 12" d="M451.637,228.294a9.7,9.7,0,1,0,9.7,9.7A9.713,9.713,0,0,0,451.637,228.294Zm0,17.8A8.094,8.094,0,1,1,459.73,238,8.1,8.1,0,0,1,451.637,246.089Z" transform="translate(0 1.355)" fill="#89c966"/>
                <path id="Path_13" data-name="Path 13" d="M450.269,246.69a.252.252,0,0,1-.447,0l-2.363-4.554a6.606,6.606,0,0,1-2.247-.838l4.357,8.394a.536.536,0,0,0,.952,0l4.357-8.394a6.623,6.623,0,0,1-2.247.838Z" transform="translate(1.592 7.674)" fill="#89c966"/>
                <path id="Path_14" data-name="Path 14" d="M483.074,228.294a9.7,9.7,0,1,0,9.7,9.7A9.713,9.713,0,0,0,483.074,228.294Zm0,17.8A8.094,8.094,0,1,1,491.167,238,8.1,8.1,0,0,1,483.074,246.089Z" transform="translate(15.276 1.355)" fill="#89c966"/>
                <path id="Path_15" data-name="Path 15" d="M481.706,246.69a.252.252,0,0,1-.447,0l-2.363-4.554a6.606,6.606,0,0,1-2.247-.838l4.357,8.394a.536.536,0,0,0,.952,0l4.357-8.394a6.623,6.623,0,0,1-2.247.838Z" transform="translate(16.868 7.674)" fill="#89c966"/>
                <path id="Path_16" data-name="Path 16" d="M467.994,225.506a11.652,11.652,0,1,0,11.651,11.653A11.666,11.666,0,0,0,467.994,225.506Zm0,21.373a9.722,9.722,0,1,1,9.721-9.721A9.733,9.733,0,0,1,467.994,246.879Z" transform="translate(7)" fill="#89c966"/>
                <path id="Path_17" data-name="Path 17" d="M466.35,247.6a.3.3,0,0,1-.538,0l-2.838-5.468a7.958,7.958,0,0,1-2.7-1.007l5.232,10.082a.644.644,0,0,0,1.144,0l5.232-10.082a7.976,7.976,0,0,1-2.7,1.007Z" transform="translate(8.913 7.589)" fill="#89c966"/>
                <path id="Path_18" data-name="Path 18" d="M461.375,240.561h2.945v-3.244h2.453v3.244h2.945V229.69h-8.343Zm4.513-9.47h2.9v.886h-2.9Zm0,1.834h2.9v.886h-2.9Zm0,1.834h2.9v.886h-2.9Zm-3.584-3.667h2.9v.886h-2.9Zm0,1.834h2.9v.886h-2.9Zm0,1.834h2.9v.886h-2.9Z" transform="translate(9.446 2.033)" fill="#89c966"/>
                <path id="Path_19" data-name="Path 19" d="M446.035,241.065h2.548v-2.807h2.122v2.807h2.548v-9.407h-7.219Zm3.9-8.195h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm-3.1-3.174h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Z" transform="translate(1.992 2.989)" fill="#89c966"/>
                <path id="Path_20" data-name="Path 20" d="M477.472,241.065h2.548v-2.807h2.122v2.807h2.548v-9.407h-7.219Zm3.9-8.195h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm-3.1-3.174h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Zm0,1.587h2.513v.767h-2.513Z" transform="translate(17.268 2.989)" fill="#89c966"/>
              </g>
            </svg> &nbsp;
            Nearby Experiences
          </p>

          <div class="nearby-hotels">
            <div class="row-hotels">
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-01.jpg')"></div>
                    <div class="name-hotels">
                      <button class="btn-book">
                        Book Now
                      </button>
                      <p class="name">Yunnan Shaxi Ancient Town</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-02.jpg')"></div>
                    <div class="name-hotels">
                      <!--<button class="btn-book">
                        Book Now
                      </button>-->
                      <p class="name">Dali Cang Mountain</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-03.jpg')"></div>
                    <div class="name-hotels">
                      <!--<button class="btn-book">
                        Book Now
                      </button>-->
                      <p class="name">Butterfly Spring Park</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-04.jpg')"></div>
                    <div class="name-hotels">
                      <button class="btn-book">
                        Book Now
                      </button>
                      <p class="name">Monumnet of Shih-tsu Taking over Yunnan</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-05.jpg')"></div>
                    <div class="name-hotels">
                      <button class="btn-book">
                        Book Now
                      </button>
                      <p class="name">Tianlongbabu Film Studio</p>

                      <p class="lating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.975" viewBox="0 0 15 12.975">
                          <path id="Path_374" data-name="Path 374" d="M507.975,287.94c.338-.342.647-.668.97-.98a3.866,3.866,0,1,1,5.4,5.528q-2.745,2.752-5.5,5.5c-.27.271-.539.543-.82.826-.062-.057-.115-.1-.165-.153-1.742-1.742-3.49-3.479-5.222-5.231a13.311,13.311,0,0,1-1.376-1.549,3.77,3.77,0,0,1,2.2-5.916,3.73,3.73,0,0,1,3.513.975C507.327,287.251,507.638,287.6,507.975,287.94Z" transform="translate(-500.538 -285.837)" fill="#bebebe"/>
                        </svg>&nbsp;
                        210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-hotels">
                <div class="box-hotels">
                  <div class="detail-hotels">
                    <div class="ways">
                      1.5 km away
                    </div>
                    
                    <div class="img-hotels" style="background-image: url('./assets/images/hotels-06.jpg')"></div>
                    <div class="name-hotels">
                      <p class="name">Bangkok Post</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  }

}