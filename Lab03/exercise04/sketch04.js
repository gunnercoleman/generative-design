let myPoints = [
  {x: 20, y:20},
  {x: 80, y:20},
  {x: 80, y:40},
  {x: 40, y:40},
  {x: 40, y:60},
  {x: 80, y:60},
  {x: 80, y:80},
  {x: 20, y:80}
];

function setup(){
  createCanvas(600,600);
  colorMode(HSB, 360, 100, 100, 100);
  background(220, 30, 10);
}

function draw(){

  for(let i = 0; i < 4; i ++){
    for (let j = 0; j < 4; j++){
      let offset = {
        x: j * 70,
        y: i * 70
      };
      drawAShape(myPoints, offset, 'red');
    }
  }

}

function drawAShape(myPoints, offset, fillColour){

  fill(fillColour)

  beginShape();
    for(let j = 0; j < myPoints.length; j++){
      let point = myPoints[j];
      vertex(point.x + offset.x, point.y + offset.y);
    }
  endShape(CLOSE);  

}

       

