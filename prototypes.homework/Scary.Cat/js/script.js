/**
 * scary Cat
 * Nicolas Robledo Sanchez
 * 
 
 */

"use strict";

/**
*/

let cat = {
  x: 250,
  y: 400,
  size: 200,
  fill: {
    r: 255,
    g: 200,
    b: 120,
  },
};

let eyesOpen = true;

function setup() {
 createCanvas(500, 700);
}


/**
*/
function draw() {
 background(245, 245, 220);

  // Head
  push();
  noStroke();
  fill(cat.fill.r, cat.fill.g, cat.fill.b);
  ellipse(cat.x, cat.y, cat.size);
  pop();
  
}