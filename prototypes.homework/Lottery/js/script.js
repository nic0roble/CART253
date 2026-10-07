/**
 * Title of Project
 * Nicolas Robledo Sanchez

 */

"use strict";

let circle1 = {
  x: 300,
  y: 300,
  size: 100,
    revealed: false,
  fill: {
    r: 150,
    g: 150,
    b: 150,
     }


}
function setup() {
  createCanvas(600, 700);
}



function draw() {
background("#4caf7a");



//ticket
 push();
  noStroke();
   fill("#fdf6c8");
  rect(100, 60, 400, 560);
  pop();

    // Blue strip on the right
  fill("#5bbad0");
  rect(430, 60, 70, 560);

    // Small white marks on the strip
  fill(255);
  rect(455, 120, 20, 8);
  rect(455, 220, 20, 8);
  rect(455, 320, 20, 8);
  rect(455, 420, 20, 8);
  rect(455, 520, 20, 8);



 // Circle
  push();
  noStroke();
  fill(circle1.fill.r, circle1.fill.g, circle1.fill.b);
  ellipse(circle1.x, circle1.y, circle1.size);
  pop();

}

function mousePressed() {
  let d = dist(mouseX, mouseY, circle1.x, circle1.y);

  if (d < circle1.size / 2 && circle1.revealed === false) {
    circle1.revealed = true;

    if (random(0, 1) < 0.1) {
      circle1.fill.r = 255;
      circle1.fill.g = 200;
      circle1.fill.b = 0;
    } else {
      circle1.fill.r = 200;
      circle1.fill.g = 50;
      circle1.fill.b = 60;
    }
  }
}

