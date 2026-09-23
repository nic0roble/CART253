/**
 * weird
 * Nicolas Robledo Sanchez
 * 
 * This is my 3rd drawing
 */

"use strict";

/**
*/

let cloudX;
let cloudY;
let cloudSize;

let cloud1X;
let cloud1Y;
let cloud1Size;

let cloud2X;
let cloud2Y;
let cloud2Size;

function setup() {

createCanvas(500, 750);
background(28, 52, 84);   
setCloudPosition();

}


}
/**
*/
function draw() {

//call the function - run the code
Clouds();

//moon
 push();
 fill(240, 240, 210);
 stroke(240, 240, 210);
  circle(410, 100, 190);

  //moons cut
fill(28, 52, 84);
stroke(28, 52, 84);
circle(430, 90, 200);
    pop();
}

function Clouds(){
push();

  fill(255, 255, 255, 150);
  stroke(255, 255, 255);

 //Cloud 1
ellipse(cloudX, cloudY, 90, 30);

 // Cloud 2
ellipse(cloud1X, cloud1Y, 100, 60);

 // Cloud 3
ellipse(cloud2X, cloud2Y, 110, 90);



}

function mousePressed() {
    setCloudPosition();
}
