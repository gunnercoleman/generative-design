let incX = 100;
let stepX = 25;

function setup(){
  createCanvas(400, 400);
  frameRate(10);
}

function draw(){
  strokeWeight(10);
  line(incX, 0, incX, height);
  incX = (incX + stepX) % width; 

  if(incX % 2){
    stroke(0, 255, 255);
  }else{
    stroke(0, 0, 255);
  };

}