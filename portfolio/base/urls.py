from . import views
from django.urls import path

urlpatterns = [
  path('', views.home, name='home'),
  path('project1/', views.project1, name='project1'),
  path('project2/', views.project2, name='project2'),
]