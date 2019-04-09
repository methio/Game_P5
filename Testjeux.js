//GameObjects
let player;

//Weapon 
let weapon = 1;
let weaponBoxes; //caisses
let boxTimer;
let bullets;
let intervalBoxSpawn = 5000;

let walls, ennemis;
//Sprites
let persoSprite, ennemiSprite, colliderSprite;

//Ennemis spawn
let mancheId = 0;
let nbrEnnemisParManche = [5, 10, 15, 20, 25, 30];

// score counter
let nbrEnnemisKilled = 0;

//variables d'état de jeu 
let start = true;
let gameOver = false;
let win = false;

//color of game
backgroundColor = '#000080';
playerColor = '#ffffff';
wallColor = '#B2B2D8';
bulletColor ='#ffd700';
textColor = '#B2B2D8';
//size
let big = 40;
let small = 20;

let timer = 0;

function preload() {
  persoSprite = loadImage('assets/anim1.png');
  ennemiSprite = loadImage('assets/anim2.png');
  colliderSprite = loadImage('assets/anim3.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);   
  weaponBoxes = new Group();
  walls = new Group();
  ennemis = new Group();
  bullets = new Group();
  addPerso();
  addwalls();
  lancerManche();
  
  textAlign(CENTER);
  fill(textColor);
}

function draw() {
  background(backgroundColor);
  scenes();
}

function resetGame(){
  bullets.removeSprites();
  walls.removeSprites();
  ennemis.removeSprites();
  weaponBoxes.removeSprites();
  player.remove();
  mancheId = 0;
  nbrEnnemisKilled = 0;  
  setup();
}

  
  
 
