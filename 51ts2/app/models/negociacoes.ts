import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao): void{
    this.negociacoes.push(negociacao);
  }
  //ReadonlyArray<Negociacao> Mesma coisa
  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}


