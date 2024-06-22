from django.shortcuts import render, redirect
from .models import ContactMessage
# Create your views here.

def home(request):
  if request.method == 'POST':
    # Process form submission
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    email = request.POST.get('email')
    subject = request.POST.get('subject')
    message = request.POST.get('message')
    
    entry = ContactMessage(first_name=first_name, last_name=last_name, email=email, subject=subject, message=message)
    entry.save()
    
    return redirect('home')
  else:
    return render(request, 'web.html')

def project1(request):
  return render(request, 'project1.html')

def project2(request):
  return render(request, 'project2.html')