import {contatos} from "./bancoContatos.js"




let contato= {
    getTodosContatos: function(){

        return contatos
    },

    getContato: function(i_cont){

        return contatos[i_cont]
    },

    addContato: function(novoContato,destinoDOM){



        const cont = {

            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
    
        }

        contatos.push(cont)

        destinoDOM.innerHTML=''



        contatos.forEach(function add(c){

        const div = document.createElement('div')
        div.setAttribute('class','contato')
        const p_nome = document.createElement('p')
        p_nome.innerHTML=c.nome
        const p_telefone = document.createElement('p')
        p_telefone.innerHTML=c.telefone
        const p_email = document.createElement('p')
        p_email.innerHTML=c.email
        const botao = document.createElement('button')
        botao.setAttribute('class', 'botao')
        const p_botao = document.createElement('p')
        botao.appendChild(p_botao)
        p_botao.innerHTML='deletar'
        div.appendChild(botao)
        

        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        destinoDOM.appendChild(div)

        const cont = 0

        botao.addEventListener('click', del)

        function del(){
            contatos.splice(contatos[cont],1)
            console.log(contato.getTodosContatos())
        }

        cont = cont +1

        })
        
    }


}

export default contato