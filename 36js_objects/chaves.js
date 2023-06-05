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

const chaves = Object.keys(cliente); //salva em um array de strings os nomes das chaves do objeto
console.log(chaves);

//Por se transormar em um array podemos usar métodos do array, como o includes:
if(!chaves.includes("enderecos")) console.log(`Erro! O cliente precisa ter um endereço.`);
else console.log("Tudo certo!");