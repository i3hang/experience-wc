export class experienceAbout extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  template() {
    this.innerHTML = `
      <div class="exp-about">
        <div class="map-about">

        </div>
        <div class="about">
          <p class="title">About</p>
          <div class="text-about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ligula imperdiet, dapibus justo ac, dapibus sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam consectetur ornare dui nec hendrerit. Phasellus egestas eros et sagittis consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sodales enim dolor, in commodo nunc egestas sed. Suspendisse elementum porttitor consequat.</p>
            <p>Nullam a condimentum eros. Sed malesuada accumsan ligula, in egestas magna gravida id. Duis lobortis, purus sed luctus condimentum, dolor lacus volutpat dolor, ac molestie metus mauris quis tortor. Sed quis feugiat augue. Donec a odio nec neque mollis viverra non suscipit odio. Sed nunc arcu, fringilla sit amet lectus id, pharetra consectetur ex. Etiam justo lorem, imper diet sit amet arcu vel, dapibus imperdiet diam. Mauris gravida justo ut ven enatis vehicula. Vivamus ut est sapien. Donec vel fermentum massa.</p>
          </div>
        </div>
      </div>
    `;
  }

}