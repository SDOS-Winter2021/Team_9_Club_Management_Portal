from django.http.response import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect

# Create your views here.
def index(request, pk=None):
        return render(request, 'frontend/index.html')

def login(request):
    if request.user.is_authenticated:
        return redirect('index')
    else:
        return HttpResponseRedirect('accounts/login')
