const alunos = ["João", "Gabriel", "Leonardo", "Marcela", "João", "Marcela", "Luiz", "Luiz"];

//const meuSet = new Set(alunos);
const nomesAtt = [...new Set(alunos)]; //Voltando ao array

console.log(nomesAtt);