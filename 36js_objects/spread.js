const cliente = {
    nome: "Gabriel",
    idade: 21,
    cpf: "01010211943",
    email: "gabrielgks10@gmail.com",
    telefone: ["49988689061", "28197432984"], //array como atributo
};

cliente.enderecos = [
    {
        rua: "R. rotaract",
        numero: 51,
        apartamento: false,
        complemento: "E",
    },
];

function ligaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`)
}
ligaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};
console.log(encomenda);