const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// i = idice 
for (let i =0; i < notas.length; i++){
  somaDasNotas += notas[i];
}
const mediaDasNotas = somaDasNotas / notas.length;
console.log(`A média das notas é ${mediaDasNotas}.`)