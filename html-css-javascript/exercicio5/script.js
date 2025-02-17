var botao = window.document.getElementById('botao')
var n1 = window.document.getElementById('n1')
var n2 = window.document.getElementById('n2')

botao.addEventListener('click', calcular)
botao.addEventListener('click', muda_cor)

function calcular(){
    number_n1 = Number(n1.value)
    number_n2 = Number(n2.value)
    //QUANDO RECEBEMOS UM INPUT DO HTML, ELE VEM COMO STRING
    //USAMOS OUTRA VARIAVEL, NESSE CASO AS VARIAVEIS ACIMA
    //PARA TRANSFORMAR O VALOR EM NUMERO. USO Number(varivel.value)
    result = number_n1 + number_n2
 
    var res = window.document.getElementById('res')
    res.innerHTML = (`O RESULTADO DA SOMA É: <strong>${result}</strong>`)
    
        if (result % 2 === 0){
            var res_2 = window.document.getElementById('res_2')
            res_2.innerHTML =(`ESSE NÚMERO É <strong>PAR</strong>`)
        }
        else {
            var res_2 = window.document.getElementById('res_2')
            res_2.innerHTML=(`ESSE NÚMERO É <strong>ÍMPAR</strong>`)

        }
        

}

function muda_cor(){
    botao.style.background='green'


}



