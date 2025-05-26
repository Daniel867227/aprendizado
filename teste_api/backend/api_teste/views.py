from django.shortcuts import render
from . models import Produtos
from . serializer import ProdutoSerializer
from rest_framework.response import Response
from rest_framework import status

import json
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def todos_produtos(request):
    
    print('errooooo')
    if request.method == 'GET':
        
        produtos = Produtos.objects.all()
        
        serializer = ProdutoSerializer(produtos, many=True)

        
        print('erro01')
        return Response(serializer.data)
    

    if request.method == 'POST':
        print('erro02')
        print(request.data)
        novoProduto = request.data

        serializer = ProdutoSerializer(data=novoProduto)

        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
    return Response(status=status.HTTP_404_NOT_FOUND)
