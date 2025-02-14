#crie um programa que leia as notas e os nomes dos respectivos alunos e coloque em uma lista. Informa na sequencia o nome e a nota de cada aluno]
# E em seguida informe qual aluno teve a maior nota

#Listas previamente vazias
notas = []
alunos =[]
resultados=[]

#input para entrar com numero de alunos que serao cadastrados 
num_alunos=(int((input('DIGITE O NUMERO DE ALUNOS: '))))


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


    n = input('DIGITE A NOTA DESSE ALUNO:')

    #teste para ver se numero digitado é valido ou nao 
    while n.isalpha():
        print('DIGITE UMA NOTA VALIDA!')
        n = input('DIGITE A NOTA DESSE ALUNO:')
    else:
        #numero validado inserido a lista
        notas.append(int(n))

#for para criar uma variavel tupla e colocar todos os itens das duas listas nela. Depois essa variavel vai para uma nova lista chaamda resultados
for i in range(num_alunos):
    tupla = (alunos[i],notas[i])
    resultados.append(tupla)
print(resultados)

#criei uma variavel chamada indice que pega o indice referente a nota maxima da lista de notas
indice = ((notas.index(max(notas))))
#indice é chamado dentro da nova lista resultados para mostrar a maior nota com o nome do aluno
print(f'A MAIOR NOTA FOI {resultados[indice]}')

indice = ((notas.index(min(notas))))
#indice é chamado dentro da nova lista resultados para mostrar a maior nota com o nome do aluno
print(f'A MENOR NOTA FOI {resultados[indice]}')




