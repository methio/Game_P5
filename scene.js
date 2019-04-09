//Gère l'alternance des scènes
function scenes(){
  if(start){
    textSize(big);
    text("Press 'B' to start Game", width/2, height/2);
    text("Use 'X' to shoot", width/2, height/2 + 50);
    text("Use directional key to move", width/2, height/2 + 100);    
    if(keyDown('B')){
      start = false; 
    }
  } else if (gameOver) {
    textSize(big);
    text("GAME OVER", width/2, height/2);
    textSize(small);
    text("You stayed alive until round " + mancheId, width/2, height/2 + 40);
    text("You killed " + nbrEnnemisKilled + " zombies", width/2, height/2 + 80);
    text("Press 'R' to restart", width/2, height/2 + 120);
    if(keyDown('R')){ 
      resetGame();
      gameOver = false;
      start = true;
    }
  } else if (win){
    textSize(big);
    text("WIN", width/2, height/2);
    text("You killed " + nbrEnnemisKilled + " zombies", width/2, height/2 + 40);
    text("Press 'R' to restart", width/2, height/2 + 80);
    if(keyDown('R')){
      resetGame();
      win = false;
      start = true;
    }
  } else { 
    //etat en jeux
    ennemiBehavior();
    persoBehavior();    
    weaponBehavior();
    drawSprites();  
  }
}
