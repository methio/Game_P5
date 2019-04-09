//Add a weapon box
function addBoxes(){
let newBox = createSprite(width/2 + random(20, - 20), height/2 + random(20, - 20),  20, 20); 
    newBox.setCollider('rectangle', 0, 0, 20, 20);
    newBox.shapeColor = color(0, 150, 0);
    weaponBoxes.add(newBox);   
}

//everything link to weapon box
function weaponBehavior(){
bullets.collide(walls);
player.overlap(weaponBoxes, function weaponChoice(player, box){
  weapon = int(random(1, 3));  
  box.remove();
});
  
timer ++; 
 if(timer > 500){    
 addBoxes();
 timer = 0;
}
if(weaponBoxes.length > 0){
  boxTimer ++;
  console.log(boxTimer);    
  if(boxTimer > 300){    
   weaponBoxes.removeSprites();
   boxTimer = 0;
  }
}else{boxTimer = 0;}

if(keyWentDown('X')){  
  if(weapon == 1){
    let bullet = createSprite(player.position.x, player.position.y, 5, 5);
    //bullet.addImage(persoSprite);
    bullet.shapeColor = color(bulletColor);
    //bullet.scale = 0.2;
    bullet.setSpeed(10, player.rotation);
    bullet.life = 30; //nbr de frame où la balle reste
    bullets.add(bullet);
  } else if(weapon == 2){
     for(let i= -20; i<30; i+=10){
      let bullet = createSprite(player.position.x, player.position.y, 5, 5);
      bullet.shapeColor = color(bulletColor);
      bullet.setSpeed(10, player.rotation + i);
      bullet.life = 10;
      bullets.add(bullet);
    }    
  }
}
}
