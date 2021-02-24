# from django.shortcuts import render,get_object_or_404
# from .models import About, Category , Portfolio

# # Create your views here.
# from django.http import HttpResponse

# def index(request):

#     aboutset = About.objects.all()
#     # categories = Category.objects.all()

#     # category = get_object_or_404(Category,slug=slug)
#     # port = Photo.objects.filter(category=category)
   

#     context = {
#         'aboutset':aboutset,
#         # 'categories':categories,
        
#     }
#     return render(request, 'index.html',context)