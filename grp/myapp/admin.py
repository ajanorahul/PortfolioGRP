from django.contrib import admin
from myapp. models import Category,Portfolio, About

# Register your models here.

admin.site.register(About)
admin.site.register(Category)
admin.site.register(Portfolio)