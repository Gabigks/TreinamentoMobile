const nomes = ['Gabriel', 'Joao', 'Marci', 'Luiz'];

// nomes.forEach(function(nome){
//     console.log(nome);
// })

// //Arrow function
// nomes.forEach((nome) => console.log(nome));

// function imprimeNome(nome){
//     console.log(nome);
// }

//outra forma passando outra função sem abrir parenteses nem nada
nomes.forEach(imprimeNome);