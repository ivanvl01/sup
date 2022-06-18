import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { scale } from "../../library/scale";
import { productComboRight,productComboLeft } from './../../library/productCombo';


const slide1 = new HTMLClip({
  html,
  css,
  selector: "#root2",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    stylesheet:"@initParams.stylesheet",
    products:"@initParams.products",
    company:"@initParams.company"
  },
});



slide1.addIncident(productComboLeft(".container-left .product-container",
                                  ".container-left .product-image",
                                  ".container-left .photo",
                                  ".container-left .product-name",
                                  ".container-left .date-wrapper",
                                  ".container-left .company",
                                  ".container-left .product-description",
                                  ".container-left .offer"),0)
slide1.addIncident(productComboRight(".container-right .product-container",
                                  ".container-right .product-image",
                                  ".container-right .photo",
                                  ".container-right .product-name",
                                  ".container-right .date-wrapper",
                                  ".container-right .company",
                                  ".container-right .product-description",
                                  ".container-right .offer"),0)



export default slide1;
