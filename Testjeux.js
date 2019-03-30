/* ## documentation ##
http://molleindustria.github.io/p5.play/docs/classes/Sprite.html#prop-scale
http://molleindustria.github.io/p5.play/examples/index.html?fileName=asteroids.js
// constructor
https://www.youtube.com/watch?v=rHiSsgFRgx4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=24
*/


let player;
let bullets;

let persoSprite, ennemiSprite, colliderSprite;



function preload(){
  persoSprite = loadImage('assets/anim1.png');
  ennemiSprite = loadImage('assets/anim2.png');
  //colliderSprite = loadImage('assets/anim3.png');
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  player = createSprite(width/2, height/2);
  //player.shapeColor = color(255);
  player.scale = 0.2;
  player.setCollider('circle', 0, 0, 20);
  player.addImage(ennemiSprite);
  
  bullets = new Group();
  
}

function draw(){
  background(50);
  
  //image(persoSprite, 0, 0);
  
    if(keyDown(LEFT_ARROW))
    player.rotation -= 4;
    if(keyDown(RIGHT_ARROW))
    player.rotation += 4;
    if(keyDown(UP_ARROW))
    player.addSpeed(0.2, player.rotation);
    if(keyWentUp(UP_ARROW))
    player.setSpeed(0,0);
    
  
  
    if(keyWentDown('x')){
    let bullet = createSprite(player.position.x, player.position.y);
    bullet.addImage(persoSprite);
    bullet.setSpeed(10, player.rotation);
    bullet.life = 30;
    bullets.add(bullet);
  }
  
  drawSprites();
}

/*
function keyPressed(){
  if(keyCode == DOWN_ARROW){
    player.setSpeed(1, 90);
    //player.velocity.y = 1;
  }
  else if(keyCode == UP_ARROW){
    player.setSpeed(1, 270);
    //player.velocity.y = -1;
  }
  else if(keyCode == RIGHT_ARROW){
    player.setSpeed(1, 0);
    //player.velocity.x = 1;
  }
  else if(keyCode == LEFT_ARROW){
    player.setSpeed(1, 180);
    //player.velocity.x = -1;
  }
}
function keyReleased(){  
  if(keyCode == DOWN_ARROW || keyCode == UP_ARROW || keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW){
  player.setSpeed(0,0);
  }
}
*/
