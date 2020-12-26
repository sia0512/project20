var a,b
function setup() {
  createCanvas(800,400);
  a =createSprite(400, 200, 100, 50);
  b=createSprite(600,200,50,100)
  a.shapeColor="yellow"

  b.shapeColor="yellow"
}

function draw() {
  background(255,255,255);
  a.y=World.mouseY
  a.x=World.mouseX
  console.log(a.x)
  if(a.x-b.x < b.width/2 + a.width/2 && b.x-a.x < a.width/2 + b.width/2 && b.y-a.y < a.height/2 + b.height/2 && a.y-b.y < b.height/2 + a.height/2){
    a.shapeColor="red"
    b.shapeColor="red"
  }
  else{
    a.shapeColor="yellow"
    b.shapeColor="yellow"
  }

  drawSprites();
}