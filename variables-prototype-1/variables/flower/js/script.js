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