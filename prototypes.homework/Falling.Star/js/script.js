/**
 * Falling Star
 * Nicolas Robledo Sanchez
 * 

 */

"use strict";

/**
*/

let star = {
  x: 70,
  y: 0,
  size: 60,
  speed: 2,
  fill: {
    r: 255,
    g: 230,
    b: 100,
  },
};

let star2 = {
  x: 250,
  y: -150,
  size: 60,
  speed: 3,
  fill: {
    r: 255,
    g: 230,
    b: 100,
  },
};

let star3 = {
  x: 420,
  y: -300,
  size: 60,
  speed: 2,
  fill: {
    r: 255,
    g: 230,
    b: 100,
  },
};

let star4 = {
  x: 160,
  y: -450,
  size: 60,
  speed: 3,
  fill: {
    r: 255,
    g: 230,
    b: 100,
  },
};

let star5 = {
  x: 340,
  y: -600,
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
let caughtStar2 = false;
let caughtStar3 = false;
let caughtStar4 = false;
let caughtStar5 = false;


function setup() {
  createCanvas(500, 700);
}

/**
 */
function draw() {
  background(sky.r, sky.g, sky.b);

  // the stars
  push();
  noStroke();
  fill(star.fill.r, star.fill.g, star.fill.b);
  ellipse(star.x, star.y, star.size);
  
  noStroke();
  fill(star2.fill.r, star2.fill.g, star2.fill.b);
  ellipse(star2.x, star2.y, star2.size);
 
  noStroke();
  fill(star3.fill.r, star3.fill.g, star3.fill.b);
  ellipse(star3.x, star3.y, star3.size);
  
  noStroke();
  fill(star4.fill.r, star4.fill.g, star4.fill.b);
  ellipse(star4.x, star4.y, star4.size);
  

  
  noStroke();
  fill(star5.fill.r, star5.fill.g, star5.fill.b);
  ellipse(star5.x, star5.y, star5.size);

  pop();


  // Stars fall
  if (caughtStar === false && star.y < height) {
    star.y = star.y + star.speed;
  }
  if (caughtStar2 === false && star2.y < height) {
    star2.y = star2.y + star2.speed;
  }
  if (caughtStar3 === false && star3.y < height) {
    star3.y = star3.y + star3.speed;
  }
  if (caughtStar4 === false && star4.y < height) {
    star4.y = star4.y + star4.speed;
  }
  if (caughtStar5 === false && star5.y < height) {
    star5.y = star5.y + star5.speed;
  


  let d = dist(mouseX, mouseY, star.x, star.y);

  if (d < star.size / 2 && caughtStar === false && star.y < height) {
    caughtStar = true;
    star.fill.r = 255;
    star.fill.g = 255;
    star.fill.b = 255;
    star.size = 120;
  }

  let d2 = dist(mouseX, mouseY, star2.x, star2.y);

  if (d2 < star2.size / 2 && caughtStar2 === false && star2.y < height) {
    caughtStar2 = true;
    star2.fill.r = 255;
    star2.fill.g = 255;
    star2.fill.b = 255;
    star2.size = 120;
  }

  let d3 = dist(mouseX, mouseY, star3.x, star3.y);

  if (d3 < star3.size / 2 && caughtStar3 === false && star3.y < height) {
    caughtStar3 = true;
    star3.fill.r = 255;
    star3.fill.g = 255;
    star3.fill.b = 255;
    star3.size = 120;
  }

  let d4 = dist(mouseX, mouseY, star4.x, star4.y);

  if (d4 < star4.size / 2 && caughtStar4 === false && star4.y < height) {
    caughtStar4 = true;
    star4.fill.r = 255;
    star4.fill.g = 255;
    star4.fill.b = 255;
    star4.size = 120;
  }

  let d5 = dist(mouseX, mouseY, star5.x, star5.y);

  if (d5 < star5.size / 2 && caughtStar5 === false && star5.y < height) {
    caughtStar5 = true;
    star5.fill.r = 255;
    star5.fill.g = 255;
    star5.fill.b = 255;
    star5.size = 120;
  }

  // Stars that touch the ground
  if (star.y >= height && caughtStar === false) {
    star.fill.r = 90;
    star.fill.g = 90;
    star.fill.b = 90;
    sky.r = 5;
    sky.g = 5;
    sky.b = 20;
  }
  if (star2.y >= height && caughtStar2 === false) {
    star2.fill.r = 90;
    star2.fill.g = 90;
    star2.fill.b = 90;
    sky.r = 5;
    sky.g = 5;
    sky.b = 20;
  }
  if (star3.y >= height && caughtStar3 === false) {
    star3.fill.r = 90;
    star3.fill.g = 90;
    star3.fill.b = 90;
    sky.r = 5;
    sky.g = 5;
    sky.b = 20;
  }
  if (star4.y >= height && caughtStar4 === false) {
    star4.fill.r = 90;
    star4.fill.g = 90;
    star4.fill.b = 90;
    sky.r = 5;
    sky.g = 5;
    sky.b = 20;
  }
  if (star5.y >= height && caughtStar5 === false) {
    star5.fill.r = 90;
    star5.fill.g = 90;
    star5.fill.b = 90;
    sky.r = 5;
    sky.g = 5;
    sky.b = 20;
   
}
 }
}