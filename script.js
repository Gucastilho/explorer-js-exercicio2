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
         Parabéns, ${listStudents.name}! Você foi aprovado(a) no concurso!
       `
}
    function printMessageNoteNotPass (listStudents){
        
return ` A media do(a) aluno(a) ${listStudents.name} é: ${finalNote(listStudents.noteOne, listStudents.noteTwo)}
         Não foi dessa vez, ${listStudents.name}! tente novamente 
     `
     }

    
    for(let messageStudentNotPass of listStudents){

        let finalNote2 = finalNote(messageStudentNotPass.noteOne, messageStudentNotPass.noteTwo)

        if(finalNote2 <= 6.99){

            let messageNotPass = printMessageNoteNotPass(messageStudentNotPass)
            alert(messageNotPass)

        }else{
            
            let messagePass = printMessageNotePass(messageStudentNotPass)
            alert(messagePass)

        }

    }
    

    





