let alunos= [
    {

    nome:'Daniel',
    nota: 23
    }
    ,
{
    nome: 'lucas',
    nota: 234
}
]

function calcular(){

  
        
    let max = Math.max.apply(null, alunos.nota)

    console.log(alunos[0].nome)

  }

  calcular()