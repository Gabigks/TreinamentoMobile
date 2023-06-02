const cliente = {
    nome: "Gabriel",
    idade: 21,
    cpf: "01010211943",
    email: "gabrielgks10@gmail.com"
};

const chaves = ['nome', 'idade', 'cpf', 'email', 'altura'];
console.log(cliente["nome"]);

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor: ${cliente[chave]}`);
})