import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import initParamsValidationRules from "./initParamsValidationRules";
// import slide1 from "./scenes/scene-2";
import html2 from "./scenes/scene-2/index.html";
import css2 from "./scenes/scene-2/index.css";
import { scale } from "./library/scale";
import { circleCombo } from "./library/circleCombo";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Work+Sans&family=Lato:ital,wght@1,300&family=Playfair+Display:wght@600&display=swap`,
    },
  ],
});

const slide1 = new HTMLClip({
  html: html2,
  css: css2,
  selector: "#root2",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    stylesheet: "@initParams.stylesheet",
    products: "@initParams.products",
    company: "@initParams.company",
    numba: "@initParams.num",
  },
});

// slide1.addIncident(
//   productComboLeft(
//     ".container-left .product-container",
//     ".container-left .product-image",
//     ".container-left .photo",
//     ".container-left .product-name",
//     ".container-left .date-wrapper",
//     ".container-left .company",
//     ".container-left .product-description",
//     ".container-left .offer"
//   ),
//   0
// );
// slide1.addIncident(
//   productComboRight(
//     ".container-right .product-container",
//     ".container-right .product-image",
//     ".container-right .photo",
//     ".container-right .product-name",
//     ".container-right .date-wrapper",
//     ".container-right .company",
//     ".container-right .product-description",
//     ".container-right .offer"
//   ),
//   0
// );
slide1.addIncident(
  scale(1, ".outro1", 1000, "@expression(initParams.numba *5600)"),
  0
);

clip.addIncident(slide1, 0);
// // clip.addIncident(scene1, 0)
// clip.addIncident(circleCombo("#root",".circle"),2800)
