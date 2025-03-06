import c from "./contatos.js"

const listaContatos = document.getElementById('listaContatos')
const btn_gravar = document.getElementById('btn_gravar')


btn_gravar.addEventListener('click',gravar)


function gravar(){
    
    const cont={
        nome:document.getElementById('f_nome').value,
        telefone:document.getElementById('f_telefone').value,
        email:document.getElementById('f_email').value
    }


    c.addContato(cont, listaContatos)
    console.log(c.getTodosContatos())


}



