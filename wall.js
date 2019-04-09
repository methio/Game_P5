//Wall function, create a random scene
function addwalls(){
  /*## Center ##*/  
   let wc1 = createSprite(width/2 + 200, height/2 - 150,  150, 200); 
   wc1.shapeColor = color(wallColor);
   walls.add(wc1);   
   let wc2 = createSprite(width/2 - 200, height/2 - 150,  150, 200); 
   wc2.shapeColor = color(wallColor);
   walls.add(wc2);  
  let wc3 = createSprite(width/2 + 200, height/2 + 150,  150, 200); 
   wc3.shapeColor = color(wallColor);
   walls.add(wc3);   
   let wc4 = createSprite(width/2 - 200, height/2 + 150,  150, 200); 
   wc4.shapeColor = color(wallColor);
   walls.add(wc4);
  
  /*## Border ##*/
  for (let i = 0; i < 10; i++) {
    let w = createSprite(random(10, width/4), random(10, height) ,random(10, 100), random(40, 150));
    let w1 = createSprite(random(width - width/4 , width), random(10, height) ,random(10, 100), random(40, 150));
    let w2 = createSprite(random(10 , width), random(10, height/4) ,random(10, 100), random(40, 150));
    let w3 = createSprite(random(10 , width), random(height - height/4, height) ,random(10,100), random(40, 150));
    
    w.shapeColor = color(wallColor);
    w1.shapeColor = color(wallColor);
    w2.shapeColor = color(wallColor); 
    w3.shapeColor = color(wallColor);
    
    //w.addImage(colliderSprite);
    //w1.addImage(colliderSprite);
    //w2.addImage(colliderSprite);
    //w3.addImage(colliderSprite);

    
    //voir le collider
    //w.debug = true;
    //w1.debug = true;
    //w2.debug = true;
    //w3.debug = true;
    
    walls.add(w);
    walls.add(w1);
    walls.add(w2);
    walls.add(w3);
  }
}
