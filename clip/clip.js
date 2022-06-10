import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import initParamsValidationRules from "./initParamsValidationRules";
import slide1 from "./scenes/scene-2";
import { scale } from "./library/scale";
import { opacity } from "./library/opacity";

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

clip.addIncident(scene1, 0)
clip.addIncident(scale(1,".circle",500),2800)
clip.addIncident(opacity(0,".circle",1),3300)
clip.addIncident(slide1,3300)
