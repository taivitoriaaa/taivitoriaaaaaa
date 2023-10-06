function setup() {
  createCanvas(800, 880);
  background('white');
}

function draw() {
  
  stroke("blue");
  fill("red");
  
  // console.lon(mouseIsPressed);

  if (mouseIsPressed) 
  rect (mouseX,mouseY,20,35);
   }    
