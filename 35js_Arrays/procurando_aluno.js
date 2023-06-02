const alunos = ["João", "Gabriel", "Leonardo", "Marcela"];
const medias = [10, 8, 5, 9];

const matrizAlunosMedias = [alunos, medias];

function encontraAluno (aluno){
    if(matrizAlunosMedias[0].includes(aluno)){
        // const alunos = matrizAlunosMedias[0];
        // const medias = matrizAlunosMedias[1];

        const [alunos, medias] = matrizAlunosMedias; //Exatamente a mesma coisa das 2 linhas de cima, nomeia direto as listas

        const i = alunos.indexOf(aluno);
        console.log(`A media do aluno ${aluno} é ${medias[i]}`)
    } else console.log(`O aluno ${aluno} não esta cadastrado!`);
}

encontraAluno("Gabriel");