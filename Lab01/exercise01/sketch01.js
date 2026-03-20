let incX = 100;
let stepX = 15;

function setup(){
  createCanvas(400, 400);
  frameRate(10);
}

function draw(){
  strokeWeight(10);
  stroke(0, random(255), 255);
  line(incX, 0, random(width), height);
  incX = (incX + stepX) % width; 
}