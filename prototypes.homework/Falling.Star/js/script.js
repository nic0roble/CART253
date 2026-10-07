/**
 * Falling Star
 * Nicolas Robledo Sanchez
 * 

 */

"use strict";

/**
*/

let star = {
  x: 300,
  y: 0,
  size: 60,
  speed: 2,
  fill: {
    r: 255,
    g: 230,
    b: 100,
  },
};

let sky = {
  r: 40,
  g: 60,
  b: 120,
};

let caughtStar = false;

function setup() {
createCanvas(500, 700);
}


/**
*/
function draw() {
 background(sky.r, sky.g, sky.b);

  push();
  noStroke();
  fill(star.fill.r, star.fill.g, star.fill.b);
  ellipse(star.x, star.y, star.size);
  pop();

 if (caughtStar === false && star.y < height) {
    star.y = star.y + star.speed;
}

 let d = dist(mouseX, mouseY, star.x, star.y);

   if (d < star.size / 2 && caught === false && star.y < height) {
    caught = true;
    star.fill.r = 255;
    star.fill.g = 255;
    star.fill.b = 255;
    star.size = 120;
     }

    


}