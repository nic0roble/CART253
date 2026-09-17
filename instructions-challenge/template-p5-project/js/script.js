/**
 * Drawing
 * Nicolas Robledo S.
 * 
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500,500);
background(173, 216, 230);

//save the current change
push();

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
//call the function - run the code
grass();
drawRoof();
draw_House_Body();


//ellipse red
fill(255, 255, 0);
stroke(255,255,0);
ellipse(370,80,100,100);

fill(255, 127, 0);
stroke(255, 127, 0);
ellipse(370,80,90,90);

fill(255, 255, 0);
stroke(255,255,0);
ellipse(370,80,80,80);

fill(255, 127, 0);
stroke(255, 127, 0);
ellipse(370,80,70,70);

fill(255, 255, 0);
stroke(255,255,0);
ellipse(370,80,60,60);

fill(255, 127, 0);
stroke(255, 127, 0);
ellipse(370,80,50,50);

fill(255, 255, 0);
stroke(255,255,0);
ellipse(370,80,40,40);


//restore state
pop();

}
//function to draw roff
function drawRoof(){
push();
fill(139,0,0);
stroke(139,0,0);
triangle(130, 230, 230, 130, 330, 230);
pop();
}

//function to draw_house_body
function draw_House_Body(){
push();
fill(92, 64, 51);
stroke(92, 64, 51);
rect(130,230,200,150);

fill(153, 117, 66);
stroke(153, 117, 66);
rect(210,310,50,70);

fill(92, 64, 51);
ellipse(248, 340, 13);
stroke(92, 64, 51);

fill( 211, 211, 211 );
stroke( 211, 211, 211);
rect(260,250,50,50);

fill( 211, 211, 211 );
stroke( 211, 211, 211 );
rect(150,250,50,50);

fill( 211, 211, 211 );
stroke( 211, 211, 211);
circle(60, 80, 80);
circle(110, 50, 80);
circle(160, 80, 80);
 
pop();
}

//function to draw grass
function grass(){
push();

fill(0, 100, 0);
ellipse(300,510,650,300);
stroke(0,100,0);

fill(0, 100, 0);
ellipse(90,510,560,300);
stroke(0,100,0);

fill(0, 128, 0);
ellipse(125,510,500,300);

fill(0, 100, 0);
ellipse(110,510,450,300);
stroke(0,100,0);


pop();


}