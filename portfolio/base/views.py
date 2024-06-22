from django.shortcuts import render

# Create your views here.

def home(request):
  return render(request, 'web.html')

def project1(request):
  return render(request, 'project1.html')

def project2(request):
  return render(request, 'project2.html')