
hora_agora = 8
var corpo = window.document.getElementById('corpo')
var titulo1= window.document.getElementById('titulo1')
var manha =window.document.getElementById('manha')
var p1=window.document.getElementById('p1')
var tarde = window.document.getElementById('tarde')
var p2 = window.document.getElementById('p2')

if(hora_agora>=6 && hora_agora<=12){
    
    corpo.style.background='yellow'
    titulo1.style.color ='white'
    manha.style.visibility='visible'
    p1.innerHTML= `Agora são ${hora_agora}`
    


}


if (hora_agora>12 && hora_agora<=18){

    corpo.style.background='brown'
    titulo1.style.color ='white'
    tarde.style.visibility='visible'
    p2.innerHTML=`Agora são ${hora_agora}`

    
}

if (hora_agora>18 && hora_agora<=23){
    
    corpo.style.background='black'
    titulo1.style.color ='white'
    
}

if(hora_agora>23 && hora_agora<=5){
    
    corpo.style.background='black'
    titulo1.style.color ='white'

}



