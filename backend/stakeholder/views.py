from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from rest_framework import viewsets
from rest_framework.parsers import FileUploadParser
from .models import CLUB, USER_DETAILS
from .serializers import CLUBSerializer
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework import status
from rest_framework.decorators import api_view
import json
from datetime import datetime, timedelta
# Create your views here.
def home(request):
    return render(request, 'stakeholder/index.html')
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter  


@api_view(['GET'])
def CLUB_UPCOMING(request):
	today=datetime.now().date()
	future=datetime.now().date()+timedelta(days=3)
	if(request.method=='GET'):
		clubs=CLUB.objects.all()
		clubs=clubs.filter(date_time__gte=today,date_time__lt=future).order_by('date_time')[:10]
		club_serializer=CLUBSerializer(clubs,many=True)
		return JsonResponse(club_serializer.data,safe=False)

@api_view(['GET', 'POST'])
def CLUB_LIST(request):
	if(request.method=='GET'):
		clubs=CLUB.objects.all()
		name=request.GET.get('name',None)
		if(name is not None):
			clubs=clubs.filter(club_name__icontains=name)
			clubs=clubs.filter(approved=True)
		club_serializer=CLUBSerializer(clubs,many=True)
		return JsonResponse(club_serializer.data,safe=False)
	elif request.method=='POST':
		#club_data=JSONParser.parse(request)
		clubs=CLUB()
		parser_class=(FileUploadParser,)
		club_data=json.loads(request.data['request'])
		#print(club_data)
		print(request.data)
		club_serializer=CLUBSerializer(data=request.data)
		if('file' in request.data):
			f=request.data['file']
			clubs.payment_receipt_student.save(f.name,f,save=True)
		club_serializer=CLUBSerializer(clubs,data=club_data)
		#print("THIS IS DATA",club_data,club_serializer.is_valid())
		if(club_serializer.is_valid()):
			club_serializer.save()
			return JsonResponse(club_serializer.data, status=status.HTTP_201_CREATED)
		return JsonResponse(club_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
def CLUB_DETAIL(request,pk):
	try:
		clubs=CLUB.objects.get(pk=pk)
	except CLUB.DoesNotExist :
		return JsonResponse({'message: The given club does not exist'},status=status.HTTP_404_NOT_FOUND)
	if(request.method=='GET'):
		club_serializer=CLUBSerializer(clubs)
		return JsonResponse(club_serializer.data)
	elif request.method=='PUT':
		parser_class=(FileUploadParser,)
		club_data=json.loads(request.data['request'])
		if('file' in request.data):
			f=request.data['file']
			clubs.payment_receipt_student.save(f.name,f,save=True)
		club_serializer=CLUBSerializer(clubs,data=club_data)
		#print(club_serializer.is_valid(),club_data,type(club_data))
		#print(club_serializer.is_valid(),club_data)
		if(club_serializer.is_valid()):
			club_serializer.save()
			return JsonResponse(club_serializer.data)
		return JsonResponse(club_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def CLUB_EVENT_PENDING(request):
	if(request.method=='GET'):
		clubs=CLUB.objects.all()
		name=request.GET.get('name',None)
		if(name is not None):
			clubs=clubs.filter(club_name__icontains=name)
			clubs=clubs.filter(approved=False)
		club_serializer=CLUBSerializer(clubs,many=True)
		return JsonResponse(club_serializer.data,safe=False)

@api_view(['GET','PUT'])
def USERS(request):
	if request.method=='PUT':
		parser_class=(JSONParser,)
		user_data=json.loads(request.body.decode('utf-8'))
		users=USER_DETAILS.objects.all()
		return JsonResponse({"response":"1"})
		
	elif request.method=='GET':
		a="Dasd"
	#	u  = json.loads(request.data['request']


@api_view(['GET','PUT'])
def EVENTS(request):
	if request.method=='PUT':
		parser_class = (FormParser, MultiPartParser)
		print(request.data,type(request.data['Poster']))
		return JsonResponse({"response":"1"})