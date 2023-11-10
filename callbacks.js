// formas de explorar o (callback)

const nomes = ["Iran", "Evaldo", "Mari"];

// 1) function callback (funnction(nome){ console.log()})
nomes.forEach(function (nome) {
    console.log(nome)
})

console.log();

// 2) function callback (forma arrow (=>)) funcao mais moderna e mais usual no mercado  até  o momento.
nomes.forEach((nome) => {
    console.log(nome)
})

console.log();

// 3) function callback (forma externa)
function imprimeNome(nome) {
    console.log(nome);
}
nomes.forEach(imprimeNome);