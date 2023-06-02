const alunos = ['Gabriel', 'Joao', 'Marci', 'Luiz', 'Junei'];
const medias = [10, 7, 8, 9, 4];

const reprovados = alunos.filter((_, i) =>{ //Como nao utilizamos o primeiro parametro, podemos nomear com _
    return medias[i] < 6;
})

console.log(reprovados);