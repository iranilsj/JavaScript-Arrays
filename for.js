const numeros = [100, 200, 300, 400, 500, 600, 700];

// Primeira expressão (let indice = 0): é executada apenas uma única vez  
// Segunda expressão (idice < 6): condição de execução  ->  (6) pode ser substituida com (numero.length) 
// Terceira expressão (indice++): é executada sempre ao final do bloco
for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice])   
}