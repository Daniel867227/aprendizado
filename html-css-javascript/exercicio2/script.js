window.alert('OLA, SEJA MUITO BEM VINDO!')
var nome = window.prompt('QUAL O SEU NOME?')
/*ESSE COMANDO COLOCA UM ALERTA NA TELA*/ 
window.document.write(`OLA ${nome}, MUITO PRAZER!<br>`)
/*ESSE COMANDO COLOCA A MENSAGEM NO BODY DA PAGINA */
window.document.write(`O SEU NOME TEM ${nome.length} LETRAS <br>`)
/*ESCREVI COMO TEMPLATE STRINGS USANDO OS PLACEHOLDERS ${} */
window.document.write(`O SEU NOME ESCRITO EM MAIUSCULAS É ${nome.toUpperCase()}<br>`)
window.document.write(`O SEU NOME ESCRITO EM MINUSCULAS É ${nome.toLowerCase()}<br>`)

var cpf = window.prompt('DIGITE O NUMERO DO SEU CPF:')

window.document.write(`O SEU CPF É ${cpf}<br>`)

var idade = window.prompt('QUAL A SUA IDADE?')

usuario_cadastrado = (idade >= 18 ?`USUARIO DE CPF ${cpf}, COM ${idade} CADASTRADO` : `USUARIO MENOR DE IDADE, NAO PODE SER CADASTRADO`)
                /*isso que está em parentese é um operador ternario. sua estrutura é logica ? o que vai retornar se for true : o que vai retornar ser for false */
window.document.write(`O ${usuario_cadastrado}<br>`)

a= 10

window.document.write(`${a++} <br>`)
/* O SINAL ++ POS INCRIMENTO MOSTRA VARIAVEL PRIMEIRO E DEPOIS INCREMENTA, O ++ USADO ANTES DA VARIAVEL,JA ADICIONA E DEPOIS MOSTRA */
window.document.write(a)
/*PAREI NO INTRODUCAO AO DOM AULA 9 */0