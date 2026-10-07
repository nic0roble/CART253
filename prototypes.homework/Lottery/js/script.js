/**
 * Title of Project
 * Nicolas Robledo Sanchez

 */

"use strict";

let circle1 = {
  x: 160,
  y: 240,
  size: 70,
  revealed: false,
  prize: false,
  fill: {
    r: 150,
    g: 150,
    b: 150,
  }
};

let circle2 = {
  x: 260,
  y: 240,
  size: 70,
  revealed: false,
  prize: false,
  fill: {
    r: 150,
    g: 150,
    b: 150,
  },
};

let circle3 = {
  x: 360,
  y: 240,
  size: 70,
  revealed: false,
  prize: false,
  fill: {
    r: 150,
    g: 150,
    b: 150,
  },
};

let circle4 = {
  x: 160,
  y: 340,
  size: 70,
  revealed: false,
  prize: false,
  fill: {
    r: 150,
    g: 150,
    b: 150,
  },
};

let circle5 = {
  x: 260,
  y: 340,
  size: 70,
  revealed: false,
  prize: false,
  fill: {
    r: 150,
    g: 150,
    b: 150,
  },
};

let circle6 = {
  x: 360,
  y: 340,
  size: 70,
  revealed: false,
  prize: false,
  fill: {
    r: 150,
    g: 150,
    b: 150,
  },
};

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
  noStroke();
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

  fill(circle2.fill.r, circle2.fill.g, circle2.fill.b);
  ellipse(circle2.x, circle2.y, circle2.size);

  fill(circle3.fill.r, circle3.fill.g, circle3.fill.b);
  ellipse(circle3.x, circle3.y, circle3.size);

  fill(circle4.fill.r, circle4.fill.g, circle4.fill.b);
  ellipse(circle4.x, circle4.y, circle4.size);

  fill(circle5.fill.r, circle5.fill.g, circle5.fill.b);
  ellipse(circle5.x, circle5.y, circle5.size);

  fill(circle6.fill.r, circle6.fill.g, circle6.fill.b);
  ellipse(circle6.x, circle6.y, circle6.size);


// Lines under the circles, like the numbers on the ticket
  fill(0);
  rect(125, 290, 70, 3);
  rect(225, 290, 70, 3);
  rect(325, 290, 70, 3);
  rect(125, 390, 70, 3);
  rect(225, 390, 70, 3);
  rect(325, 390, 70, 3);

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

