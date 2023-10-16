 const listStudents = [

    {
        name: "Gustavo",
        noteOne: 6,
        noteTwo: 7,

    },
    {
        name: "Leticia",
        noteOne: 9,
        noteTwo: 10,

    },
    {
        name: "Gabriel",
        noteOne: 8,
        noteTwo: 9,

    },
    {
        name: "Guilherme",
        noteOne: 5,
        noteTwo: 4,

    },


 ]


 
 
 function finalNote(noteOne, noteTwo){
     return (((noteOne + noteTwo) /2 )).toFixed(2)
}

function printMessageNotePass (listStudents){

       return ` A media do(a) aluno(a) ${listStudents.name} é: ${finalNote(listStudents.noteOne, listStudents.noteTwo)}
        Não foi dessa vez, ${listStudents.name}! tente novamente 
        `
    }
function printMessageNoteNotPass (listStudents){

       return ` A media do(a) aluno(a) ${listStudents.name} é: ${finalNote(listStudents.noteOne, listStudents.noteTwo)}
       Parabéns, ${listStudents.name}! Você foi aprovado(a) no concurso!
       `
    }

if(finalNote <= 6.99){

for(let massageStudentPass of listStudents){
    let massagePass = printMessageNotePass(massageStudentPass)
    alert(massagePass)
}

}else if(finalNote => 7){

    for(let massageStudentNotPass of listStudents){
        let massageNotPass = printMessageNoteNotPass(massageStudentNotPass)
        alert(massageNotPass)
    }


}

