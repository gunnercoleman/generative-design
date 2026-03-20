let incX = 125;
let stepX = 15;
let lineStroke = prompt("Select a line thickness between 1 - 20!");

function setup(){
  createCanvas(400, 400);
  frameRate(10);
}

function draw(){
  strokeWeight(lineStroke);
  stroke(0, random(255), 255);
  line(incX, 0, random(width), height);
  incX = (incX + stepX) % width; 

  // if(incX % 2){
  //   stroke(0, 255, 255);
  // }else{
  //   stroke(0, 0, 255);
  // };

}