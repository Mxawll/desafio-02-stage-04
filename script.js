/*
   Nesse desafio você irá criar uma lista de estudantes e, 
   cada estudante dentro dessa lista, deverá conter os seguintes dados:

      - nome;
      - nota da primeira prova;
      - nota da segunda prova.

   Depois de criada a lista:

      - [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
      - [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno 
      obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
   {
      name: "Catarina",
      firstNote: 7,
      secondNote: 10,
   },
   {
      name: "Lucas",
      firstNote: 3,
      secondNote: 5,
   },
   {
      name: "Miguel",
      firstNote: 9,
      secondNote: 8,
   },
]

function average(noteOne, noteTwo) {
   return (noteOne + noteTwo) / 2
}



for (let studant of students) {
   let studentAverage = average(studant.firstNote, studant.secondNote)

   if (studentAverage >= 7) {
      alert(`
      Parabens ${studant.name} a sua média (${studentAverage}), nas duas ultimas provas,
      ficaram acima da nota de corte.
      `)
   } 
   else {
      alert(`
      ${studant.name} infelizmente a sua média (${studentAverage}), nas duas ultimas provas,
      não foram suficientes para passar nesse concurso.
      `)
   }
}