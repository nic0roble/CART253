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

let flower3 = {
 x: 400, 
 y: 250,
size: 120, 
fill: { 
r: 255, 
g: 100, 
b: 150  
}
}

let flower4 = {
x: 65, 
y: 450, 
size: 100, 
fill: { 
r: 255, 
g: 100, 
b: 150 } 
};

let flower5 = { 
x: 190, 
y: 450, 
size: 100, 
fill: { 
r: 255, 
g: 100, 
b: 150 } 
};

let flower6 = {
x: 310, 
y: 450, 
size: 100, 
fill: { 
r: 255, 
g: 100, 
b: 150 } 
};

let flower7 = {
x: 435, 
y: 450, 
size: 100, 
fill: { 
r: 255, 
g: 100, 
b: 150 } 
};


let time = 0;
let Drooping = 0;

let Drooping2 = 0;
let Drooping3 = 0;
let Drooping4 = 0;
let Drooping5 = 0;
let Drooping6 = 0;
let Drooping7 = 0;

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
  Drooping3 = constrain(time - 330, 0, 80);
  Drooping4 = constrain(time - 410, 0, 60);
  Drooping5 = constrain(time - 490, 0, 60);
  Drooping6 = constrain(time - 570, 0, 60);
  Drooping7 = constrain(time - 650, 0, 60);


  flower.y = 250 + Drooping;
  flower.size = 120 - Drooping;
  flower.fill.r = 255 - Drooping;
  flower.fill.b = 150 - Drooping;

  flower2.y = 250 + Drooping2;
  flower2.size = 120 - Drooping2;
  flower2.fill.r = 255 - Drooping2;
  flower2.fill.b = 150 - Drooping2;

  flower3.y = 250 + Drooping3;
  flower3.size = 120 - Drooping3;
  flower3.fill.r = 255 - Drooping3;
  flower3.fill.b = 150 - Drooping3;

  flower4.y = 450 + Drooping4;
  flower4.size = 100 - Drooping4;
  flower4.fill.r = 255 - Drooping4;
  flower4.fill.b = 150 - Drooping4;

  flower5.y = 450 + Drooping5;
  flower5.size = 100 - Drooping5;
  flower5.fill.r = 255 - Drooping5;
  flower5.fill.b = 150 - Drooping5;

  flower6.y = 450 + Drooping6;
  flower6.size = 100 - Drooping6;
  flower6.fill.r = 255 - Drooping6;
  flower6.fill.b = 150 - Drooping6;

  flower7.y = 450 + Drooping7;
  flower7.size = 100 - Drooping7;
  flower7.fill.r = 255 - Drooping7;
  flower7.fill.b = 150 - Drooping7;


  push();
  stroke(40, 140, 60);
  strokeWeight(10);
  line(flower.x, 500, flower.x, flower.y);
  line(flower2.x, 500, flower2.x, flower2.y);
  line(flower3.x, 500, flower3.x, flower3.y);
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