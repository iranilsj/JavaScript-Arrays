const notas = [7, 7, 8, 9];

/// uso do [] para fazer a copia mais o eencremento de outros conteudos nao pode ser misturado number com string.
const novasNotas = [6,...notas, 8, 10,];

console.log()
console.log(`AS NOTAS ORIGINAIS SÃO:`, notas);
console.log()
console.log('------------ Opção 1 ------------------');
console.log(`As novas notas são:`, novasNotas);
console.log();
console.log('------------ Opção 2 ------------------');
console.log(`As novas notas são:${novasNotas}`)
console.log()

//  Notas

// opcoes de exibição  