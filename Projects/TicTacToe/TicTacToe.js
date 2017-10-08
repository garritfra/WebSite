var gamestate = [0,0,0, 
                0,0,0,
                0,0,0];

function setup() {
    createCanvas(601, 601);
    background(50);
    fill(255);
    stroke(20);
    drawboard();
}

function draw() {


}

function feld(x, y, value) {
    
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 200;
    this.value = value;

    rect(this.x, this.y, this.w, this.h);
    
}

function drawboard() {
    f1 = new feld(0, 0, gamestate[0]);
    f2 = new feld(200, 0, gamestate[1]);
    f3 = new feld(400, 0, gamestate[2]);
    f4 = new feld(0, 200, gamestate[3]);
    f5 = new feld(200, 200, gamestate[4]);
    f6 = new feld(400, 200, gamestate[5]);
    f7 = new feld(0, 400, gamestate[6]);
    f8 = new feld(200, 400, gamestate[7]);
    f8 = new feld(400, 400, gamestate[8]);
}

function change(value) {
    this.value = value;

    this.value = 1;

    return this.value;
}