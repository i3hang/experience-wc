class experienceNavbar extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  get menu() {
    return this.getAttribute('menu') || '';
  }

  get logo() {
    return this.getAttribute('logo') || '';
  }

  template() {
    // console.log(JSON.parse(this.menu));
    this.innerHTML = `
      <div class="logo">
        <img src="${this.logo}" alt="logo">
      </div>
      <div class="exper-navbar">
        <ul class="list-menu">
          <li>
            <a href="#">
              <img src="./images/icon-menu-01.png">
              <p>Snapshots</p>
            </a>
          <li>
          <li>
            <a href="#">
              <img src="./images/icon-menu-02.png">
              <p>Nearby</p>
            </a>
          <li>
          <li>
            <a href="#">
              <img src="./images/icon-menu-03.png">
              <p>Campaigns</p>
            </a>
          <li>
          <li>
            <a href="#">
              <img src="./images/icon-menu-04.png">
              <p>Ways to Experience</p>
            </a>
          <li>
          <li>
            <a href="#">
              <img src="./images/icon-menu-05.png">
              <p>Stories</p>
            </a>
          <li>
          <li>
            <a href="#">
              <img src="./images/icon-menu-06.png">
              <p>Contact</p>
            </a>
          <li>
        </ul>
      </div>
    `
  }

}

customElements.define('exp-navbar', experienceNavbar);