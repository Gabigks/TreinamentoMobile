import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void{
    this.negociacoes.push(negociacao);
  }
  //ReadonlyArray<Negociacao> Mesma coisa
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}


