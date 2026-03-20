function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 355, 100, 100)
}

function draw() {

  if(mouseIsPressed){
    fill(0);
  }else{
    fill(random(355), 100, 100);
  }

  ellipse(mouseX, mouseY, 80, 80);
}