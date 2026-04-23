//Time variable that increments each frame to animate the waves
let t = 0;

//Sliders to control the red, green, and blue color values of the stroke
let rSlider, gSlider, bSlider;


function setup() {

  createCanvas(windowWidth, windowHeight);

  //Create three sliders for controlling RGB color values (0-255 range)

  rSlider = createSlider(0, 255, 255);
  gSlider = createSlider(0, 255, 255);
  bSlider = createSlider(0, 255, 255);

  //Position the sliders near the top-left corner
  rSlider.position(20, 20);
  gSlider.position(20, 50);
  bSlider.position(20, 80);
}


function draw() {
  //Creates a fade trail effect
  background(10, 10, 20, 50);
  noFill();

  //Set the stroke color using the slider values
  stroke(rSlider.value(), gSlider.value(), bSlider.value(), 220);


  //mouseX controls the scale / detail, left side = smooth, right side = detailed
  //mouseY controls the wave amplitude, top = small waves, bottom = large waves
  let scale = map(mouseX, 0, width, 0.01, 0.2);   
  let amp   = map(mouseY, 0, height, 20, 200);    

  //Draw horizontal wavy lines across the canvas
  //y creates spacing between lines
  //yoff is the Perlin noise input that changes over time 
  for (let y = 0, yoff = t; y < height; y += 15, yoff += 0.1) {
    beginShape();

    //Draw each line point by point using Perlin noise
    //x increments by 10 pixels (horizontal resolution)
    //xoff increments by scale (controls how smooth or detailed the waves are)
    for (let x = 0, xoff = 0; x < width; x += 10, xoff += scale) {
      //Get a noise value (0-1) based on xoff and yoff coordinates
      let n = noise(xoff, yoff);
      
      //Place vertex at x position, with y offset by the noise value
      //Multiply noise by amplitude and subtract half amplitude to center the waves
      vertex(x, y + (n * amp - amp / 2));
    }

    endShape();
  }

  //Moves through perlin noise field, animating the waves continuously
  t += 0.01;
}