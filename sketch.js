var hr = Hour();
var mm = Minute();
var sc = Second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  hr.display();
  mm.display();
  sc.display();


  drawSprites();
}