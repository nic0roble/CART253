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

 cat.x = constrain(cat.x, 120, 380);
  cat.y = constrain(cat.y, 150, 600);

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

  // Eyes
  if (eyesOpen === true) {
    push();
    noStroke();
    fill(255);
    ellipse(cat.x - 40, cat.y - 15, 40);
    ellipse(cat.x + 40, cat.y - 15, 40);
    fill(0);
    ellipse(cat.x - 40, cat.y - 7, 25);
    ellipse(cat.x + 40, cat.y - 7, 25);
    pop();
  } else {
    push();
    stroke(0);
    strokeWeight(5);
    line(cat.x - 60, cat.y - 15, cat.x - 20, cat.y - 15);
    line(cat.x + 20, cat.y - 15, cat.x + 60, cat.y - 15);
    pop();
  }

   let d = dist(mouseX, mouseY, cat.x, cat.y);

   if (d < 250) {
    eyesOpen = false;

     // horizontal movement
    if (mouseX < cat.x) {
      cat.x = cat.x + 4;
    } else {
      cat.x = cat.x - 4;
    }

    // vertical movement
    if (mouseY < cat.y) {
      cat.y = cat.y + 4;
    } else {
      cat.y = cat.y - 4;
    }
  } else {
    eyesOpen = true;
  }

}
