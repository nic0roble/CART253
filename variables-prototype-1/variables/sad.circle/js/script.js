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

let time = 0;
let Circletime = 0;
let Eyebrows = 0;

function setup() {
 createCanvas(600, 600);

}


/**
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

//Time stops for a few seconds 
time = time + 1;
Circletime = time - 170;
Circletime = constrain(Circletime, 0, 200);

//Color and Size changing by time
sadCircle.fill.r = 255 - Circletime;
sadCircle.fill.g = 225 - Circletime;
sadCircle.fill.b = 225 - Circletime;
sadCircle.size = 450 - Circletime;

//Color start to decrease 
sadCircle.fill.r = sadCircle.fill.r-1;
sadCircle.fill.g = sadCircle.fill.g-1;
sadCircle.fill.b = sadCircle.fill.b - 1;

//Stop the color at the rgb that i want

sadCircle.fill.r = constrain(sadCircle.fill.r, 70, 255);
sadCircle.fill.g = constrain(sadCircle.fill.g, 110, 255);
sadCircle.fill.b = constrain(sadCircle.fill.b, 190, 255);

 // Eyes; white part, pupils and twinkle
  push();
  noStroke();
  fill(255);
  ellipse(sadCircle.x - 60, sadCircle.y - 40, 50);
  ellipse(sadCircle.x + 60, sadCircle.y - 40, 50);
  fill(0);
  ellipse(sadCircle.x - 60, sadCircle.y - 40, 35);
  ellipse(sadCircle.x + 60, sadCircle.y - 40, 35);
    fill(255);
  ellipse(sadCircle.x - 70, sadCircle.y - 45, 10);
  ellipse(sadCircle.x + 50, sadCircle.y - 45, 10);
pop();

// Eyebrows 
push();
 Eyebrows = constrain(Circletime - 125, 0, 15);
stroke(0);
strokeWeight(15);
// Left eyebrow
line(sadCircle.x - 90, sadCircle.y - 70 + Eyebrows, sadCircle.x - 30, sadCircle.y - 85 + Eyebrows);
// Right eyebrow
line(sadCircle.x + 30, sadCircle.y - 85 + Eyebrows, sadCircle.x + 90, sadCircle.y - 70 + Eyebrows);
pop();


}