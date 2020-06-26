let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let gota;
let troll;
let somJogo;
let somPulo;
let placar;
let duplo = 0;

const inimigos = []
const matrizPersonagem = [
  [0, 0], [220, 0], [440, 0], [660, 0],
  [0, 270], [220, 270], [440, 270], [660, 270],
  [0, 540], [220, 540], [440, 540], [660, 540],
  [0, 810], [220, 810], [440, 810], [660, 810]
];
const matrizGota = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]
const matrizTroll = [
  [13,96],
  [493,96],
  [973,96],
  [1453,96],
  [1933,96],
  [13,576],
  [493,576],
  [973,576],
  [1453,576],
  [1933,576],
  [13,1056],
  [493,1056],
  [973,1056],
  [1453,1056],
  [1933,1056],
  [33,1536],
  [493,1536],
  [973,1536],
  [1453,1536],
  [1933,1536], 
  [13,2016],
  [493,2016],
  [973,2016],
  [1453,2016],
  [1933,2016],
  [13, 2496],
  [493, 2496],
  [973, 2496]
]

function preload(){
  imagemCenario = loadImage('assets/img/cenario/floresta.png');
  imagemPersonagem = loadImage('assets/img/personagem/correndo.png');
  imagemGota = loadImage('assets/img/inimigos/gotinha.png');
  imagemTroll = loadImage('assets/img/inimigos/troll.png');
  somJogo = loadSound('assets/sons/trilha_jogo.mp3');
  somPulo = loadSound('assets/sons/somPulo.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
  gota = new Inimigo(matrizGota, imagemGota, width - 52, 52, 52, 104, 104, 0);
  troll = new Inimigo(matrizTroll, imagemTroll, width - 180, 180, 180, 380, 290, 500);
  placar = new Pontuacao();
  frameRate(40);
  inimigos.push(gota);
  inimigos.push(troll);
  //somJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  personagem.aplicaGravidade();
  placar.exibe();
  placar.adicionarPonto();
  inimigos.forEach(inimigo =>{
    inimigo.exibe();
    inimigo.moveInimigo();
    if(personagem.colisao(inimigo)){
      //noLoop();
    }
  })

  //circle(mouseX, mouseY, 200);
}

function keyPressed(){
  if(key === 'ArrowUp'){
    if(personagem.puloDuplo()){
      personagem.pula();
      somPulo.play();
    }
  }
}