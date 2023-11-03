const alunos = ["João", "Juliana",  "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    //1) (forma de escrever)
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];

    // 2) (Outra forma de escrever)
    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}!`);
  } else { 
    console.log("Aluno(a) não cadastrado!");
  }
}
exibeNomeENota("Caio");