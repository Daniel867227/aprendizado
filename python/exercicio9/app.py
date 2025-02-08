#crie uma funcao que some os valores de uma lista com a quantidade de numeros que voce escolher previamente
def soma (* valores):
    s=0

    print()

lista = []

vezes = int(input('QUER INSERIR QUANTOS NUMEROS: '))

for c in range(0,vezes):
    k = input('DIGITE UM VALOR:' )
    lista.append(k)

print(lista)


#crie uma funcao que pegue a nota de uma lista de alunos e informe se ele esta aprovado ou reprovado

notas = [66, 34, 80]

for nota in notas:
    if nota>=60:
        print('APROVADO')
    else:
        print('REPROVADO')
