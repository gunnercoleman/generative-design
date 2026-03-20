let rotation = 0;

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

function setup(){
  createCanvas(600,600);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
}

function draw(){

background(220, 30, 10);

for(let i = 0; i < 6; i ++){
  for(let j = 0; j < 6; j ++){
    push();
      translate (j * 100 + 50, i * 100 + 50)
      rotate(rotation);
      drawAShape(myPoints);
    pop();
    

  } 
}

rotation += 2;
       
}

function drawAShape(myPoints){

    fill(360, 100, 100);

    beginShape();

      for(let i = 0; i < myPoints.length; i ++){
        let point = myPoints[i];
        vertex(point.x - 50, point.y - 50);
      }

    endShape(CLOSE);  

};