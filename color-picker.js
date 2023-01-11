// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// function setup() {
//   let c = setColor();
//   background(c);
//   // console.log(c);

// }

function setColor() {
  let hue = 20;
  let lightness = 20;
  let saturation = 50;

  let hslaColor =
    "hsla(" + hue + ", " + lightness + "%, " + saturation + "%, 0.7)";
  // console.log(hslaColor);

  return color(hslaColor);

}

//Add three arguments for setColor Hue, saturation, lightness, alpha and return the P5 HSLA color object.

//Make more elemeents and then make buttons and sliders which define and then add extra elements.