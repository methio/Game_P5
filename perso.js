
  function addPerso(){
  player = createSprite(width/2, height/2, 10, 10);
  player.setCollider('circle', 0, 0, 10);
  //player.debug = true;
  //player.addImage(ennemiSprite);
  player.shapeColor = color(playerColor);
}

function persoBehavior(){
  /*## Collider du joeur ##*/
    player.collide(walls);
  
  /*## Deplacement joueur 1##*/
    if(keyDown(LEFT_ARROW)){
    player.rotation = 180;
    player.addSpeed(0.2, player.rotation);
    }
    if(keyDown(RIGHT_ARROW)){
    player.rotation = 0;
    player.addSpeed(0.2, player.rotation);
    }
    if(keyDown(DOWN_ARROW)){
    player.rotation = 90;
    player.addSpeed(0.2, player.rotation);
    }
    if(keyDown(UP_ARROW)){
    player.rotation = 270;
    player.addSpeed(0.2, player.rotation);
    }
    if(keyWentUp(UP_ARROW) || keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW) || keyWentUp(DOWN_ARROW))
    player.setSpeed(0,0);
    
   /*## Mort du joueur ##*/
   player.overlap(ennemis, function hitEnnemis(player, enn){
  gameOver = true;
  });
}
