function addEnnemi() {
  let posx = random(width);
  let posy = height + 10;
  let ennemi = createSprite(posx, posy, 10, 10);
  ennemi.shapeColor = color(255, 0, 0); 
  ennemi.maxSpeed = 2;
  ennemi.friction = .01;
  ennemis.add(ennemi);
}


function ennemiBehavior() {
  ennemis.collide(walls);
  bullets.overlap(ennemis, removeEnnemi);

  for (let i = 0; i < ennemis.length; i++) {
    ennemis[i].attractionPoint(0.05, player.position.x, player.position.y);
  }
}

function removeEnnemi(bullets, enn) {
  enn.remove();
  checkEnnemis();
  nbrEnnemisKilled +=1;
}

function lancerManche() {
  for (let i=0; i < nbrEnnemisParManche[mancheId]; i++) {
    setTimeout(addEnnemi(), random(4000));
  }
}

function checkEnnemis() {
  if (ennemis.length <= 0) {
    mancheId++;
    if (mancheId >= nbrEnnemisParManche.length) {
      win = true;
      // WIN
    } else {
      lancerManche();
    }
  }
}
