
function clicar(){
    var a = window.document.getElementById('area')
    a.innerText = 'Clicou'
    a.style.background = 'red'

}

function entrar(){
    var b = window.document.getElementById('area')
    b.innerText= 'Entrou'
}

function sair(){
    var c = window.document.getElementById('area')
    c.innerText = 'saiu'
    c.style.background ='green'
}

//ESSA FORMA DE FAZER ACIMA. VOCE CRIA A ACAO NA DIV DO 
// HTML (NO CASO SAO A ENTER, ONMOUSEENTER, E ONMOUSEOUT
// E TRATA ELA COM AS FUNCOES MO JS 
// MAS, PARA NAO POLUIR O HTML, VOCE PODE USAR OS OUVIDORES
//SAO CARINHAS QUE VAO LA NO HTML E VE SE O EVENTO IRA OCORRER
//SAO CHAMADOS LISTENER

//FAZENDO INTERACAO COM OUTRO EVENTO USANDO
//ADDEVENTLISTENER

var b = window.document.getElementById('area2')
b.addEventListener('click', clicar_2)
b.addEventListener('mouseenter', entrar_2)
b.addEventListener('mouseout', sair_2)

function clicar_2(){
    b.innerText='Clicou'
    b.style.background='black'
}

function entrar_2(){
    b.innerText='Entrou'
}

function sair_2(){
    b.innerText='Saiu'
    b.style.background='orange'

}
