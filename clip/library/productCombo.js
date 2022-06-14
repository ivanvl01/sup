import { CSSEffect, Combo} from "@donkeyclip/motorcortex";

export const productComboLeft = (productContainer,productImage,image,productName,dateWrapper,company,productDescription,offer) => new Combo(
    {
     incidents: [
      {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          opacity:1
         }
        },
        props: {
         selector: productContainer,
         duration: 1,
        },
        position: 0
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          transform:{
            scale:1
          }
         }
        },
        props: {
         selector: productImage,
         duration: 1000,
        },
        position: 0
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          backgroundPosition:"center"
         }
        },
        props: {
         selector: image,
         duration: 6000,
        },
        position: 0
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          left:"0px"
         }
        },
        props: {
         selector: productName,
         duration: 500,
        },
        position: 300
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          top:"0px"
         }
        },
        props: {
         selector: dateWrapper,
         duration: 500,
        },
        position: 400
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          right:"2px"
         }
        },
        props: {
         selector: company,
         duration: 500,
        },
        position: 500
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          top:"0px"
         }
        },
        props: {
         selector: productDescription,
         duration: 500,
        },
        position: 1000
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          transform:{
            scale:1.3
          }
         }
        },
        props: {
         selector: offer,
         duration: 2000,
         easing:"easeOutElastic"
        },
        position: 1000
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          opacity:0
         }
        },
        props: {
         selector: productContainer,
         duration: 1,
        },
        position: 4500
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          transform:{
            scale:1
          }
         }
        },
        props: {
         selector:".container-left .circle",
         duration: 500,
        },
        position: 4000
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
           opacity:0
         }
        },
        props: {
          selector:".container-left .circle",
         duration: 1,
        },
        position: 4500
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          transform:{
            scale:0
          }
         }
        },
        props: {
         selector:".container-left .circle",
         duration: 1,
        },
        position: 4600
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
           opacity:1
         }
        },
        props: {
         selector:".container-left .circle",
         duration: 1,
        },
        position: 4600
       },
      //  {
      //   incidentClass: CSSEffect,
      //   attrs: {
      //    animatedAttrs: {
      //     transform:{
      //       scale:1
      //     }
      //    }
      //   },
      //   props: {
      //    selector:".container-left .outro",
      //    duration: 300,
      //    easing:"easeOutElastic"
      //   },
      //   position: 4700
      //  },
      //  {
      //   incidentClass: CSSEffect,
      //   attrs: {
      //    animatedAttrs: {
      //      opacity:0
      //    }
      //   },
      //   props: {
      //    selector:".container-left .outro",
      //    duration: 100,
      //   },
      //   position: 7000
      //  },
     ]
    },
    {
     selector:".products",
     delay:"@expression(4600*index)"
    }
  );
  
  export const productComboRight = (productContainer,productImage,image,productName,dateWrapper,company,productDescription,offer) => new Combo(
    {
     incidents: [
      {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          opacity:1
         }
        },
        props: {
         selector: productContainer,
         duration: 1,
        },
        position: 0
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          transform:{
            scale:1
          }
         }
        },
        props: {
         selector: productImage,
         duration: 1000,
        },
        position: 0
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          backgroundPosition:"center"
         }
        },
        props: {
         selector: image,
         duration: 6000,
        },
        position: 0
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          right:"0px"
         }
        },
        props: {
         selector: productName,
         duration: 500,
        },
        position: 300
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          top:"0px"
         }
        },
        props: {
         selector: dateWrapper,
         duration: 500,
        },
        position: 400
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          left:"2px"
         }
        },
        props: {
         selector: company,
         duration: 500,
        },
        position: 500
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          top:"0px"
         }
        },
        props: {
         selector: productDescription,
         duration: 500,
        },
        position: 1000
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          transform:{
            scale:1.3
          }
         }
        },
        props: {
         selector: offer,
         duration: 2000,
         easing:"easeOutElastic"
        },
        position: 1000
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          opacity:0
         }
        },
        props: {
         selector: productContainer,
         duration: 1,
        },
        position: 4500
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          transform:{
            scale:1
          }
         }
        },
        props: {
         selector:".container-right .circle",
         duration: 500,
        },
        position: 4000
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
           opacity:0
         }
        },
        props: {
          selector:".container-right .circle",
         duration: 1,
        },
        position: 4500
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
          transform:{
            scale:0
          }
         }
        },
        props: {
         selector:".container-right .circle",
         duration: 1,
        },
        position: 4600
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
           opacity:1
         }
        },
        props: {
         selector:".container-right .circle",
         duration: 1,
        },
        position: 4600
       },
      //  {
      //   incidentClass: CSSEffect,
      //   attrs: {
      //    animatedAttrs: {
      //     transform:{
      //       scale:1
      //     }
      //    }
      //   },
      //   props: {
      //    selector:".container-right .outro",
      //    duration: 1000,
      //    easing:"easeOutElastic"
      //   },
      //   position: 4700
      //  },
      //  {
      //   incidentClass: CSSEffect,
      //   attrs: {
      //    animatedAttrs: {
      //      opacity:0
      //    }
      //   },
      //   props: {
      //    selector:".container-right .outro",
      //    duration: 100,
      //   },
      //   position: 7000
      //  },
     ]
    },
    {
     selector:".products",
     delay:"@expression(4600*index)"
    }
  );
  