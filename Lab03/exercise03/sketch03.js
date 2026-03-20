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

  drawAShape(myPoints, {x:100,y:0}, 'red');
  drawAShape(myPoints, {x:200,y:0}, 'blue');
  drawAShape(myPoints, {x:300,y:0}, 'green');

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

       

