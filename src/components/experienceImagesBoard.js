import iconIGL from "../assets/images/ig-large.png";
import iconIGS from "../assets/images/ig-small.png";
import ig01 from "../assets/images/ig-01.jpg";
import ig02 from "../assets/images/ig-02.jpg";
import ig03 from "../assets/images/ig-03.jpg";
import ig04 from "../assets/images/ig-04.jpg";
import ig05 from "../assets/images/ig-05.jpg";
import ig06 from "../assets/images/ig-06.jpg";
import ig07 from "../assets/images/ig-07.jpg";
import ig08 from "../assets/images/ig-08.jpg";
import ig09 from "../assets/images/ig-09.jpg";
import ig10 from "../assets/images/ig-10.jpg";

export class experienceImagesBoard extends HTMLElement {

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
                <div class="ig" style="background-image:url('${ig01}'); background-color: green;">
                  <img src="${iconIGL}" alr="logo-ig">
                </div>
              </div>
            </div>
          </div>

          <div class="small">
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('${ig02}'); background-color: green;">
                  <img src="${iconIGS}" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('${ig03}'); background-color: green;">
                  <img src="${iconIGS}" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('${ig04}'); background-color: green;">
                <img src="${iconIGS}" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('${ig05}'); background-color: green;">
                <img src="${iconIGS}" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('${ig06}'); background-color: green;">
                <img src="${iconIGS}" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('${ig07}'); background-color: green;">
                <img src="${iconIGS}" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('${ig08}'); background-color: green;">
                <img src="${iconIGS}" alr="logo-ig">
                </div>
              </div>
            </div>
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig" style="background-image:url('${ig09}'); background-color: green;">
                <img src="${iconIGS}" alr="logo-ig">
                </div>
              </div>
            </div>
          </div>
          
          <div class="large">
            <div class="box-img-ig">
              <div class="img-ig">
                <div class="ig"  style="background-image:url('${ig10}'); background-color: green;">
                <img src="${iconIGL}" alr="logo-ig">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

}