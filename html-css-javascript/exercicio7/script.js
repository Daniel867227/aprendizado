
var botao = window.document.getElementById('botao')
botao.addEventListener('click', idade_e_foto)

function idade_e_foto(){    
    
    var ano_nasc = window.document.getElementById('ano_nasc')
    var ano = new Date ()
    var ano_atual = ano.getFullYear()

    if(ano_nasc.value.length ==0 || Number(ano_nasc.value)>ano_atual || Number(ano_nasc.value)<1900){

        window.alert('[ERRO] Digite um valor válido')
    }
    
    else{
        
        sex = window.document.getElementsByName('sex')
       
        if(sex[0].checked){

                var idade = ano_atual - Number(ano_nasc.value)
                
                if(idade>=0 && idade<10){

                    var res = window.document.getElementById('res')
                    res.innerHTML=`A idade da pessoa é: ${idade} anos`
                    var img = window.document.createElement('img')
                    img.setAttribute('id','foto')
                    img.setAttribute('src', 'exercicio7.jpeg')
                    res.appendChild(img)
                    img.style.borderRadius='50%'
                    img.style.padding='20px'
                    res.style.textAlign='center'

                }

                else if(idade>=10 && idade<16 ){

                    var res = window.document.getElementById('res')
                    res.innerHTML=`A idade da pessoa é: ${idade} anos`
                    var img = window.document.createElement('img')
                    img.setAttribute('id','foto')
                    img.setAttribute('src', '../exercicio6/imagens/noite.jpg')
                    res.appendChild(img)
                    img.style.borderRadius='50%'
                    img.style.padding='20px'
                    res.style.textAlign='center'

                

                }

        }

        else {

            var idade = ano_atual - Number(ano_nasc.value)    
            var res = window.document.getElementById('res')
            res.innerHTML=`A mulher tem a idade de ${idade} anos`



        }


    }

     


}

