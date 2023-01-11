class Bubble {

  constructor(x, y, r, speed, colour) {
    colour = 100;
    this.x = x || random(0, width);
    this.y = y || random(0, height);
    this.r = r || random(2, 20);
    this.speed = speed || random(1, 5);;
    this.c = colour || Math.floor(random(255));

  }

  //refactor to use vectors.

  move() {
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
  }

  show() {
    stroke(this.c);
    noStroke();
    // strokeWeight(0);
    // console.log(this.c);
    fill(this.c, 150, 150);
    ellipse(this.x, this.y, this.r);
  }

}