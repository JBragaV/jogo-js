class Pontuacao {

    constructor(){
        this.pontuacao = 0;
    }

    exibe(){
        textAlign(RIGHT)
        fill("#fff");
        textSize(50);
        text(parseInt(this.pontuacao), width - 50, 49)
    }

    adicionarPonto(){
        this.pontuacao += 0.2;
    }
}