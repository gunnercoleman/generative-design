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
  let offset = {x: 0, y: 100};
  beginShape();
    for(let i = 0; i < myPoints.length; i++){
      let point = myPoints[i];
      vertex(point.x + offset.x, point.y + offset.y);
    }
  endShape(CLOSE);  

}

       

