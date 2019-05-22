//GameObjects
let player;
let walls;
let ennemis;

//Weapon 
let weapon;          // weapon choice
let bullets;         // how many bullets are in the magazine
let weaponBoxes;     // caisses
let weaponMagazine;  // chargeur 
let boxTimer;        // handler to check how many time box is on the map
let intervalBoxSpawn = 5000;

//Sprites
let persoSprite;
let ennemiSprite;
let colliderSprite;

//Ennemis spawn
let mancheId;        // current round
let nbrEnnemisParManche = [5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];
let EnnemisSpeed;    // ennemis speed
let nbrEnnemisKilled = 0; // handler for ennemis killed during game
let timer = 0;       // handler for game timer 

//Game states
let start = true;
let gameOver = false;
let win = false;

//Texts
backgroundColor = '#000080';  // colors
playerColor = '#ffffff';
wallColor = '#B2B2D8';
bulletColor ='#ffd700';
textColor = '#B2B2D8';
let big = 40;                 // sizes
let small = 20;



function preload() {
  // where to load sprites
  persoSprite = loadImage('assets/anim1.png');
  ennemiSprite = loadImage('assets/zombie.png');
  colliderSprite = loadImage('assets/anim3.png');
}


function setup() {
  createCanvas(10*90+50, 10*90+50); 
  
  // instantiate variables 
  weapon = int(random(1,3)); //set weapon
  mancheId = 0;              //set manche id
  nbrEnnemisKilled = 0;      //set killed ennemis counter
  weaponMagazine = 10;       //set number of bullet
  EnnemisSpeed = 0.5;        //set Ennemi speed
  textAlign(CENTER);
  fill(textColor);
  
  // instantiate gameobjects
  weaponBoxes = new Group();
  walls = new Group();
  ennemis = new Group();
  bullets = new Group();
  addPerso();
  addwalls();
  lancerManche(); 
}

function draw() {
  background(backgroundColor);
  scenes();
}

function resetGame(){                             
  bullets.removeSprites(); //Remove game components
  walls.removeSprites();
  ennemis.removeSprites();
  weaponBoxes.removeSprites();
  player.remove();
  setup();                 //Recreate all game components
}

  
  
 
