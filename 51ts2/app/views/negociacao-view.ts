import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{

  protected template(model: Negociacoes): string{
    return `
    <table class="table" table-hover table-bordered>
      <thead>
        <tr> 
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>
      <tbody>
        ${model.lista().map(negociacao => {
          return `
            <tr>
              <td>${this.formataData(negociacao.data)}</td>
              <td>${negociacao._quantidade}</td>
              <td>${negociacao._valor}</td>
              <td>${negociacao.volume}</td>
            </tr>
          `
        }).join('')}
      </tbody>
    </table>
    `;
  }

  private formataData(data: Date): string{
    return new Intl.DateTimeFormat().format(data);
  }

}