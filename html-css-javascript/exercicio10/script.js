//mesma tabuada usando do while para mostrar a diferenca


function calcular(){

    let numero = document.getElementById('numero')
    let lista = document.querySelector('#lista')
    let i = 1

    lista.innerHTML=''

    do{
        i++
        let itens = document.createElement('option')
        itens.text = `${Number(numero.value)} x ${i} = ${Number(numero.value)*i}`
        lista.append(itens)


    }

    while (i<=10)
        
}