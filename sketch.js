var canvas;
var backgroundImage;
var bgImg;

var form, player,game;
var gameState = 0

var romeu
var racao
var blocos
var blocoImage1,blocoImage2,blocoImage3
var romeuImg
var racaoImg
var chegada
var chegadaImg
var vida
var dim 
var dimImg

var wiiSong
var backgroundImage2
var chao_de_aguaImg,chao_de_agua,chao_de_agua2
var perigo1
var torre,torreImg
var chave,chaveImg


function preload() {
  backgroundImage = loadImage("./assets/asdasd.png");
  blocoImage1 = loadImage("./assets/bloco.png")
  blocoImage2 = loadImage("./assets/bloco2.png")
  romeuImg = loadImage("./assets/romeu.png")
  racaoImg = loadImage("./assets/food.png")
  chegadaImg = loadImage("./assets/red.png")
  vida = loadImage("./assets/vida.png")
  dimImg = loadImage("./assets/dim.png")
  backgroundImage2 = loadImage("./assets/fase2.png")
  chao_de_aguaImg = loadImage("./assets/agua.png")
  torreImg = loadImage("./assets/final.png")
  chaveImg = loadImage("./assets/chave.png")


  wiiSong = loadSound("./songs/wii.mp3")
  
}

function setup() {
  

  canvas = createCanvas(windowWidth, windowHeight);
  
  game = new Game();
  //game.getState()
  game.start();
   
  
  
}

function draw() {
  background(backgroundImage);
  game.play()
  if (gameState == 2) {
    game.stage2()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
