from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from rest_framework import viewsets
from .models import CLUB
from .serializers import CLUBSerializer
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
# Create your views here.
def home(request):
    return render(request, 'stakeholder/index.html')
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter  
      
def CLUB_LIST(request):
	if(request.method=='GET'):
		clubs=CLUB.objects.all()
		name=request.GET.get('name',None)
		if(name is not None):
			clubs=clubs.filter(club_name__icontains=name)
			clubs=clubs.filter(approved=True)
		club_serializer=CLUBSerializer(clubs,many=True)
		return JsonResponse(club_serializer.data,safe=False)
def CLUB_DETAIL(request,pk):
	try:
		clubs=CLUB.objects.get(pk=pk)
	except CLUB.DoesNotExist :
		return JsonResponse({'message: The given club doenot exist'},status=status.HTTP_404_NOT_FOUND)
	if(request.method=='GET'):
		club_serializer=CLUBSerializer(clubs)
		return JsonResponse(club_serializer.data)
	elif request.method=='PUT':
		club_data=JSONParser().jparse(request)
		club_serializer=CLUBSerializer(clubs,data=club_data)
		if(club_serializer.is_valid()):
			club_serializer.save()
			return JsonResponse(club_serializer.data)
		return JsonResponse(club_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def CLUB_EVENT_PENDING(request):
	if(request.method=='GET'):
		clubs=CLUB.objects.all()
		name=request.GET.get('name',None)
		if(name is not None):
			clubs=clubs.filter(club_name__icontains=name)
			clubs=clubs.filter(approved=False)
		club_serializer=CLUBSerializer(clubs,many=True)
		return JsonResponse(club_serializer.data,safe=False)

