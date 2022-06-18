import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { moveLeft} from "../../library/moveLeft";
import { scale } from "../../library/scale";
import { opacity } from './../../library/opacity';


const clip = new HTMLClip({
  html,
  css,
  selector: "#root1",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    intro: "@initParams.intro",
    company:"@initParams.company",
    stylesheet:"@initParams.stylesheet"
  },
});

clip.addIncident(moveLeft("0%",".side-reveal",300,"@stagger(0,250)"),0)
clip.addIncident(scale(1.2,".logo",100),1000)
clip.addIncident(scale(1,".logo",100),1150)
clip.addIncident(opacity(0,".container",1),2900)
export default clip;
