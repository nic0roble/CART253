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

   // Ears
  push();
  noStroke();
  fill(cat.fill.r, cat.fill.g, cat.fill.b);
  triangle(cat.x - 90, cat.y - 40, cat.x - 40, cat.y - 130, cat.x - 10, cat.y - 80);
  triangle(cat.x + 90, cat.y - 40, cat.x + 40, cat.y - 130, cat.x + 10, cat.y - 80);
  pop();

    // Nose 
  push();
  noStroke();
  fill(255, 120, 140);
  ellipse(cat.x, cat.y + 20, 16);
  pop();
  
// Mouth
  push();
  strokeWeight(3);
fill("#4d3512");
  line(cat.x - 30, cat.y + 45, cat.x, cat.y + 30);
  line(cat.x, cat.y + 30, cat.x + 30, cat.y + 45);
  pop();

}