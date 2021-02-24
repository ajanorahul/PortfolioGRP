from django.urls import path

from front import views

urlpatterns = [
    path('', views.index, name='index'),
    # path(r'category/(?p<slug>[-\w]+)/$', views.index, name='index')
]