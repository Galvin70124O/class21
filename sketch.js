var rectangle1,rectangle2
var rectangle3,rectangle4

function setup() {
  createCanvas(800,400);
rectangle1=createSprite(100,100,90,45)
rectangle2=createSprite(200,200,55,110)
rectangle3=createSprite(300,100,102,35)
rectangle4=createSprite(100,300,35,102)
}

function draw() {
  background(255,255,255); 
  drawSprites();
  rectangle1.x=mouseX
  rectangle1.y=mouseY
  if (keyDown("up")) {
    rectangle2.velocityY=-2
  }
  if (keyDown("down")) {
    rectangle2.velocityY=2
  }
  if (keyDown("left")) {
    rectangle2.velocityX=-2
  }
  if (keyDown("right")) {
    rectangle2.velocityX=2
  }

  rectangle1.shapeColor="red"
  rectangle2.shapeColor="blue"
  rectangle3.shapeColor="yellow"
  rectangle4.shapeColor="teal"
  if (collision(rectangle1,rectangle3) ) {
    rectangle3.shapeColor="pink"
    rectangle1.shapeColor="lightgreen"
    
  }
}
function collision ( object1,object2) {
  if (object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.x - object2.x < object1.width/2 + object2.width/2 && object2.y - object1.y < object2.height/2 + object1.height/2 ) {
    return true
  }
  else{
    return false
  }
}