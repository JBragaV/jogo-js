class Cenario {
    constructor(imagem, velocidade) {
        this.imagem = imagem;
        this.velocidade = velocidade;
        this.x1 = 0;
        this.x2 = width;
    }

    exibe() {
        image(this.imagem, this.x1, 0, width, height);// src da imagem, x-inicial, y-inicial, o tamanho da imagem em x, tamanho da imagem em y
        image(this.imagem, this.x2, 0, width, height);
    }

    move() {
        this.x1 -= this.velocidade;
        this.x2 -= this.velocidade;

        if (this.x1 < -width) {
            this.x1 = width;
        }

        if (this.x2 < -width) {
            this.x2 = width;
        }
    }
}