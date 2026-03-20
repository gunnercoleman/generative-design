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

  fill ('rgb(214, 98, 162)');

  let shapeOffsetX = 100;

  for (let i = 0; i < 3; i ++){

    translate (shapeOffsetX, 0)

    beginShape();
      for(let j = 0; j < myPoints.length; j++){
        let point = myPoints[j];
        vertex(point.x, point.y);
      }
    endShape(CLOSE);  
  }


}

       

