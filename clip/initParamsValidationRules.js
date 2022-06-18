export default {
  stylesheet:{
    label: "Style Sheet",
    type: "object",
    props: {
      backgroundColor: { type: "color" },
      titleFontColor: { type: "color" },
    }
  },
  company:{
    label: "Company",
    type: "object",
    props: {
      logo: { type: "string" },
      title: { type: "string" },
      slogan: { type: "string" },
    }
  },
  intro:{
    label: "Intro Slide",
    type: "object",
    props: {
      titleFontSize: { type: "measurement", units: ["px"]},
      sloganFontSize: { type: "measurement" , units: ["px"]},
      image1: { type: "string" },
      image2: { type: "string" },
    }
  },
  products:{
    label: "Products",
    type: "array",
    items:{
      type:"object",
      props: {
        productName: { type: "string"},
        productDescription: { type: "string" },
        productImage: { type: "string" },
        offer: { type: "string" },
        date: { type: "string" },
        backgroundImage: { type: "string" },
      }
    }
  },
};
