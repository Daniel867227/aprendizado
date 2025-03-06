const list =['car1.png', 'car3.png', 'car2.png']
const list_content=['AUDI','CONVERSIVEL', 'FERRARI']
const links =['information-audi.html','information-conversivel.html','information-ferrari.html']




let prevbutton = window.document.getElementById('prev')
let nextbutton = window.document.getElementById('next')
let container = window.document.querySelector('.container')
//uso o .container pq quando uso o queryselector eu tenho que mostrar que estou pegando uma classe, se fosse Id seria #
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let number = document.querySelector('.number')

nextbutton.addEventListener('click', clicar_next)
prevbutton.addEventListener('click', clicar_prev )

let i = 0
let firstposition = 0
let lastposition = list.length - 1

function clicar_next(){
    if (i+1 > lastposition){
        i=0
    }
    else{
        i= i+1
    }

    let imagem = document.getElementById('carro')
    imagem.src=list[i]
    let nome_carro = document.getElementById('nome_carro')
    nome_carro.innerHTML=list_content[i]
    document.getElementById('link-information').href= links[i]
    number.innerHTML=i+1


}

function clicar_prev(){
    
    
    if (i-1 < firstposition){
        i=lastposition
    }
    else{
        i= i-1
    }

    let imagem = document.getElementById('carro')
    imagem.src=list[i]
    let nome_carro = document.getElementById('nome_carro')
    nome_carro.innerHTML=list_content[i]    
    document.getElementById('link-information').href= links[i]
    number.innerHTML=i+1


}