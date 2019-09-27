class experienceHeaders extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  get background() {
    return this.getAttribute('background');
  }

  get className() {
    return this.getAttribute('className');
  }

  template() {
    this.innerHTML = `
      <div class="exper-header" style="background-image: url(${this.background})">
        <div class="check-in">
          <div class="title-exper-header">
            <p>The Linden Centre</p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16.837" height="24.303" viewBox="0 0 16.837 24.303">
                <g id="Group_11" data-name="Group 11" transform="translate(0 0)">
                  <path id="Path_4" data-name="Path 4" d="M359.747,246.143a8.419,8.419,0,1,0,8.418,8.419A8.428,8.428,0,0,0,359.747,246.143Zm0,15.443a7.024,7.024,0,1,1,7.023-7.024A7.032,7.032,0,0,1,359.747,261.586Z" transform="translate(-351.328 -246.143)" fill="#fff"/>
                  <circle id="Ellipse_5" data-name="Ellipse 5" cx="3.909" cy="3.909" r="3.909" transform="matrix(0.987, -0.16, 0.16, 0.987, 3.934, 5.186)" fill="#fff"/>
                  <path id="Path_5" data-name="Path 5" d="M367.833,298.907a.219.219,0,0,1-.388,0l-2.05-3.951a5.753,5.753,0,0,1-1.949-.728l3.78,7.285a.466.466,0,0,0,.827,0l3.781-7.285a5.757,5.757,0,0,1-1.95.728Z" transform="translate(-359.22 -277.461)" fill="#fff"/>
                </g>
              </svg>&nbsp;
              Dali, Yunnan, PR China
            </p>
          </div>
          <div class="icon-pr">
            <div class="list-icon">
              <img src="./images/icon-02.png"><br>
              PR China
            </div>
            <div class="list-icon">
              <img src="./images/icon-01.png"><br>
              Stay
            </div>
          </div>
          <div class="box-check-in">
            <div class="form-check-in">
              <div class="row5">
                <div class="list-input-3">
                  <div class="form-select">
                    <select>
                      <option>1 Room</option>
                    </select>
                  </div>
                </div>
                <div class="list-input-3">
                  <div class="form-select">
                    <select>
                      <option>2 adults</option>
                    </select>
                  </div>
                </div>
                <div class="list-input-3">
                  <div class="form-select">
                    <select>
                      <option>No children</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-now">
              <button class="btn-book">BOOK NOW</button>
            </div>
          </div>
        </div>    
      </div>
    `
  }

}

window.customElements.define('exp-header', experienceHeaders);