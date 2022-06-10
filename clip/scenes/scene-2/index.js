import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { opacity } from "../../library/opacity";
import { scale } from "../../library/scale";
import { moveLeft } from "../../library/moveLeft";
import { moveRight } from "../../library/moveRight";
import { moveTop } from "../../library/moveTop";
import { backgroundPosition } from "../../library/backgroundPosition";


const slide1 = new HTMLClip({
  html,
  css,
  selector: "#root2",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    logo:"@initParams.logo",
    title:"@initParams.title",
    slide1: "@initParams.slide1",
    titleFontColor:"@initParams.titleFontColor"
  },
});

slide1.addIncident(opacity(1,".container",1),0)
slide1.addIncident(backgroundPosition("center",".photo",6000),0)
slide1.addIncident(moveTop("0%",".date",500),500)
export default slide1;
