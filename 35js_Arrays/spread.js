const notas = [10, 6.5, 8, 7.5]
const notas2 = [10, 6.5, 8, 7.5];

//Mais detalhes em destructuring.js
const novasNotas = [5, ...notas, ...notas2, 10]; //utilizando o spread operator copiamos todos elementos do array notas para novasNotas 

console.log(notas);
console.log(novasNotas);

// const novasNotas = notas;//Essa atribuição ambas irão apontar para o mesmo endereço de memória
// novasNotas.push(10);
// console.log(notas);
// console.log(novasNotas);