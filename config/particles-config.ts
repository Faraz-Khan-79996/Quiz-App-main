export const particlesConfig = {
  background: {
    color: "#000000",
  },
  particles: {
    number: {
      value: 100,
    },
    color: {
      value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
    },
    shape: {
      type: "character",
      character: {
        value: ["ඞ"],
        font: "Verdana",
        style: "",
        weight: "400",
      },
    },
    size: {
      value: 16,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
};