var w = window.innerWidth * 0.95;
var h = window.innerHeight * 0.95;
var xoff = 0;       //X Offset
var yoff = 100000;  //Y Offset
var coff1 = 100;    //Color 1 Offset
var coff2 = 1000;   //Color 2 Offset
var coff3 = 10000;  //Color 3 Offset
var soff = 30;      //Scale Offset

function setup() {
    createCanvas(w, h);
    background(50);
    //noStroke();
}

function draw() {
    
    //background(255, 255,255, 0.5);

    var x = noise(xoff) * w;
    var y = noise(yoff) * h;
    var c1 = noise(coff1) * 255;
    var c2 = noise(coff2) * 255;
    var c3 = noise(coff3) * 255;
    var c = color(c1, c2, c3);
    var s = noise(soff) * 50;

    fill(c);


    ellipse(x, y, s);
    
    xoff += 0.01;
    yoff += 0.01;
    coff1 += 0.02;
    coff2 += 0.02;
    coff3 += 0.02;
    soff += 0.01;


    
}