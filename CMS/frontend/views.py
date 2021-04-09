from django.http.response import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth.models import Group

# Create your views here.
def index(request, pk=None):
    print(request.user, len(request.user.groups.all()))
    if request.user.is_authenticated:
        return render(request, "frontend/index.html")
    else:
        return HttpResponseRedirect("/accounts/google/login/?process=login")


def login(request):
    print("LOGGINF HERE", request.user.groups.all())
    print(request.user.is_authenticated, " is Authenticated")
    if request.user.is_authenticated:
        return HttpResponseRedirect("/student/")
    else:
        return HttpResponseRedirect("/accounts/google/login/?process=login")
