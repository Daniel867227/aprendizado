#Faça um programa que peça 5 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.
#Depois, em seguida, peça para pessoa digitar uma senha com letras com no maximo 5 caracteres, se a a pessoa digitar a quantidade superior ou um numero em vez de 
#letras, retornar uma mensagem e pedir para digitar novamente.
def linha():
    print('----------------------------------------------------------------------------------------------')


def parouimpar():
    a = int(input('Digite um numero para colocar na lista: '))
    linha()
    b = int(input('Digite um numero para colocar na lista: '))
    linha()
    c = int(input('Digite um numero para colocar na lista: '))
    linha()
    d = int(input('Digite um numero para colocar na lista: '))
    linha()
    e = int(input('Digite um numero para colocar na lista: '))
    linha()
    
    par = 0
    impar = 0
    lista = [a, b, c, d, e]
    for valor in lista:
        if valor %2 == 0:
            par = par +1
        else:
            impar = impar +1
    print('A quantidade de numeros pares é:',par,"e a quantidade de numeros impares é:", impar)

resposta = input('VOCÊ QUER DIGITAR OS 5 NUMEROS E SABER QUAL DELES É PAR OU IMPAR? DIGITE SIM OU NAO ')
if resposta =='SIM':
    parouimpar()
else:
    print('TUDO BEM, MUITO OBRIGADO')
        

