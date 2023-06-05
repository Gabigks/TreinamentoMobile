const dados = require("./cliente.json"); //Le arquivo .json e salva o objeto em dados

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados); //Transforma o objeto dados em uma string (util para transmitir dados etc)

console.log(clienteEmString);
console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString); //Transforma novamente em um objeto js

console.log(objetoCliente);