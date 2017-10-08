var x = 100;
var y = 100;
var canvaslength = window.innerWidth * 0.95;
var canvasheight = window.innerHeight * 0.95;

function setup() {
  createCanvas(canvaslength, canvasheight);
}

function draw() {
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;

  if (x < 0) {
    x = canvaslength;
  }

  if (x > canvaslength) {
    x = 0;
  }

  if (y < 0) {
    y = canvasheight;
  }

  if (y > canvasheight) {
    y = 0;
  }

  background(200);
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
}