from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.parsers import FileUploadParser
from django.http import HttpResponseRedirect
from .models import *
from .serializers import *
from .utils import *

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework import status
from rest_framework.decorators import api_view
from django.views.generic import TemplateView
import json
from datetime import datetime, timedelta
from django.conf import settings

import os 
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.urls import reverse
import logging

# Create your views here.

logger = logging.getLogger(__name__)


def home(request):
    return render(request, 'backend/index.html')
# The foolowing api can be used to ge those event which are upcmoing within 2 days and it returns atmost 10 results
@api_view(['GET'])
def CLUB_UPCOMING(request):
	today=datetime.now().date()
	future=datetime.now().date()+timedelta(days=3)
	if(request.method=='GET'):
		clubs=CLUB.objects.all()
		clubs=clubs.filter(date_time__gte=today,date_time__lt=future).order_by('date_time')[:10]
		club_serializer=CLUBSerializer(clubs,many=True)
		return JsonResponse(club_serializer.data,safe=False)


# The following api can be used to approved events for a club with 'name',  this api can also be used to post new events with and without an initial image field
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
		parser_classes = (MultipartJsonParser,JSONParser)
		club_data=json.loads(request.data['request'])
		#print(club_data)
		print(request.data)
		#club_serializer=CLUBSerializer(data=request.data)
		if 'poster' in request.data:
			p=request.data['poster']
			clubs.poster.save(p.name,p,save=True)
		if('file' in request.data):
			f=request.data['file']

			clubs.payment_receipt_student.save(f.name,f,save=True)
		parser_class=(FormParser, MultiPartParser)
		#data_recv = request.data.copy()
		#data_recv.pop('Poster')
		#club_data=json.loads(json.dumps(data_recv))
		print(club_data,type(club_data))
		club_serializer=CLUBSerializer(clubs,data=club_data)
		#print("THIS IS DATA",club_data,club_serializer.is_valid())
		if(club_serializer.is_valid()):
			club_serializer.save()
			return JsonResponse(club_serializer.data, status=status.HTTP_201_CREATED)
		return JsonResponse(club_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# The follwoing api can be used to get a particlar event and can also be used to edit a particular evet.
@api_view(['GET', 'PUT','DELETE'])
def CLUB_DETAIL(request,pk):
	try:
		clubs=CLUB.objects.get(pk=pk)
	except CLUB.DoesNotExist :
		return JsonResponse({'message: The given club does not exist'},status=status.HTTP_404_NOT_FOUND)
	if(request.method=='GET'):
		club_serializer=CLUBSerializer(clubs)
		return JsonResponse(club_serializer.data)
	elif request.method=='PUT':
		parser_classes = (MultipartJsonParser,JSONParser)
		club_data=json.loads(request.data['request'])
		if 'poster' in request.data:
			p=request.data['poster']
			clubs.poster.save(p.name,p,save=True)
		if('file' in request.data):
			f=request.data['file']
			clubs.payment_receipt_student.save(f.name,f,save=True)
		if('reimburse' in request.data):
			r=request.data['reimburse']
			clubs.payment_receipt_reimburse(r.name,r,save=True)
		club_serializer=CLUBSerializer(clubs,data=club_data)
		if(club_serializer.is_valid()):
			club_serializer.save()
			return JsonResponse(club_serializer.data)
		return JsonResponse(club_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	elif request.method=='DELETE':
		clubs.delete()
		return JsonResponse({'message': 'EVENT was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

# The follwoing api can be used to get all the events which are not approved.
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

@api_view(['GET','POST'])
def CLUB_GENERAL_ADD(request):
	if(request.method=='GET'):
		club_general=CLUB_GENERAL.objects.all()
		club_general_serializer=CLUB_GENERALSerializer(club_general,many=True)
		return JsonResponse(club_general_serializer.data,safe=False)
	elif request.method=='POST':
		clubdata = json.loads(request.data)
		print(clubdata, type(clubdata), "Request to Add club")
		club_general_serializer=CLUB_GENERALSerializer(data=clubdata)
		if(club_general_serializer.is_valid()):
			club_general_serializer.save()
			return JsonResponse(club_general_serializer.data,status=status.HTTP_201_CREATED)
		return JsonResponse(club_general_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT','DELETE'])
def CLUB_GENERAL_ID(request,pk):
	try:
		club_general=CLUB_GENERAL.objects.get(pk=pk)
	except:
		return JsonResponse({'message: The given club doenot exist'},status=status.HTTP_404_NOT_FOUND)
	if(request.method=='GET'):
		club_general_serializer=CLUB_GENERALSerializer(club_general)
		return JsonResponse(club_general_serializer.data)
	elif request.method=='PUT':
		club_general_serializer=CLUB_GENERALSerializer(club_general,data=request.data)
		if(club_general_serializer.is_valid()):
			club_general_serializer.save()
			return JsonResponse(club_general_serializer.data)
		return JsonResponse(club_general_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	elif request.method=='DELETE':
		club_general.delete()
		return JsonResponse({'message': 'Club was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','POST'])
def ADD_USERS(request):
	if(request.method=='GET'):
		users=Users.objects.all()
		users_serializer=UsersSerializer(users,many=True)
		return JsonResponse(users_serializer.data,safe=False)
	elif request.method=='POST':
		users_serializer=UsersSerializer(data=request.data)
		if(users_serializer.is_valid()):
			users_serializer.save()
			return JsonResponse(users_serializer.data,status=status.HTTP_201_CREATED)
		return JsonResponse	(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def USERS_ID(request,pk):
	try:
		users=Users.objects.get(pk=pk)
	except:
		return JsonResponse({'message: The given USER doenot exist'},status=status.HTTP_404_NOT_FOUND)
	if(request.method=='GET'):
		users_serializer=UsersSerializer(users)
		return JsonResponse(users_serializer.data)
	elif request.method=='PUT':
		users_serializer=UsersSerializer(users,data=request.data)
		if(users_serializer.is_valid()):
			users_serializer.save()
			return JsonResponse(users_serializer.data)
		return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	elif request.method=='DELETE':
		users.delete()
		return JsonResponse({'message': 'User was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)