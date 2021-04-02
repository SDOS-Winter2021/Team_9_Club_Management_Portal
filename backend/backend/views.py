from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from django.contrib.auth.models import Group, User

# Create your views here.
def loginPage(request):
    print("post method")
    if request.user.is_authenticated:
        if request.user.groups.name==None:
            #if club id is used then clubs view is given
            if "sc.iiitd" in request.user.email:
                request.user.groups.add(Group.objects.get(name='clubs'))
            #else everyone is student
            else:
                request.user.groups.add(Group.objects.get(name='students'))
        group = None
        if request.user.groups.exists():
            group = request.user.groups.all()[0].name
        if group == 'students':
            return HttpResponseRedirect('/front_student')           
        elif group == 'clubs':
            return HttpResponseRedirect('/front_club')
        elif group == 'admin':
            return HttpResponseRedirect('/front_administration')
        else:
            return HttpResponseRedirect('/')
    return HttpResponseRedirect('/')