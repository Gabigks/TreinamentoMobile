export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
