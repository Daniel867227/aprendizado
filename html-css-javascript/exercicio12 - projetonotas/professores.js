import {methods} from "./funcoes12.js"
import {professores} from "./bancoProfessores.js"

let resultados = document.getElementById('resultados')
let botaoInserir= document.getElementById('botaoInserir')

botaoInserir.addEventListener("click", inserir)

function inserir(){

    let notasProfessores= {
        nome: document.getElementById('nome').value,
        nota: document.getElementById('nota').value

    }

    methods.drawNotas(notasProfessores,resultados)
    console.log(professores)


}



