import "./assets/css/reset.scss";
import "./assets/css/style.scss";

import {experienceHeaders} from "./components/experienceHeader";
import {experienceNavbar} from "./components/experienceNavbar";
import {experienceImagesBoard} from "./components/experienceImagesBoard";
import {experienceBanner} from "./components/experienceBanner";
import {experienceTraval} from "./components/experienceTraval";
import {experienceAffiliations} from "./components/experienceAffiliations";
import {experienceNearby} from "./components/experienceNearby";
import {experienceOffers} from "./components/experienceOffers";
import {experienceAbout} from "./components/experienceAbout";
import {experienceContact} from "./components/experienceContact";
import {experienceFeatured} from "./components/experienceFeatured";
import {experienceFooter} from "./components/experienceFooter";
import {experienceWc} from "./components/experience";


customElements.define('exp-header', experienceHeaders);
customElements.define('exp-navbar', experienceNavbar);
customElements.define('exp-images-board', experienceImagesBoard);
customElements.define('exp-banner', experienceBanner);
customElements.define('exp-traval', experienceTraval);
customElements.define('exp-affiliations', experienceAffiliations);
customElements.define('exp-nearby', experienceNearby);
customElements.define('exp-offers', experienceOffers);
customElements.define('exp-about', experienceAbout);
customElements.define('exp-contact', experienceContact);
customElements.define('exp-featured', experienceFeatured);
customElements.define('exp-footer', experienceFooter);
customElements.define('exp-wc', experienceWc);