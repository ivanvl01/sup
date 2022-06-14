import { CSSEffect, Combo} from "@donkeyclip/motorcortex";
export const circleCombo = (selector,circle) => new Combo(
    {
     incidents: [
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
         selector:circle,
         duration: 600,
        },
        position: 0
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
           opacity:0
         }
        },
        props: {
          selector:circle,
         duration: 1,
        },
        position: 600
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
          selector:circle,
         duration: 1,
        },
        position: 700
       },
       {
        incidentClass: CSSEffect,
        attrs: {
         animatedAttrs: {
           opacity:1
         }
        },
        props: {
          selector:circle,
         duration: 1,
        },
        position: 700
       },
     ]
    },
    {
     selector,
    }
  );