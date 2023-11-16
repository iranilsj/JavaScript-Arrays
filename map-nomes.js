// Padronizar nomes apenas com letras maiusculas
const nomes = ['ana julia', 'Caio', 'vinicius', 'BIA', 'iran'];

// outra opcao sem colocar o "Return" eliminando as chaves 
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

// 1) Exemplo de console.log  forma em  lista
console.log(nomesPadronizados);

// 2) Exemplo de console.log  forma de impressão diferentes ( Forma escrita )
console.log(`${nomesPadronizados}`);