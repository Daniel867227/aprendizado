
function inserir(){

  
   
    notas.push({nome: nome, nota: Number(nota.value)})
    let item = document.createElement('p')
    item.textContent=`O aluno ${notas[i].nome.value} tirou ${notas[i].nota}`
    nomes_notas.appendChild(item)
    i++
  
  }
  
  
function calcular(){
  
    let nota_maior = document.getElementById('nota_maior')
    let maior_nota = Math.max.apply(null,notas.map((user) => user.nota))
    nota_maior.textContent=maior_nota
  
  }
  

function somar(a,b){
    let res = a + b
    return res 

  }


export {inserir, calcular, somar}  