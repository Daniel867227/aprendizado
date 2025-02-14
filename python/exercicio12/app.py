def contador(inicio,passo,fim):
    if passo<0:
        passo = passo*(-1)

    if inicio<fim:

        cont = inicio
        while cont <= fim:
            print(cont)
            cont += passo
        
    
    if passo<0:
        passo = passo *(-1)

    if inicio>fim:

        cont = inicio
        while cont >=fim:
            print(cont)
            cont -= passo
            


contador(1,1,10)
print('________________________________________________________--')
print('')
contador(10,2,0)

i=int(input('CONTAR A PARTIR DE QUAL NUMERO?'))
p=int(input('CONTAR DE QUANTO EM QUANTO? '))
f=int(input('CONTAR ATÉ QUAL NUMERO? '))

contador(i,p,f)