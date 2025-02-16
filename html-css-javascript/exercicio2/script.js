window.alert('OLA, SEJA MUITO BEM VINDO!')
var nome = window.prompt('QUAL O SEU NOME?')
/*ESSE COMANDO COLOCA UM ALERTA NA TELA*/ 
document.write(`OLA ${nome}, MUITO PRAZER!<br>`)
/*ESSE COMANDO COLOCA A MENSAGEM NO BODY DA PAGINA */
document.write(`O SEU NOME TEM ${nome.length} LETRAS <br>`)
/*ESCREVI COMO TEMPLATE STRINGS USANDO OS PLACEHOLDERS ${} */
document.write(`O SEU NOME ESCRITO EM MAIUSCULAS É ${nome.toUpperCase()}<br>`)
document.write(`O SEU NOME ESCRITO EM MINUSCULAS É ${nome.toLowerCase()}<br>`)

var cpf = window.prompt('DIGITE O NUMERO DO SEU CPF:')

document.write(`O SEU CPF É ${cpf}`)

/*PAREI EM OPERADORES PARTE 2 */