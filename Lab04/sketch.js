let recColour = 0;

function setup(){
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER); 
}

function draw(){
  background(0);

  if(mouseX < width/2 && mouseY < height/2){
    recColour = 25;
  } else if(mouseX > width/2 && mouseY < height/2){
    recColour = 100;
  } else if(mouseX < width/2 && mouseY > height/2){
    recColour = 200;
  } else {
    recColour = 300;
  }

  push();
  translate(width/2, height/2);

  fill(recColour, 100, 100);
  rect(0, 0, 400, 400);

  pop();
}
