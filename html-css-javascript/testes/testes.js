let alunos = ['a','b','c','d']

class Alunos {
  constructor(alunos) {

    this.alunos = alunos
  }

  deleteContato() {

    this.alunos.forEach((index) => {

        alunos.splice(index,1)
        console.log(alunos)
        
    });
  }
}



let teste = new Alunos(alunos)

teste.deleteContato(alunos)
