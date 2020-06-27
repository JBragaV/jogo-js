class Vida {
    constructor(total, inicial){
        this.inicial = inicial;
        this.total = total;
        this.vidas = this.inicial;
        this.x = 6;
        this.y = 20;
        this.largura = 50;
        this.comprimento = 50;
    }

    draw(){
        for(let i = 0; i < this.vidas; i++){
            const margem = i * 54;
            const posicao = this.x * (i + 1);
            image(imagemVidas, margem + posicao , this.y, this.largura, this.comprimento);
        }
    }

    perdeVida(){
        this.vidas--;
    }
}