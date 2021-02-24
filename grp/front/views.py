from django.shortcuts import render,get_object_or_404
from .models import About, Category , Portfolio

# Create your views here.
from django.http import HttpResponse

def index(request):
    
    aboutset = About.objects.all()
    categories = Category.objects.all()
    portfolio=Portfolio.objects.all()



    # category = get_object_or_404(Category, slug = slug)
    # portfolio = Portfolio.objects.filter(category =category)
    # categories = Category.objects.all()


    # portfolio=Portfolio.objects.all()
    
    



    # print(request.GET)
    # portfolio = None
    # categoryID = request.GET.get('category')
    # if categoryID:
    #     portfolio = Portfolio.get_all_portfolio_by_id(categoryID)

    # else:
    #     portfolio = Portfolio.objects.all()




    
   

    context = {
        'aboutset':aboutset,
        'categories':categories,
        'portfolio':portfolio,
    }
    return render(request, 'index.html',context)


    # def portfolio_detail(request,id):
    #     portfolio = get_object_or_404(Portfolio,id=id)

    #     context = {
    #         'portfolio':portfolio,
    #     }
    #     return render(request,'portfolio_detail.html', context)