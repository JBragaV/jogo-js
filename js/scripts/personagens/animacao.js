class Animacao{
    constructor(matriz, imagem, x, larguraImagemTela, alturaImagemTela, larguraSprit, alturaSprit){
        this.matriz = matriz;
        this.imagem = imagem;
        this.largura = larguraImagemTela;
        this.altura = alturaImagemTela;
        this.x = x;
        this.y = height - this.altura;
        this.larguraSprit = larguraSprit;
        this.alturaSprit = alturaSprit;

        this.frameAtual = 0;
    }

    exibe() {
        image(this.imagem,
             /*dx*/this.x, 
             /*dy*/this.y, 
             /*dwidth*/this.largura, 
             /*dHeight*/this.altura, 
             /*sx*/this.matriz[this.frameAtual][0], 
             /*sy*/this.matriz[this.frameAtual][1], 
             /*sWidth*/this.larguraSprit, 
             /*sHeight*/this.alturaSprit);
        this.anima();
    }

    anima() {
        this.frameAtual++;
        if (this.frameAtual > this.matriz.length - 1) {
            this.frameAtual = 0;
        }
    }
}