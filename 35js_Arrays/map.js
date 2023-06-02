 notas = [10, 6.5, 8, 7.5];

const notasAtt = notas.map(nota => {
    return nota + 1 >= 10 ? 10 : nota + 1; //operador ternario
});

console.log(notasAtt);

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

//Forma sucinta de escrever usando arrow function omitindo o return e tirando as chaves
const nomePadronizados = nomes.map(nome => nome.toUpperCase());

console.log(nomePadronizados);