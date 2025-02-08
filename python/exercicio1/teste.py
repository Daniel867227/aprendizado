#Criar um programa que mostre se a pessoa é maior de idade ou nao

from datetime import datetime #importando a biblioteca datetime para pegar o dia, mes e ano atual

hoje = datetime.now() #retorna dia,mes,ano e horario atual
dia_atual = int(datetime.strftime(hoje, "%d")) #mostra apenas o dia atual
mes_atual = int(datetime.strftime(hoje,"%m")) #mostra apenas o mes atual
ano_atual = int(datetime.strftime(hoje,"%Y")) #mostra apenas o ano atual

ano = int(input('DIGITE O ANO DE SEU NASCIMENTO COM 4 DIGITOS: ')) #entrada de dados - ano
mes = int(input('DIGITE O MES DE SEU NASCIMENTO COM 2 DIGITOS: ')) #entrada de dados - mes
dia = int(input('DIGITE O DIA DE SEU NASCIMENTO COM 2 DIGITOS: ')) #entrada de dados - dia

#diferenças 
dif_ano = ano_atual - ano 
dif_mes = mes_atual - mes
dif_dia = dia_atual - dia


#condicionais e retorno sobre  a idade
if dif_ano >18:
    print("VOCE É MAIOR DE IDADE")
elif dif_ano <18:
    print("VOCE É MENOR DE IDADE")
elif dif_ano ==18:
    if mes_atual > mes:
        print ('VOCE É MAIOR DE IDADE')
    elif mes_atual< mes:
        print('VOCE É MENOR DE IDADE')
    else:
        if dia_atual >= dia: 
            print('VOCE É MAIOR DE IDADE')
        else:
            print('VOCE É MENOR DE IDADE')
            
