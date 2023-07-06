import { Imprimivel } from "../interfaces/imprimivel";

export function imprime(...objetos: Imprimivel[]) {
  objetos.forEach(objeto => {
    console.log(objeto.paraTexto());
  })
  
}