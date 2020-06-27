class TelaInicial{

    constructor(){}

    draw(){
        this._imagemFundo();
        this._titulo();
        this._botao();
    }
    
    _imagemFundo(){
        image(imagemTelaInicial, 0, 0, width, height);
    }
    _titulo(){
        textAlign('center');
        textSize(50);
        fill("blue")
        text('As aventuras de', width/2, height / 3);
        fill("red")
        textSize(150);
        text("Hipsta", width/2, height / 5 * 2.6);
    }

    _botao(){
        botaoGerenciador.y = height / 7 * 5;
        botaoGerenciador.draw();
    }
}