class Personagem extends Animacao {

    constructor(matriz, imagem, x, larguraImagemTela, alturaImagemTela, larguraSprit, alturaSprit){
        super(matriz, imagem, x, larguraImagemTela, alturaImagemTela, larguraSprit, alturaSprit);
        this.yInicial = height - alturaImagemTela;
        this.y = this.yInicial;
        this.velocidadePulo = 0;
        this.gravidade = 1.9;
        this.quantosPulos = 2;
        this.invencivel = false;
    }

    pula(){
        this.velocidadePulo = -30;
    }
    
    aplicaGravidade(){
        this.y += this.velocidadePulo;
        this.velocidadePulo += this.gravidade;
        if(this.y >= this.yInicial) this.y = this.yInicial;
    }

    invuneravel(){
        this.invencivel = true;
        setTimeout(() => this.invencivel = false, 1000);
    }

    colisao(inimigo){
        if(this.invencivel){
            return false;
        }
        const precicao = .5369;
        noFill();
        rect(this.x, this.y+39, this.largura * precicao, this.altura)
        rect(inimigo.x + 10, inimigo.y, inimigo.largura * precicao + 20, inimigo.altura);
        const colidiu = collideRectRect(
            this.x, this.y, this.largura * precicao, this.altura,
            inimigo.x, inimigo.y, inimigo.largura * precicao, inimigo.altura);
        return colidiu;
    }

    puloDuplo(){
        if(this.y === this.yInicial) this.quantosPulos = 2;
        if(this.quantosPulos > 0){
            this.quantosPulos--;
            return true;
        }
        return false;
    }
}