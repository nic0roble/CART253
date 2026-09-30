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

let flower2 = {
  x: 200,
  y: 150,
  size: 120,
  fill: {
    r: 255,
    g: 100,
    b: 150,
  },
};



let time = 0;
let Drooping = 0;

let Drooping2 = 0;

function setup() {
createCanvas(500, 700);

}

/**

*/
function draw() {
background(200, 230, 255);

 time = time + 1;
  Drooping = constrain(time - 170, 0, 80);
  Drooping2 = constrain(time - 250, 0, 80);

  flower.y = 250 + Drooping;
  flower.size = 120 - Drooping;
  flower.fill.r = 255 - Drooping;
  flower.fill.b = 150 - Drooping;

  flower2.y = 250 + Drooping2;
  flower2.size = 120 - Drooping2;
  flower2.fill.r = 255 - Drooping2;
  flower2.fill.b = 150 - Drooping2;

  push();
  stroke(40, 140, 60);
  strokeWeight(10);
  line(flower.x, 500, flower.x, flower.y);
  line(flower2.x, 500, flower2.x, flower2.y);
  pop();

  // Flower head
  push();
  noStroke();
  fill(flower.fill.r, flower.fill.g, flower.fill.b);
  ellipse(flower.x, flower.y, flower.size);
  pop();

  // Flower head
  push();
  noStroke();
  fill(flower2.fill.r, flower2.fill.g, flower2.fill.b);
  ellipse(flower2.x, flower2.y, flower2.size);
  pop();
}