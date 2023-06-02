const notas = [10, 9, 8, 2];

let sum = 0;

notas.forEach(function(nota, i){
    sum+=nota;
    console.log(i);
})
console.log(sum/notas.length);