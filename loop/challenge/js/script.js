/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";
let startColor = undefined;
let endColor = undefined;
let gradiantIndex = undefined;
 let LineColor = undefined;
 let x= undefined;
  let y= undefined;
  let i = undefined;

/**
 * Creates the canvas
 */
async function setup() {
    createCanvas(500, 500);
startColor = color(255,0,0);
endColor = color(0,255,0);

colorMode(HSB, 360, 100, 100);
for(let x=0; x<width; x +=1){
let h = map(x, 0, width, 0, 360);
let s = 100;
let b = 100;
stroke(h, s, b);
line(x, 0, x, height);

}
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
   
gradiantIndex = 0;
x=0;
y=0;
while(gradiantIndex<1){
    let  LineColor= lerpColor(startColor,endColor,gradiantIndex);
stroke(LineColor);
line(x, 0, x, 515);
line(0, y, 515, y);
gradiantIndex +=.1;
x +=50;
y +=50;
}
 

}


    
//     stroke(0);
//     line(0, 0, 0, height);
    
//     stroke(25);
//     line(50, 0, 50, height);
    
//     stroke(50);
//     line(100, 0, 100, height);
    
//     stroke(75);
//     line(150, 0, 150, height);
    
//     stroke(100);
//     line(200, 0, 200, height);
    
//     stroke(125);
//     line(250, 0, 250, height);
    
//     stroke(150);
//     line(300, 0, 300, height);
    
//     stroke(175);
//     line(350, 0, 350, height);
    
//     stroke(200);
//     line(400, 0, 400, height);
    
//     stroke(225);
//     line(450, 0, 450, height);
    
//     stroke(250);
//     line(500, 0, 500, height);
// }


