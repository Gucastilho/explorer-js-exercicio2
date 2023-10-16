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
     return ((noteOne + noteTwo) /2 )
}

function printMessageNote (listStudents){
    return` A media do(a) aluno(a) ${listStudents.name} é: ${finalNote(listStudents.noteOne, listStudents.noteTwo)}

    `
}

for(let massageStudent of listStudents){
    let massage = printMessageNote(massageStudent)
    alert(massage)
}


