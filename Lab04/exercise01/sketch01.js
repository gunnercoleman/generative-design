//To do:
// Duplicate this sketch. Save as: GenArt_customShape_rotation
//1. center the 3rd and 4th shape by changing their x and y values.
//2. Add another array of points that define the custom shape you created in the last week's exercise.
//3. Add this to the right of the fourth shape and animate it.

let rotation = 0;
let offset; 
let showReg = true;
// ============================================
// LESSON DEMO: Rotating custom shapes
// ============================================

// ============================================
// DATA: This shape has a registration point at 0,0
// or top left
// ============================================
let myPoints = [
  { x: 0, y: 0 },
  { x: 60, y: 0 },
  { x: 60, y: 20 },
  { x: 20, y: 20 },
  { x: 20, y: 40 },
  { x: 60, y: 40 },
  { x: 60, y: 60 },
  { x: 0, y: 60 },
];

// ============================================
// DATA: This shape has a registration point at the center
// points are shifted 30px to left and top
// ============================================

let myPoints_centered = [
  { x: -30, y: -30 },
  { x: 30, y: -30 },
  { x: 30, y: -10 },
  { x: -10, y: -10 },
  { x: -10, y: 10 },
  { x: 30, y: 10 },
  { x: 30, y: 30 },
  { x: -30, y: 30 },
];


let myCustomShape = [
  { x: 0, y: 0 },
  { x: 10, y: 10 },
  { x: 40, y: 10 },
  { x: 40, y: 10 },
  { x: 50, y: 20 },
  { x: 60, y: 10 },
  { x: 90, y: 10 },
  { x: 90, y: 0 },
  { x: 100, y: 0 },
  { x: 100, y: 10 },
  { x: 90, y: 10 },
  { x: 90, y: 40 },
  { x: 80, y: 50 },
  { x: 50, y: 50 },
  { x: 40, y: 60 },
  { x: 30, y: 60 },
  { x: 30, y: 50 },
  { x: 0, y: 50 }
];

let mystarShape = [
  { x: 50, y: 10 }, // top point
  { x: 90, y: 30 }, // right point
  { x: 70, y: 90 }, // bottom-right
  { x: 30, y: 90 }, // bottom-left
  { x: 10, y: 30 }, // left point
];

let myLab03Custom = [
  {x: 20, y:20},
  {x: 80, y:20},
  {x: 80, y:40},
  {x: 40, y:40},
  {x: 40, y:60},
  {x: 80, y:60},
  {x: 80, y:80},
  {x: 20, y:80},
  {x: 80, y:20}
];

// ============================================
// FUNCTION: Draws a shape from points array
// also shows a registration point
// ============================================

function drawAShape(thePoints, offset, fillColor) {
  noFill();
  //registration point
  if(showReg) {
    fill('red');
    ellipse(0,0,5);
    noFill();
  }
  stroke(fillColor);
  beginShape();
  // Loop through all points in the array
  for (let i = 0; i < thePoints.length; i++) {
    let point = thePoints[i];
    vertex(point.x + offset.x, point.y + offset.y);
  }
  endShape(CLOSE);
}

// ============================================
// HELPER: Generate random color
// ============================================
function randomColor() {
  let r = int(random(255));
  let g = int(random(255));
  let b = int(random(255));
  return "rgb(" + r + "," + g + "," + b + ")";
}

// ============================================
// SETUP: Initialize canvas and draw
// ============================================
function setup() {
  createCanvas(900, 500);
  background(200);
  ///noLoop();
  //noStroke();

  //Demo 4: Grid of shapes
  //outer loop
  /*for (let row = 0; row < 2; row++) {
    //inner loop
    for (let col = 0; col < 4; col++) {
      //calculating offset
      let offset = {
        x: col * 65 + 400,
        y: row * 65,
      };

      drawAShape(myPoints, offset, randomColor());
    }*/
  
  }

  


// Example: Animated shapes 

 function draw() {
   background(200);
   noStroke();
   fill('rgb(127,214,98)');

   push();
   translate(100,200);
     offset = {x: 0, y: 0};
    rotate(rotation);
    drawAShape(myPoints_centered, offset, 'blue');
     
   pop();
   push();
     translate(200,200);
     rotate(-rotation);
     drawAShape(myPoints_centered, offset, 'blue');
   pop();
   
   push();
     translate(300,200);
      offset = {x: -50, y: -30};
     rotate(rotation);
     drawAShape(myCustomShape, offset, '#009688');
   pop();
   
  push();
     translate(400,200);
      offset = {x: -50, y: -50};
     rotate(-rotation);
     drawAShape(mystarShape, offset, '#FFEB3B');
   pop();

  push();
     translate(500,200);
      offset = {x: -50, y: -50};
     rotate(-rotation);
     drawAShape(myLab03Custom, offset, '#FFEB3B');
  pop();



   rotation += 0.03;
 }

// ============================================
// CONCEPT REVIEW
// ============================================

/* 
ARRAYS: Store multiple values
  let colors = ['red', 'green', 'blue'];

OBJECTS: Group related data
  let point = {x: 20, y: 30};

ARRAYS OF OBJECTS: Structured lists of data
  let myPoints = [{x: 20, y: 20}, {x: 80, y: 20}];

FOR LOOPS: Repeat code
  for (let i = 0; i < array.length; i++) { ... }

beginShape/endShape: Draw custom shapes
  beginShape();
    vertex(x, y);
  endShape(CLOSE);

FUNCTIONS: Reusable code blocks
  function drawAShape(thePoints, offset) { ... }
*/

