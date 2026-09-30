/**
 * Watching Eye
 * Nicolas Robledo Sanchez
 */

"use strict";

/**
*/

let eye = {
  x: 300,
  y: 300,
  size: 300,
};

let pupil = {
  x: 300,
  y: 300,
  size: 70,

};

let iris = {
  x: 300,
  y: 300,
  size: 120,
  fill: {
    r: 111,
    g: 78,
    b: 55,
  },
};

function setup() {
 createCanvas(500, 700);
}


/**
*/
function draw() {
background(245, 245, 220);




  // White part of the eye
  push();
  noStroke();
  fill(255);
  ellipse(eye.x, eye.y, eye.size);
  pop();

 

}

