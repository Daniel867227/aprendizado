//tabuada

let botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular(){

    let numero = document.querySelector('#numero')
    let lista = document.getElementById('lista')

    lista.innerText=''

    let i = 1
    while (i<=9){

        let item = document.createElement('option')

        item.text = `${Number(numero.value)} x ${i} = ${Number(numero.value)*i}`

        //tenho que colocar .text para mostrar a parte de dentro do option

        lista.appendChild(item)

        i++

    }

        

        

}