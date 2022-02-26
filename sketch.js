  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var gameover,gameoverimg;


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  gameoverimg = loadImage("game-over.jpg")
}

function setup() {
  createCanvas(1200,600);
  //spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityX = -4;
  //tower.scale = 1.5;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.4;
  ghost.addImage("ghost", ghostImg);

    gameover = createSprite(600,300);
    gameover.addImage(gameoverimg);
    gameover.visible = false;
}


function draw() {
  background(255);
 if(tower.x < width){
      tower.x = 600
    } 
  
  if (gameState === "play") {
    
    if(keyDown("LEFT")){
        ghost.x = ghost.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("RIGHT")){
  
          ghost.x = ghost.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("SPACE")){
  
         ghost.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(doorsGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy()
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    textSize(90);
    fill("black");
    text("Game Over!!",300,100)
    gameover.visible = true;
    gameover.scale = 0.5
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var door = createSprite(600, +50);
    var climber = createSprite(600,60);
    
    door.y = random(50,600)
    climber.y = door.y+50
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityX = -4;
    climber.velocityX = -4;
  
    
    

    

     
    door.lifetime = 800;
    climber.lifetime = 800;
    

     doorsGroup.add(door);
    
    climbersGroup.add(climber);
   
  }
}

