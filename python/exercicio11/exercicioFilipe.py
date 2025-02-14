#crie um programa que:
#  leia as notas e os nomes dos respectivos alunos e coloque em uma lista 
#  Informa na sequencia o nome e a nota de cada aluno
# E em seguida informe quais alunos tiveram a maior nota
# Deposi quais alunos tiveram a menor nota
#por fim informe quais alunos tiraram notas iguais

#Listas previamente vazias
notas = []
alunos =[]
resultados=[]
repetidos=[]

#input para entrar com numero de alunos que serao cadastrados 
num_alunos= (int(input('DIGITE O NUMERO DE ALUNOS:')))


#for para repetir o laço de acordo com o numero de alunos
for x in range(0,int(num_alunos)):

    a = input('DIGITE O NOME DO ALUNO:')

    #teste para ver se o nome digitado é valido ou nao
    while a.isnumeric() or len(a)<2:
        print('DIGITE UM NOME VALIDO!')  
        a = input('DIGITE O NOME DO ALUNO:')
    else:
        #nome validado é adicionado a lista
        alunos.append(a) 


    n = input('DIGITE A NOTA DESSE ALUNO (ENTRE 0 E 10):')

    #teste para ver se numero digitado é valido ou nao 
    while n.isalpha():
        print('DIGITE UMA NOTA VALIDA!')
        n = (int(input('DIGITE A NOTA DESSE ALUNO:')))
    else:
        #numero validado inserido a lista
        notas.append(int(n))

#for para criar uma variavel tupla e colocar todos os itens das duas listas nela. Depois essa variavel vai para uma nova lista chaamda resultados
for i in range(num_alunos):
    tupla = (alunos[i],notas[i])
    resultados.append(tupla)

print('\m',resultados,'\n')

min=11
max= 0

for nota in notas:
    if nota>max:
        max = nota
    if nota<min:
        min=nota


for i in range(len(notas)):
    if notas[i] == max:
        print('\n',resultados[i],'\n') 

    if notas[i] == min:
        print('')
        print('')
        print('\n',resultados[i],'\n\n')


for i in range(len(notas)):
    for j in range(i+1,len(notas)):
        if notas[i]==notas[j]:
            repetidos.append(resultados[i])
            repetidos.append(resultados[j])
print('\n',repetidos,'\n')

        