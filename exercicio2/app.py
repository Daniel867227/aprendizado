#crie um sistema de notas no qual diz se o aluno foi aprovado ou não. Sabendo que cada nota tem um peso, como demonstrado abaixo

#matematica =2
#portugues = 1.5
#ciencias = 1

#Os alunos com a media ponderada das notas inferior a 60 serão reprovados e o sistema deve mostrar na tela
#Os alunos com a media ponderada das notas superior ou igual a 60 serão aprovados e o sistema deve mostrar na tela
#A primeira nota sera matematica, a segunda sera ciecias e a terceira sera portugues

peso_mat = 2
peso_port = 1.5
peso_ciec = 1

Notas_Joao = [40, 12, 23]
Notas_Felipe =[60, 80, 50]
Notas_Daniel =[60,79,67]


#pega na lista as notas e multiplica pelos respecifivos pesos. Depois faz a media e compara usando if para ver se é maior ou igual a 60. Depois disso retorna a msg

soma_Joao = Notas_Joao[-3]*peso_mat + Notas_Joao[-2]*peso_ciec + Notas_Joao[-1]*peso_port
media_Joao = int((soma_Joao/3))
if media_Joao >= 60:
    print("Joao teve uma media de", media_Joao,"e foi aprovado")
else:
    print("Joao foi Reprovado")


soma_Daniel = Notas_Daniel[-3]*peso_mat + Notas_Daniel[-2]*peso_ciec + Notas_Daniel[-1]*peso_port
media_Daniel = int((soma_Daniel/3))
if media_Daniel >= 60:
    print("Daniel teve uma media de", media_Daniel,"e foi aprovado")
else:
    print("Daniel foi Reprovado")


soma_Felipe = Notas_Felipe[-3]*peso_mat + Notas_Felipe[-2]*peso_ciec + Notas_Felipe[-1]*peso_port
media_Felipe = int((soma_Felipe/3))
if media_Felipe >= 60:
    print("Felipe teve uma media de", media_Felipe,"e foi aprovado")
else:
    print("Felipe foi Reprovado")