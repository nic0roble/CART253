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


 // Iris moves with the mouse
  iris.x = constrain(mouseX, eye.x - 80, eye.x + 80);
  iris.y = constrain(mouseY, eye.y - 80, eye.y + 80);

  // Pupil and Iris moves the same
  pupil.x = iris.x;
  pupil.y = iris.y;

  // White part of the eye
  push();
  noStroke();
  fill(255);
  ellipse(eye.x, eye.y, eye.size);
  pop();

  // Iris
  push();
  noStroke();
  fill(iris.fill.r, iris.fill.g, iris.fill.b);
  ellipse(iris.x, iris.y, iris.size);
  pop();

  //Black part of the eye
  push();
  noStroke();
  fill(0);
  ellipse(pupil.x, pupil.y, pupil.size);
  pop();
}

