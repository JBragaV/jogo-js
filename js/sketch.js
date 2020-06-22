let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somJogo;

function preload(){
  imagemCenario = loadImage('assets/img/cenario/floresta.png');
  imagemPersonagem = loadImage('assets/img/personagem/correndo.png');
  somJogo = loadSound('assets/sons/trilha_jogo.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(15);
  somJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe()
  //circle(mouseX, mouseY, 200);
}