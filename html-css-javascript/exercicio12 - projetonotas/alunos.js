import {methods} from "./funcoes12.js"
import {alunos} from "./bancoAlunos.js"


let resultados = document.getElementById('resultados')
let botaoInserir= document.getElementById('botaoInserir')

botaoInserir.addEventListener("click", inserir)

function inserir(){

    let notasAlunos= {
        nome: document.getElementById('nome').value,
        nota: document.getElementById('nota').value

    }

    methods.drawNotas(notasAlunos,resultados)
    console.log(alunos)


}



