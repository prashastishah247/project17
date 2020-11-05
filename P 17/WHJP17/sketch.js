
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
monkey=createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  obstacle = createSprite(200, 290, 20, 20)
  obstacle.addImage (obstaceImage)
  obstacle.scale = 0.3

  
  
  banana = createSprite(150, 200, 20, 50);
  banana.addImage(bananaImage)
  banana.scale = 0.1
  
  ground = createSprite(400,350,900,10);                       ground.velocityX=-4;                                   ground.x=ground.width/2;

    
  
  
 // monkey.debug=true;
  score = 0
}


function draw() {
background('rgba(0,255,0, 0.25)');

  text("Score: "+ score, 500,50);
  
   if(ground.x<0) { ground.x=ground.width/2; }
   monkey.collide(ground);
    
   stroke("black"); textSize(20); fill("black"); survivalTime=Math.ceil(frameCount/frameRate()); text("Survival Time: "+ survivalTime, 100,50);

    
    
    score = score + Math.round(getFrameRate()/80);
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
  
   monkey.velocityY = monkey.velocityY + 0.8;
  
  drawSprites();
}

function spawnbanana() {
   if (frameCount % 80 === 0){
   var banana = createSprite(300,100,10,40);
   banana.velocityX = -(6 + score/100);
     
   }  
  
}



