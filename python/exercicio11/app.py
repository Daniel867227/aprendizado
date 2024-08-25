#crie um programa que leia as notas e os nomes dos respectivos alunos e coloque em uma lista. Informa na sequencia o nome e a nota de cada aluno]
# E em seguida informe qual aluno teve a maior nota

#Listas previamente vazias
notas = []
alunos =[]


#input para entrar com numero de alunso que serao cadastrados 
Num_Alunos=(int(input('DIGITE O NUMERO DE ALUNOS: ')))    

#for para repetir o laço de acordo com o numero de alunos
for x in range(0,Num_Alunos):

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
        notas.append(n)


#usand for com zip para printar duas variaveis em duas listas
for aluno, nota in zip(alunos,notas):
    print(f'O {aluno} obteve a nota {nota}')

#retorna a nota maxima. porem esta dando erro e retornando a nota porem nao é a maxima
print(max(notas))



    
 
   

    




