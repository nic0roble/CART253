/**
 * Drooping Flower
 * Nicolas Robledo Sanchez
 * 
 * this is my third variable challenge
 */

"use strict";

/**
 
*/

let flower = {
  x: 300,
  y: 250,
  size: 120,
  fill: {
    r: 255,
    g: 100,
    b: 150,
  },
};




let time = 0;
let Drooping = 0;


function setup() {
createCanvas(500, 700);

}

/**

*/
function draw() {
background(200, 230, 255);

time = time +1; 
Drooping = time - 170;
Drooping = constrain(Drooping, 0, 80);

 flower.y = 250 + Drooping;
  flower.size = 120 - Drooping;
  flower.fill.r = 255 - Drooping;
  flower.fill.b = 150 - Drooping;

  // Flower head 
  push();
  fill(flower.fill.r, flower.fill.g, flower.fill.b);
  ellipse(flower.x, flower.y, flower.size);
  pop();





}