class Botao{

    constructor(texto, xInicial, yInicial){
        this.texto = texto;
        this.x = xInicial;
        this.y = yInicial;
        this.btn = createButton(this.texto); 
        this.btn.mousePressed(() => this._alteraTela());
        this.btn.addClass("botao-tela-inicial");
    }


    draw(){
        this.btn.position(this.x, this.y);
        this.btn.center('horizontal');
    }

    _alteraTela(){
        this.btn.remove();
        telaAtual = 'jogo'
    }
}