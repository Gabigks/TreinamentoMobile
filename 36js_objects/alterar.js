const pessoa = {
    nome: "Gabriel",
    profissao: "Programador"
};

console.log(pessoa.nome);

const pessoaComTelefone = { //Cria um nome objeto com os atributos de pessoa e mais oq eu quiser adicionar dentro.
    ...pessoa,              //nesse caso adicionamos o telefone
    telefone: "49988689061"
};
//OU
pessoa.telefone = "49988689061"; //Adiciona o atributo telefone ao objeto pessoa

console.log(pessoa);
 
pessoa.nome = 'Gabriel Kolling';
console.log(pessoa);

console.log(pessoaComTelefone);
