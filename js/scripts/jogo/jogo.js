class Jogo {
    constructor() {
        this.inimigoAtual = 0;
        this.mapaInimigos = [
            {foe: 0, velocidade: 10},
            {foe: 1, velocidade: 30},
            {foe: 1, velocidade: 20},
            {foe: 0, velocidade: 30},
            {foe: 1, velocidade: 10},
        ]
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
        gota = new Inimigo(matrizGota, imagemGota, width - 52, 52, 52, 104, 104);
        troll = new Inimigo(matrizTroll, imagemTroll, width - 180, 180, 180, 380, 290);
        placar = new Pontuacao();
        vidas = new Vida(5, 3);
        inimigos.push(gota);
        inimigos.push(troll);
    }

    draw() {
        cenario.exibe();
        cenario.move();
        vidas.draw();
        personagem.exibe();
        personagem.aplicaGravidade();
        placar.exibe();
        placar.adicionarPonto();
        this.trocarInimigo();
        //circle(mouseX, mouseY, 200);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            if (personagem.puloDuplo()) {
                personagem.pula();
                somPulo.play();
            }
        }
    }

    trocarInimigo() {
        const linhaAtual = this.mapaInimigos[this.inimigoAtual];
        const inimigo = inimigos[linhaAtual.foe];
        inimigo.velocidade = linhaAtual.velocidade;
        inimigo.exibe();
        inimigo.moveInimigo();
        if (inimigo.x < -inimigo.largura) {
            this.inimigoAtual++;
            inimigo.aparece()
            if (this.inimigoAtual === this.mapaInimigos.length ) {
                this.inimigoAtual = 0;
            }
        }
        this.colisao(inimigo);
    }

    colisao(inimigo) {
        if (personagem.colisao(inimigo)) {
            vidas.perdeVida();
            personagem.invuneravel();
            if(vidas.vidas < 0){
                vidas.perdeVida();
                image(imagemGameOver, width / 3, height / 3, 500, 100);
                noLoop();
            }
        }
    }
}