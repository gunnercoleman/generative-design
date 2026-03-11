let drops = [];

function setup(){
  createCanvas(600,400);
    for(let i = 0; i < 125; i++){
      drops.push({
        x: random (width),
        y: random (height),
        speed: random(2, 30),
        len: random(5, 10)
      });
    }
}

function draw(){
  background(10,20,40,30);
  stroke(150, 210, 255, 180);

    for(let d of drops){
      line (d.x, d.y, d.x, d.y + d.len);
      d.y += d.speed;
        if(d.y > height + d.len){
          d.y = 0;
          d.x = random(0, width);
        }
    }
}