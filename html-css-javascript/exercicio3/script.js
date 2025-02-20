//DOM É UMA ARVORE HIERARQUICA QUE POSSUI
//PARENTS E CHILD
// FUNCIONA ASSIM: WINDOW > DOCUMENTO > HEAD AND BODY > (DENTRO DE BODY) > H1,H2, DIV,P
// EXISTEM DIVERSAS FORMAS DE ACESSAR ESSES ELEMENTOS HTML COM JS SCRIPT
// ESSAS SAO POR MARCA, ID, NOME, CLASSE, SELETOR



//ACESSANDO ELEMENTOS POR MARCA(TAG)

var p1 = window.document.getElementsByTagName('p')[0]
var p2 = window.document.getElementsByTagName('p')[1]
var corpo = window.document.body

var concat = p1.innerText+ p2.innerHTML
//CONCATENEI O PRIMEIRO E SEGUNDO PARAGRAFO E PEDI PARA
//MOSTRAR O INNERTEXT OU SEJA SOMENTE O CONTEUDO DO TEXT0
//TAMBEM USEI O INNER HTML E MOSTREI TEXT E FORMATACAO
window.document.write(concat)

//PUXEI O ESTILO DO P2 QUE RECEBEU O GETELEMENTS
// E MUDEI A COR PARA VERMELHO

var resp_1 = window.prompt('VOCE DESEJA MUDAR A COR DO FUNDO DO SITE PARA BRANCO ?')

if (resp_1 == 'SIM') {
    corpo.style.background= 'white'
}
else{
    window.alert('TUDO BEM, VAMOS MANTER A COR ORIGINAL')

}

//ACESSANDO ELEMENTOS POR ID. Mas para acesasr por id preciso la no html antes da um id para a minha div
var paragrafos = window.document.getElementById('paragrafos')

var resp_2 = window.prompt('VOCE QUER QUE OS PARAGRAFOS FIQUEM AZUL?')

if (resp_2 =='SIM'){
    paragrafos.style.color= 'blue'

}   


//ACESSANDO ELEMENTOS POR NAME. Mas para acessar por nome precisso dar um nome antes

var titulos = window.document.getElementsByName('titulos')[0]

var resp_3 =  window.prompt('QUER MUDAR A COR DOS TITULOS PARA VERDE?')

if (resp_3=='SIM'){
    titulos.style.color='green'
}


//ACESSANDO ELELEMTOS POR SELETOR
//EU USO O QUERYSELECTOR EM VEZ DE GETELEMENTSBY
// QUERYSELECTOR É NOVO, SE O NAVEGADOR FOR MAIS ANTIGO E NAO ESTIVER ATUALIZADO PODE SER QUE ELE NAO FUNCIONE//

var imagem = window.document.querySelector('div#imagem1')
// se a variael for ID eu uso # se for class eu uso o ponto (.)no lugar do #

var resp_4 = window.prompt('QUER QUE A IMAGEM NAO APARECA?')

if (resp_4=='SIM'){
    imagem.style.display= 'none'
}