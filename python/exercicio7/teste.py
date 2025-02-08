#Faça um programa com uma funcao que mostro o seu nome e indade entre linhas. Esse programa deve pedir seu nome e idade


def mostra_linha(a):
    
    print('____________________________________________________')
    print(a)
    print('____________________________________________________')
 


nome = str(input('DIGITE O SEU NOME: '))
mostra_linha(nome)
print('DIGITE UM VALOR VALIDO')

idade=int(input('AGORA DIGITE A SUA IDADE: '))

mostra_linha(idade)

mostra_linha('SUA IDADE É: ')

mostra_linha(f'A SUA IDADE É: {idade}')
