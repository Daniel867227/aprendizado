let methods={

  drawNotas: function(notas, destinoDOM){

  

    let div = document.createElement('div')
    div.getAttribute('id','notas')
    let pNome = document.createElement('p')
    pNome.innerHTML= notas.nome
    let pNota = document.createElement('p')
    pNota.innerHTML= notas.nota
  
    div.appendChild(pNome)
    div.appendChild(pNota)
    destinoDOM.appendChild(div)
  
  
  }

  


}



export {methods}