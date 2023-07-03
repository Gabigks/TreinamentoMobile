import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(form){
  form.addEventListener('submit', event => {
    event.preventDefault();
    const negociacao = controller.adiciona();
  })
} else{
  throw Error("Formulário não existe, verifique seu código!");
}



