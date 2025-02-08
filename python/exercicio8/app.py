#Crie um comntador que leia qualquer quantidade de numeros inseridos pelo usuario. O sistema ira fazer uma pergunta se quer inserir mais numeros
#ou nao. quando a resposta for diferente de sim ele ira Mostrar todos os valores dessas listas e dizer quantos numeros tem em cada lista


numeros = []

def a():
    k = input('DIGITE UM NUMERO:')
    numeros.append(k)
    b()

def b():   
    question =input('VOCE QUER DIGITAR MAIS UM NUMERO? ')

    if question == "SIM":
        a()
    else:
        print(f'Os numeros da lista são: {numeros}')
        print(f'A sua lista tem {len(numeros)}')

a()
b()


