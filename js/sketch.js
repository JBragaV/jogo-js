function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial();
  botaoGerenciador = new Botao("Iniciar Jogo", width /2 , height / 2);
  jogo = new Jogo();
  jogo.setup();
  frameRate(40);
  //somJogo.loop();

  cenas = {
    jogo,
    telaInicial
  }
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {
  cenas[telaAtual].draw();
}