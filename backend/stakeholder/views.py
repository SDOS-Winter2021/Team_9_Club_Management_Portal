from django.shortcuts import render

# Create your views here.
def home(request):
    # data = {
    #     'hero_banner': hero_banner.objects.all(),
    #     'member': lab_member.objects.all(),
    #     'publication': publications.objects.all(),
    #     'gallery': gallery.objects.all(),
    #     'web_server': web_server.objects.all()
    # }
    return render(request, 'stakeholder/index.html')