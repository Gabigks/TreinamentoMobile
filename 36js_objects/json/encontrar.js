const clientes = require("./cliente.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado2 = encontrar(clientes, "telefone", "51993301028")
const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado);
console.log(encontrado2);