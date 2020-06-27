class Inimigo extends Animacao{
    constructor(matriz, imagem, x, larguraImagemTela, alturaImagemTela, larguraSprit, alturaSprit){
        super(matriz, imagem, x, larguraImagemTela, alturaImagemTela, larguraSprit, alturaSprit);
        this.velocidade = 10;
        this.x = width;
    }

    moveInimigo(){
        this.x -= this.velocidade;
    }
    
    aparece(){
        this.x = width;
    }

}