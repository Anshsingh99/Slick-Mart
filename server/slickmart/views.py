from django.shortcuts import render
from django.http import HttpResponse
from django.core.serializers import serialize
from.models import Product


def get(request):
    products = Product.objects.all()
    data = serialize('json', products, fields=('name', 'img_url', 'description', 'price', 'category'))
    return HttpResponse(data, content_type='application/json')
