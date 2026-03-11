function setup(){
  createCanvas(600,400);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  background(220, 30, 10);
}

function draw(){
  let n = random(1);
  let sz = map(n, 0, 1, 0, 60);
  let hue = map(n, 0, 1, 0, 280);
  console.log(hue)
  let x = random(width);
  let y = random(height);
  fill (hue, 80, 95, 60);
  ellipse(x, y, sz);
}

