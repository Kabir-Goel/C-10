var edges;
var ground;
var groundImage;
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  //create a trex sprite
 trex = createSprite(50,150,20,50);
 trex.scale = 0.5
 trex.addAnimation("running",trex_running);
 edges = createEdgeSprites();
ground = createSprite(300,180, 600, 20);
ground.addImage(groundImage);
}

function draw(){
  background("white")
  ground.velocityX = -2
  if(ground.x < 0){
    ground.x = ground.width / 2
  }
  if(keyDown("space") && trex.y > 140){
    trex.velocityY = -10
  }
  //gravity
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);
  drawSprites();
}
