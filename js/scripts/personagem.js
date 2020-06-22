class Personagem {

    constructor(imagem) {
        this.imagem = imagem;
        
        this.matriz = [
            [0, 0], [220, 0], [440, 0], [660, 0],
            [0, 270], [220, 270], [440, 270], [660, 270],
            [0, 540], [220, 540], [440, 540], [660, 540],
            [0, 810], [220, 810], [440, 810], [660, 810]
        ];
        this.frameAtual = 0;
        this.matrizTeste = [];
    }

    exibe() {
        //imagem, xInicial, yInicial, tamanho da imagem na tela x, tamanho da imagem na tela y, fatiamento dentro da imagem x, fatiamento dentro da imagem y, comprimento da imagem dentro do arquivo x, altura da imagem dentro do arquivo y"
        //this.atualizaImagem(0,0,0,0);
        image(imagemPersonagem, 0, height - 135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270);
        this.anima();
    }

    anima() {
        this.frameAtual++;
        if (this.frameAtual > this.matriz.length - 1) {
            this.frameAtual = 0;
        }
    }

    atualizaImagem(comprimentoSprit, alturaSprit, totalLinha, totalColuna){
        console.log(this.matrizTeste);
    }
}