from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

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
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter    