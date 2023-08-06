from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=50)
    img_url = models.CharField(max_length=500)
    description = models.TextField()
    price = models.CharField(max_length=10)
    category = models.CharField(max_length=100)
    
