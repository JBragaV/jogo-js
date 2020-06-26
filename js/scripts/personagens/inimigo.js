class Inimigo extends Animacao{
    constructor(matriz, imagem, x, larguraImagemTela, alturaImagemTela, larguraSprit, alturaSprit, delay){
        super(matriz, imagem, x, larguraImagemTela, alturaImagemTela, larguraSprit, alturaSprit);
        this.delay = delay;
        this.velocidade = 10;
        this.x = width + this.delay;
    }

    moveInimigo(){
        this.x -= this.velocidade;
        if(this.x < -this.largura - this.delay) this.x = width;
    }
}