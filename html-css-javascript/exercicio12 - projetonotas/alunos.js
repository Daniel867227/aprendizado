import {methods} from "./funcoes12.js"
import { alunos } from "./bancoAlunos.js"


let resultados = document.getElementById('resultados')
let botaoInserir= document.getElementById('botaoInserir')
let botaoCalcular = document.getElementById('botaoCalcular')

botaoInserir.addEventListener("click", ()=>

    {

        let dadosAlunos= {
            nome: document.getElementById('nome').value,
            nota: document.getElementById('nota').value
    
        }
    
    
    
        methods.addNotas(dadosAlunos,resultados)
        methods.drawNotas(resultados, alunos)
    })

botaoCalcular.addEventListener('click', () => {
    

        let max = 0
        
        for (let i in alunos){
    
            if (alunos[i].nota > max){
                max = alunos[i].nota
                }
            
        
        }
    
        console.log(max)
      
          }
    )


    






