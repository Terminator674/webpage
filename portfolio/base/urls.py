from . import views
from django.urls import path

urlpatterns = [
  path('', views.home, name='home'),
  path('project1.html/', views.project1, name='project1'),
  path('project2.html/', views.project2, name='project2'),
]