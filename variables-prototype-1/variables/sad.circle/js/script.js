/**
 * Sad Circle
 * Nicolas Robledo Sanchez
 * 
 * +
 */

"use strict";

/**
 
*/

let sadCircle = {
  // Position and size
  x: 300,
  y: 300,
  size: 450,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225,
  },
};


function setup() {
 createCanvas(600, 600);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

background(245, 245, 220);

 /* Draw sad circle with colors
  */
  push();
  noStroke();
  fill(sadCircle.fill.r, sadCircle.fill.g, sadCircle.fill.b);
  ellipse(sadCircle.x,sadCircle.y, sadCircle.size);
  pop();

sadCircle.fill.r = sadCircle.fill.r-1;
sadCircle.fill.g = sadCircle.fill.g-1;
sadCircle.fill.b = sadCircle.fill.b - 1;

sadCircle.fill.r = constrain(sadCircle.fill.r, 70, 255);
sadCircle.fill.g = constrain(sadCircle.fill.g, 110, 255);
sadCircle.fill.b = constrain(sadCircle.fill.b, 190, 255);

}