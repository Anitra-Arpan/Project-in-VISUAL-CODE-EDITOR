
var r = 10;
var g = 50;
var b = 255;
var box;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
createCanvas(1300,500);
box = createSprite(200,200,40,40);
box.shapeColor = "silver";
}


function draw(){
background(20,20,20);
  

box.x = World.mouseX;
box.y = World.mouseY;
  
if (box.x > 400) {
   background("violet");
  }
/*
else {
  background("aqua");
}
*/

  if (box.x > 800) {
    background("red");
  }
/*
else{
  background("aqua");
}
*/

  if (box. x > 1200) {
    background("pink");
  }
  /*
  else{
    background("aqua");
  }
*/

  /* change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
   Remember to fill the canvas with white paint before creating the ellipse.
   */
  drawSprites();
}