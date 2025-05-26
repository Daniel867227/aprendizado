from django.db import models

class Produtos(models.Model):
    nome = models.CharField(max_length=200, default='')
    preco = models.CharField(max_length=200, default='')

    def __str__(self):
        return f'nome:{self.nome}'
