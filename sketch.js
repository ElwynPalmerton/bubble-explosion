// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


var bubble = [];
var bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Arguments: x, y, radius, speed;
  let tempX, tempY, radius, speed;

  for (let i = 0; i < 2000; i++) {
    if (i < 70) {
      bubble[i] = new Bubble(width / 2);
    } else if (i < 90) {
      radius = random(5, 25);
      bubble[i] = new Bubble(width / 2, height / 2, radius, 10);
    } else {
      radius = random(10, 15);
      bubble[i] = new Bubble(width / 2, height / 2, radius, 30);
    }
  }
  bgColor = setColor();
};

// Create variations on bubble and then create an array(?) of thsoe based on the variations. The input could be an array of percentages referencing type  of bubble. Use extend class.
//Also, create classes which are defined as accumulation of different kinds of extended bubbles in different percentage based distriubtions...
//And then class which comprise multiple aggregate classses?
//See how these can for multiple classes...
//...Or be organized into timed montages.

// Move the if then code above to a separate class which extends bubble?

//Make then growing slowly into each other variation again and the tiny twinkling star variations.

function mouseDragged() {
  // console.log('pressed!');
  // console.log(mouseX, mouseY);

  for (let i = 0; i < bubble.length; i++) {
    let d = dist(mouseX, mouseY, bubble[i].x, bubble[i].y);
    if (d < bubble[i].r) {
      console.log('IN BUBBLE!');
      bubble[i].c = 255;
    } else {
      console.log("Not in bubble!");
    } //This could be refactoring as a more generic "overlap" function called from mousePressed();
  }
}


function draw() {

  background(bgColor);

  for (let i = 0; i < bubble.length; i++) {
    bubble[i].move();
    bubble[i].show();
  }
}


//Check to see if the mouse is pressed in a circle.