const nPares = [0, 2, 4, 6];
const nImp = [1, 3, 5, 7];

const numeros = [...nPares, ...nImp];
// console.log(numeros);

// const n1 = 1;
// const n2 = 2;
//Mesma coisa q os const de cima \/
// n1=1, n2=2, outros = todos outros numeros passados
const [n1, n2, ...outros] = [1, 2, 3, 4, 5, 6];

//Util para atribuir um valor padrão quando não temos certeza do contéudo que irá vir
const [nome1 = 'Ju'] = [];

const pessoa = {
    nome: "Gabriel",
    idade: 21
};
const pessoaComTelefone = {
    ...pessoa, telefone: "49988689061"
};
// console.log(pessoa);
// console.log(pessoaComTelefone);

//const nome = pessoa.nome;
//Utilizando destructuring:
const { nome } = pessoa; //Cria idade nome, com nome do objeto pessoa
const { idade } = pessoa;

// console.log(nome);
// console.log(idade);

function imprimeDados(dados){
    const{nome} = dados;
    const{idade} = dados;
    console.log(`Nome: ${nome}, idade: ${idade}`);
}
function imprimeDados2({nome, idade}){
    console.log(`Nome: ${nome}, idade: ${idade}`);
}

imprimeDados(pessoa);
imprimeDados2(pessoa);
