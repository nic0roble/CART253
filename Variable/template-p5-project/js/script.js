


/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

//mr F shaking
 let a = 20;
  let b = 80;
let variation = 0;


// bird
let bird = {
 birdX:30,
 birdY:50,
 birdSize:10,

  fill: {
    r: 255,
    g: 255,
    b: 255,
  }

}

// Our friend Mr. Furious

let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225,
  }

  
  
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);

}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(160, 180, 200);


  
  /* Draw Mr. Furious as a coloured circle
  */
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
push();
fill(bird.fill.r,bird.fill.g,bird.fill.b);

ellipse(bird.birdX,bird.birdY,bird.birdSize);
bird.birdX = constrain(bird.birdX,0,width-30);
bird.birdX = bird.birdX+1;

pop();

 mrFurious.fill.b = mrFurious.fill.b-1
 mrFurious.fill.g = mrFurious.fill.g-1;

mrFurious.x = random(200,200 + variation); 
mrFurious.y = random(200,200); 

variation = variation+.02

}


