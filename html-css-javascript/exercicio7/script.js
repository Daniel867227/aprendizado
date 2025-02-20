

botao.addEventListener('click', idade_e_foto)

function idade_e_foto(){

    var ano_nasc = window.document.getElementById('ano_nasc')
    var ano = new Date ()
    var ano_atual = ano.getFullYear()
    var idade = ano_atual - Number(ano_nasc.value)
    var botao = window.document.getElementById('botao')
    var res = window.document.getElementById('res')
    var idade_num=Number(idade.valueOf)
    res.innerHTML=`A idade da pessoa é: ${idade} anos`
    var img = window.document.createElement('img')
    // estou criando um elelemto. como se tivesse criando ele no html. mas crio no js somente em determinadas situacaoes
    img.setAttribute('id','foto')
    img.setAttribute('src', 'exercicio7.jpeg')
    res.appendChild(img)
    res.style.textAlign='center'
}


