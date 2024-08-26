import { alunos } from "./bancoAlunos.js";


const methods={

    drawNotas: function (destinoDOM){

  
      
      destinoDOM.innerHTML = ''
      
      alunos.forEach((contato,index) => {

        const div = document.createElement('div')
        div.setAttribute('class', 'contato')
        const pNome = document.createElement('p')
        pNome.innerHTML= contato.nome
        const pNota = document.createElement('p')
        pNota.innerHTML= contato.nota
        const botao = document.createElement('button')
        botao.setAttribute('class','botaoDeletar')
        const pBotao = document.createElement('p')
        pBotao.innerHTML= 'DELETAR'

        botao.appendChild(pBotao)
        div.appendChild(pNome)
        div.appendChild(pNota)
        div.appendChild(botao)

        destinoDOM.appendChild(div)

        botao.addEventListener('click', ()=>{

          alunos.splice(index,1)
          this.drawNotas(destinoDOM)
          console.log(alunos)
        })

      });
      

    },

    addNotas: function(novoContato, destinoDOM){

      alunos.push({
        nome: novoContato.nome,
        nota: novoContato.nota
      })

      this.drawNotas(destinoDOM)
      console.log(alunos)



    },
    




}



export {methods}