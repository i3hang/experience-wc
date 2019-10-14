export class experienceIG extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  template() {
    this.innerHTML = `
      <div class="exper-ig">
        <div class="list-ig">
          <div class="large">
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('./assets/images/ig-01.jpg'); background-color: green;">
                  <img src="./assets/images/ig-large.png" alr="logo-ig">
                </div>
              </div>
            </div>
          </div>

          <div class="small">
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('./assets/images/ig-02.jpg'); background-color: green;">
                  <img src="./assets/images/ig-small.png" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('./assets/images/ig-03.jpg'); background-color: green;">
                  <img src="./assets/images/ig-small.png" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('./assets/images/ig-04.jpg'); background-color: green;">
                <img src="./assets/images/ig-small.png" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('./assets/images/ig-05.jpg'); background-color: green;">
                <img src="./assets/images/ig-small.png" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('./assets/images/ig-06.jpg'); background-color: green;">
                <img src="./assets/images/ig-small.png" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('./assets/images/ig-07.jpg'); background-color: green;">
                <img src="./assets/images/ig-small.png" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('./assets/images/ig-08.jpg'); background-color: green;">
                <img src="./assets/images/ig-small.png" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('./assets/images/ig-09.jpg'); background-color: green;">
                <img src="./assets/images/ig-small.png" alr="logo-ig">
                </div>
              </div>
            </div>
          </div>
          
          <div class="large">
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig"  style="background-image:url('./assets/images/ig-10.jpg'); background-color: green;">
                <img src="./assets/images/ig-large.png" alr="logo-ig">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

}