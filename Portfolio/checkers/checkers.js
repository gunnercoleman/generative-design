let gridSize = 100;
let cellSize = 8;
let canvasWidth = gridSize * cellSize;
let canvasHeight = cellSize * gridSize;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(255);

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {

      let value = (x + y) % 2;

      if (value === 0) {
        fill(0);   
      } else {
        fill(255);
      }

      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}