from django.shortcuts import render

# Create your views here.
def index(request):
    print("gone here")
    return render(request, 'frontend/index.html')