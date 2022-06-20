import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import initParamsValidationRules from "./initParamsValidationRules";
import slide1 from "./scenes/scene-2";
import { circleCombo } from './library/circleCombo';

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
clip.addIncident(slide1,3500)
clip.addIncident(scene1, 0)
clip.addIncident(circleCombo("#root",".circle"),2800)

