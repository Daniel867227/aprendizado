var botao = window.document.getElementById('botao')
var nivel = window.document.getElementById('nivel')
var msg_erro= window.document.getElementById('msg_erro')


botao.addEventListener('click', clique)



function clique(){

    number_nivel=Number(nivel.value)

    if (number_nivel>5 || number_nivel <0)
    {
        msg_erro.style.visibility ='visible'  

    }
    else{
       
    }


}

nivel.addEventListener('mouseenter', clique_input)


function clique_input(){

    msg_erro.style.visibility ='hidden'
}
