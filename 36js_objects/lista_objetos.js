const cliente = {
    nome: "Gabriel",
    idade: 21,
    cpf: "01010211943",
    email: "gabrielgks10@gmail.com",
    telefone: ["49988689061", "28197432984"] //array como atributo
};

cliente.endereco = [{
    rua: "R. rotaract",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934"
    }
];

cliente.endereco.push({
    rua: "Avenida getulio",
    numero: 999,
    apartamento: false,
    complemento: "sim"
});

const listaApartamentos = cliente.endereco.filter((endereco) => endereco.apartamento === true);

console.log(listaApartamentos);
//console.log(cliente);
