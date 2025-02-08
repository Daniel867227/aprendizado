#Faça um programa que peça uma nota, entre zero e dez. 
#Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. Quando o usario digitar o valor certo, aparece a msg OBRIGADO

while True:
    try:
        nota = float(input('DIGITE UM NUMERO:'))
        while (nota < 0) or (nota > 10):
            nota = float(input('DIGITE UM NUMERO VALIDO, LEMBRANDO QUE O NUMERO NAO PODE SER MENOR QUE 0 OU MAIOR QUE 10: '))    
    except ValueError:
        print('VOCE INSERIU UMA LETRA OU NUMERO. POR FAVOR, INSIRA UM NUMERO')
       

    

#enquanto o valor for 0<x>10 escreve mensagem numero cadastrado e retorne para pedir outro numero
#se o valor for diferente do acima escreve outra mensagem 