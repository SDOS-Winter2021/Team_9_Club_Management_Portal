from django.http.response import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth.models import Group

# Create your views here.
def index(request, pk=None):
    if request.user.is_authenticated:
        if (request.user.groups.filter(name='Club_Coordinator').exists() and ('club' in request.get_full_path())) or (request.user.groups.filter(name='Student').exists()) or (request.user.groups.filter(name='Admin').exists() and 'admin' in request.get_full_path()):
            print( request.get_full_path()," is requested")
            return render(request, 'frontend/index.html')
        else:
            return HttpResponse('You are not authorized to view this page')
    else:
        return render(request, 'frontend/index.html')

def login(request):
    if request.user.is_authenticated:

        #first time login
        if len(request.user.groups.all())==0:
            if '@sc.iiitd' in request.user.email:
                request.user.groups.add(Group.objects.get(name='Club_Coordinator'))
                return HttpResponseRedirect('/clubform')
            else:
                request.user.groups.add(Group.objects.get(name='Student'))
                return HttpResponseRedirect('/student')

        #regular user
        elif request.user.groups.filter(name='Student').exists():
            return HttpResponseRedirect('/student')
        elif request.user.groups.filter(name='Club_Coordinator').exists():
            return HttpResponseRedirect('/club')
        elif request.user.groups.filter(name='Admin').exists():
            return HttpResponseRedirect('/club')
        
        else:
            return HttpResponseRedirect('/')           
    else:
        return HttpResponseRedirect('/accounts/google/login/?process=login')
