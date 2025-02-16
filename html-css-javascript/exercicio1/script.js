window.alert('OLA, TUDO BEM? VOU TE FAZER ALGUMAS PERGUNTAS');
    //alerta que diz hello world. esse duas barras serve para escrever uma linha
    nome= window.prompt('QUAL O SEU NOME?');
    /*input que pede o seu nome.
    esse barra e asterisco serve
    para escrever mais de uma linah&*/
    window.alert('É UM GRANDE PRAZER TE CONHECER,' + nome);
    var n1 =Number.parseInt(window.prompt('DIGITE UM NUMERO INTEIRO:'));
    var n2 =Number.parseInt(window.prompt('DIGITE OUTRO NUMERO INTEIRO:'));
    var soma = n1 + n2;



    window.alert(nome+', A SOMA DOS NUMEROS INTEIROS'+n1+' E '+n2+' É '+soma );
    /* Usa sinal de + para fazer a concatenacao*/
    
    var n3=Number(window.prompt('DIGITE UM NUMERO QUALQUER, PODE SER INTEIRO OU DECIMAL: '));
    var n4=Number(window.prompt('DIGITE OUTRO NUMERO QUALQUER: '));
    var soma_2 = n3 + n4;


    window.alert(nome+',A SOMA DOS NUMEROS '+n3+' E '+n4+' É: '+ soma_2)
    /* Usa sinal de + para fazer a concatenacao*/

    window.alert(`O ${nome} DIGITOU OS VALORES E MOSTRAMOS OS RESULTADOS ${soma} E ${soma_2}`)
    //usando o template string que é novidade da js mais atual. Assim eu uso placeholder ${} para colocar as variaveis