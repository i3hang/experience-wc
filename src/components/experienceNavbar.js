import iconMenu01 from "../assets/images/icon-menu-01.png";
import iconMenu02 from "../assets/images/icon-menu-02.png";
import iconMenu03 from "../assets/images/icon-menu-03.png";
import iconMenu04 from "../assets/images/icon-menu-04.png";
import iconMenu05 from "../assets/images/icon-menu-05.png";
import iconMenu06 from "../assets/images/icon-menu-06.png";
import logo from "../assets/images/logo.png";

export class experienceNavbar extends HTMLElement {

  constructor() {
    super();
    this.template();
    this.burger();
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
      
      <div id="navbar" class="exper-navbar">
        <div class="logo">
          <img src="${this.logo || logo}" alt="logo">
        </div>
        <ul class="list-menu">
          <li>
            <a href="#">
              <img src="${iconMenu01}">
              <p>Snapshots</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="${iconMenu02}">
              <p>Nearby</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="${iconMenu03}">
              <p>Campaigns</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="${iconMenu04}">
              <p>Ways to Experience</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="${iconMenu05}">
              <p>Stories</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="${iconMenu06}">
              <p>Contact</p>
            </a>
          </li>
        </ul>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    `;

    
  }

  burger() {
    const burger = document.querySelector('.burger');
    const listMenu = document.querySelector('.list-menu');
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    burger.addEventListener('click', () => {
      burger.classList.toggle('toggle');
      listMenu.classList.toggle('active');
    });

    window.onscroll = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        burger.classList.remove('toggle');
        listMenu.classList.remove('active');
      } else {
        navbar.classList.remove("sticky");
      }
    };
  }

}