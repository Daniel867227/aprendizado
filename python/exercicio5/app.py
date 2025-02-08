#Faça um programa para o cálculo de uma folha de pagamento, 
# sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 
# 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).
#  O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e 
# a quantidade de horas trabalhadas no mês.

#Desconto do IR:
#Salário Bruto até 900 (inclusive) - isento
#Salário Bruto até 1500 (inclusive) - desconto de 5%
#Salário Bruto até 2500 (inclusive) - desconto de 10%
#Salário Bruto acima de 2500 - desconto de 20% 
# 
# Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
#        Salário Bruto: (5 * 220)        : R$ 1100,00
#        (-) IR (5%)                     : R$   55,00  
#        (-) INSS ( 10%)                 : R$  110,00
#        FGTS (11%)                      : R$  121,00
#        Total de descontos              : R$  165,00
#        Salário Liquido                 : R$  935,00
while True:
    valor_hora = float(input('DIGITE O VALOR DA HORA  DE TRABALHO: '))

    horas_trabalho =220
    salario_bruto = valor_hora * horas_trabalho
    salario_imp5 = salario_bruto * 0.05
    salario_imp10 = salario_bruto * 0.10
    salario_imp20 = salario_bruto * 0.20
    salario_inss = salario_bruto * 0.10




    if salario_bruto <= 900:
        salario_bruto = salario_bruto
        salario_liquido = salario_bruto - salario_inss
        print('Salário Bruto:(horas * 220):',salario_liquido) 
        print('(-) IR (5%):',salario_inss)


    if salario_bruto>900 and salario_bruto<=1500:
        salario_liquido = salario_bruto - salario_imp5 - salario_inss
        print('Salário Bruto:(horas * 220):',salario_liquido) 
        print('(-) IR (5%):',salario_imp5)
