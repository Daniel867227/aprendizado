#Faça um programa que peça uma nota, entre zero e dez. 
#Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. Quando o usario digitar o valor certo, aparece a msg OBRIGADO

nota = float(input('DIGITE UM NUMERO ENTRE 0 E 10: '))
while (nota < 0) or (nota > 10):
    nota = float(input('DIGITE UM NUMERO VALIDO, LEMBRANDO QUE O NUMERO NAO PODE SER MENOR QUE 0 OU MAIOR QUE 10: '))
print('OBRIGADO')

