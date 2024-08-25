#Faça um exercicio que diga se a letra digitada é vogal ou consoante e mostre uma mensagem de erro caso o usuario digite um valor diferente de apenas letra

vogais =['a','e','i','o','u']

while True:
        a=str(input('DIGITE UMA LETRA: '))
        if a.isalpha() and len(a)==1:
            if a in vogais:
                print('VOGAL')
            else:  
                print('CONSOANTE')
        else:
            print('DIGITE UM VALOR VALIDO. DEVE SER APENAS LETRA')

#print(letra_vogal,'é uma vogal')
#print(letra_consoante,'é cosoante')