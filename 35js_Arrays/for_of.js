const notas = [10, 6.5, 8, 7.5];

let sum = 0;

for(let nota of notas) sum+=nota;

console.log(`Media das notas: ${sum/notas.length}`);