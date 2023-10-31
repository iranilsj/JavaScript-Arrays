const alunos = ["jão", "Juliana,","Ana", "Caio", "Lara","Marjorie", 
"Guilherme","Aline", "Fabiana", "André", "Carlos", "Paulo", "Bianca", 
"Vivian", "Isabela", "Vinícios", "Renan", "Renata", "Daisy", "Camilo"];

const sala1 = alunos.slice(0, alunos.length  /  2);
const sala2 = alunos.slice(alunos.length / 2);
console.log("Alunos da Sala 1: " + sala1);
console.log("Alunos da Sala 2: " + sala2);