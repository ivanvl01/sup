import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { opacity } from "../../library/opacity";
import { scale } from "../../library/scale";


const slide1 = new HTMLClip({
  html,
  css,
  selector: "#root2",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    slide1: "@initParams.slide1",
  },
});

slide1.addIncident(opacity(1,".container",1),0)
export default slide1;
