import { alunos } from "./bancoAlunos.js"
import {professores} from "./bancoProfessores.js"


class Pessoa {
    constructor(nome, nota) {

        this.nome = nome
        this.nota = nota
        
    }

    salvar(lista){
            lista.push({
            nome: this.nome,
            nota: this.nota
        })

        return lista
    }


    }

    let botaoAluno = document.getElementById('botaoAluno')
    botaoAluno.addEventListener('click',clicarAluno)

    function clicarAluno(){

        let nomeAluno = document.getElementById('nomeAluno').value
        let notaAluno = document.getElementById('notaAluno').value

        let alunoCadastrado = new Pessoa(nomeAluno,notaAluno)


        console.log(alunoCadastrado.salvar(alunos))

    }

    let botaoProfessor = document.getElementById('botaoProfessor')
    botaoProfessor.addEventListener('click',clicarProfessor)

    function clicarProfessor(){

        let nomeProfessor = document.getElementById('nomeProfessor').value
        let notaProfessor = document.getElementById('notaProfessor').value

        let professorCadastrado = new Pessoa(nomeProfessor,notaProfessor)


        console.log(professorCadastrado.salvar(professores))

    }


