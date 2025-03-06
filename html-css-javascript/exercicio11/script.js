array_valores =[]

let lista_valores = document.getElementById('lista_valores')
let numero = document.getElementById('numero')
let respostas = document.getElementById('respostas')

function adicionar(){

    
    array_valores.push(Number(numero.value))
    let item = document.createElement('option')
    item.textContent =`Valor ${Number(numero.value)} adicionado`
    lista_valores.appendChild(item)


}


function finalizar(){

    respostas.innerHTML=''

    let somadosvalores= 0
    let multvalores =1

    for (i in array_valores){

        somadosvalores =somadosvalores + array_valores[i]
        multvalores *= array_valores[i]
    }




    let item2 = document.createElement('p')
    item2.textContent= `A soma das notas é ${somadosvalores}`
    respostas.appendChild(item2)

    let item3 = document.createElement('p')
    item3.textContent= `A multiplicacao das notas é ${multvalores}`
    respostas.appendChild(item3)


}

