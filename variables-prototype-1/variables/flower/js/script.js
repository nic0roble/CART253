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
x: 50,
y: 600,
size: 30,
fill: {
r: 255,
g: 100,
b: 150 }
};

let flower2 = {
x: 140,
y: 600,
size: 30,
fill: {
r: 255,
g: 220,
b: 60 }
};

let flower3 = {
x: 230,
y: 600,
size: 30,
fill: {
r: 180,
g: 100,
b: 220 }
};

let flower4 = {
x: 320,
y: 600,
size: 30,
fill: {
r: 255,
g: 150,
b: 50 }
};

let flower5 = {
x: 410,
y: 600,
size: 30,
fill: {
r: 230,
g: 50,
b: 60 }
};

let flower6 = {
x: 95,
y: 600,
size: 30,
fill: {
r: 250,
g: 250,
b: 250 }
};

let flower7 = {
x: 370,
y: 600,
size: 30,
fill: {
r: 100,
g: 120,
b: 255 }
};

let time = 0;
let Growing = 0;
let Growing2 = 0;
let Growing3 = 0;
let Growing4 = 0;
let Growing5 = 0;
let Growing6 = 0;
let Growing7 = 0;

function setup() {
createCanvas(500, 700);

}

/**

*/
function draw() {
background(200, 230, 255);

 time = time + 1;
  Growing = constrain(time - 60, 0, 200);
  Growing2 = constrain(time - 120, 0, 350);
  Growing3 = constrain(time - 180, 0, 150);
  Growing4 = constrain(time - 240, 0, 300);
  Growing5 = constrain(time - 300, 0, 250);
  Growing6 = constrain(time - 360, 0, 400);
  Growing7 = constrain(time - 420, 0, 180);


  flower.y = 600 - Growing;
  flower.size = 30 + constrain(Growing, 0, 70);

  flower2.y = 600 - Growing2;
  flower2.size = 30 + constrain(Growing2, 0, 70);

  flower3.y = 600 - Growing3;
  flower3.size = 30 + constrain(Growing3, 0, 70);

  flower4.y = 600 - Growing4;
  flower4.size = 30 + constrain(Growing4, 0, 70);

  flower5.y = 600 - Growing5;
  flower5.size = 30 + constrain(Growing5, 0, 70);

  flower6.y = 600 - Growing6;
  flower6.size = 30 + constrain(Growing6, 0, 70);

  flower7.y = 600 - Growing7;
  flower7.size = 30 + constrain(Growing7, 0, 70);

 push();
  noStroke();
  fill(60, 160, 70);
  rect(0, 650, 500, 50);
  fill(90, 190, 90);
  rect(0, 670, 500, 30);
  fill(40, 130, 60);
  rect(0, 685, 500, 15);
  pop();
  

  push();
  stroke(40, 140, 60);
  strokeWeight(10);
  line(flower.x, 650, flower.x, flower.y);
  line(flower2.x, 650, flower2.x, flower2.y);
  line(flower3.x, 650, flower3.x, flower3.y);
  line(flower4.x, 650, flower4.x, flower4.y);
  line(flower5.x, 650, flower5.x, flower5.y);
  line(flower6.x, 650, flower6.x, flower6.y);
  line(flower7.x, 650, flower7.x, flower7.y);
  pop();

  // Flower head
  push();
  noStroke();
  fill(flower.fill.r, flower.fill.g, flower.fill.b);
  ellipse(flower.x, flower.y, flower.size);
  pop();

  // Flower2 head
  push();
  noStroke();
  fill(flower2.fill.r, flower2.fill.g, flower2.fill.b);
  ellipse(flower2.x, flower2.y, flower2.size);
  pop();

   // Flower3 head
  push();
  noStroke();
  fill(flower3.fill.r, flower3.fill.g, flower3.fill.b);
  ellipse(flower3.x, flower3.y, flower3.size);
  pop();

  // Flower4 head
  push();
  noStroke();
  fill(flower4.fill.r, flower4.fill.g, flower4.fill.b);
  ellipse(flower4.x, flower4.y, flower4.size);
  pop();

  // Flower5 head
  push();
  noStroke();
  fill(flower5.fill.r, flower5.fill.g, flower5.fill.b);
  ellipse(flower5.x, flower5.y, flower5.size);
  pop();

  // Flower6 head
  push();
  noStroke();
  fill(flower6.fill.r, flower6.fill.g, flower6.fill.b);
  ellipse(flower6.x, flower6.y, flower6.size);
  pop();

  // Flower7 head
  push();
  noStroke();
  fill(flower7.fill.r, flower7.fill.g, flower7.fill.b);
  ellipse(flower7.x, flower7.y, flower7.size);
  pop();

 
}