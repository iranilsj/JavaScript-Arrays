const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leonardo"];

//  .splice -> retirar um elemento da lista e "Rodrgio" adicionar  na lista 
//(Troca de lugar na sequencia onde foi retirado)
nomes.splice(1, 2, "Rodrigo");
// .push -> Adicionar novo elemento na lista -> adiciona no final da lista.
nomes.push("Flávio");
console.log(nomes);