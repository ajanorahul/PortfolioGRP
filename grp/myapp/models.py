from django.db import models

# Create your models here.

class About(models.Model):
    experience = models.IntegerField()
    project = models.IntegerField()
    design = models.IntegerField()

 

class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=100,unique=True)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.name

    

class Portfolio(models.Model):
    portfolio_name = models.ForeignKey(Category, on_delete=models.CASCADE)
    portfolio_title = models.CharField(max_length=100)
    portfolio_subtitle = models.CharField(max_length=100)
    portfolio_image = models.ImageField(upload_to = 'pics')
    portfolio_detail = models.TextField(max_length=500)
    featured = models.BooleanField()

    def __str__(self):
        return self.portfolio_title