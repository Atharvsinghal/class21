function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="green";
  objectdemo=createSprite(600,200,90,90);
  objectdemo.shapeColor="green";
  objectdemo1=createSprite(400,0,30,30);
  objectdemo1.velocityY=4;
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  bounce(fixedrect,objectdemo1);
 if(istouching(movingrect,objectdemo)){
   movingrect.shapeColor="red";
   objectdemo.shapeColor="red";
 }
  
  else{objectdemo.shapeColor="green";
  movingrect.shapeColor="green";
}    
  drawSprites();
}





























