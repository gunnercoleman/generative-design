let myPoints = [
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

let myColours = [
  'red',
  'green',
  'blue',
  'yellow',
  'orange',
  'purple',
  'pink',
  'cyan',
  'white'
];

function setup(){
  createCanvas(600,600);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(5);
  angleMode(DEGREES);
}

function draw(){

background(220, 30, 10);

for(let i = 0; i < 8; i ++){
  for(let j = 0; j < 8; j ++){
    let offset = {
      x: j * 70,
      y: i * 70
    };
    
    drawAShape(myPoints, offset, myColours);
  } 
}

       
}

function drawAShape(myPoints, offset, myColours){

    fill(random(myColours));

    beginShape();

      for(let i = 0; i < myPoints.length; i ++){
        let point = myPoints[i];
        vertex(point.x + offset.x, point.y + offset.y);
      }

    endShape(CLOSE);  

}

