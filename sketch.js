var bgImg;
var catimg1;
var catimg2;
var cat;
var catimg3;
var mouseimg1;
var mouseimg2;
var mouseimg3;
var mouse;
var garden;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
   mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(870,600)
   cat.addAnimation("catSleeping",catimg1)
   cat.scale = 0.2
   mouse = createSprite(200,600);
  mouse.addAnimation("mouseStanding",mouseimg1)
   mouse.scale = 0.15
    //ground = new Ground(600,height,1200,20)
}





function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
  cat.velocityX = 0
  cat.addAnimation("lastImg",catimg3)
  cat.x = 300
  cat.scale = 0.2
  cat.changeAnimation("lastImg") 
  mouse.addAnimation("lastImg",mouseimg3)
  mouse.scale = 0.15
  mouse.changeAnimation("lastImg") 
    }
    
    drawSprites();
}
function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5
      cat.addAnimation("catRunning", catimg2);
      cat.changeAnimation("catRunning");  
     mouse.addAnimation("mouseTeasing", mouseimg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
    


  }

}
