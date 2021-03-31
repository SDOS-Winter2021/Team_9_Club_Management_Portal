from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.parsers import FileUploadParser
from django.http import HttpResponseRedirect
from .models import CLUB,Users,CLUB_GENERAL,GoogleCredentials
from .serializers import CLUBSerializer,UsersSerializer,CLUB_GENERALSerializer
from .utils import MultipartJsonParser

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework import status
from rest_framework.decorators import api_view
from django.views.generic import TemplateView
import json
from datetime import datetime, timedelta
from django.conf import settings

import google.oauth2.credentials
import google_auth_oauthlib.flow
import google_auth_oauthlib
from google.oauth2 import service_account
from oauthlib.oauth2 import WebApplicationClient
from google.auth.transport.requests import AuthorizedSession
import os 
from requests_oauthlib import OAuth2Session
from oauthlib.oauth2 import BackendApplicationClient
from google_auth_oauthlib.flow import Flow
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.urls import reverse
import googleapiclient.discovery
import logging
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

logger = logging.getLogger(__name__)


def home(request):
    return render(request, 'stakeholder/index.html')
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
		data_recv = request.data.copy()
		data_recv.pop('Poster')
		club_data=json.loads(json.dumps(data_recv))
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
		club_general_serializer=CLUB_GENERALSerializer(data=request.data)
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

# @api_view(['GET','PUT'])
# def USERS(request):
# 	print(request.user)
# 	os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
# 	API_SCOPE = ['https://www.googleapis.com/auth/calendar.events','https://www.googleapis.com/auth/userinfo.profile']
# 	JSON_PATH = settings.GOOGLE_OAUTH2_CLIENT_SECRETS_JSON
# 	print(JSON_PATH)
# 	REDIRECT_URL = "http://localhost:3000/"
# 	REDIRECT_URL2 = "http://127.0.0.1:8000/api/user/login"
# 	flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file( JSON_PATH, scopes=API_SCOPE)
# 	flow.redirect_uri = REDIRECT_URL2
# 	if request.method=='PUT':
# 		parser_class=(JSONParser,)
# 		auth_url, _ = flow.authorization_url(prompt=None)
# 		return JsonResponse({"response":auth_url})
		
# 	elif request.method=='GET':
# 		users=USER_DETAILS()
# 		print("got this bitches,",request.query_params.get('code'))
# 		print()
# 		flow.fetch_token(code=request.query_params.get('code'))
# 		credentials=flow.credentials
# 		#temp = { 'token': credentials.token, 'refresh_token': credentials.refresh_token, 'id_token':credentials.id_token, 'token_uri': credentials.token_uri, 'client_id': credentials.client_id, 'client_secret': credentials.client_secret, 'scopes': credentials.scopes, }
# 		session = flow.authorized_session()
# 		user_details = session.get('https://www.googleapis.com/userinfo/v2/me').json()
# 		to_store = {'refresh_token':credentials.refresh_token,'access_token':credentials.token,'google_id':user_details['id'],'name':user_details['name']}
# 		print(to_store)
# 		users_serializer=USER_DETAILS_Serializer(users,data=to_store)
# 		if(users_serializer.is_valid()):
# 			users_serializer.save()
# 		response = redirect('http://localhost:3000/home')
# 		return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@login_required
def authorize(request):
	# if request.user is not None or not requst.user.is_anonymous:
	# 	print(request.user)
	# 	return oauth2callback(request)
	authorization_url, state = _get_authorization_url(request)
	request.session['state'] = state
	print("GEnerated this")
	return redirect(authorization_url)
 
@login_required
@api_view(['GET'])
def oauth2callback(request):
	if(request.method=='GET'):
		print("INHER")
		flow = _get_flow(request, state=request.session['state'])
		print("THIS IS REQUEST: ",request)
		flow.fetch_token(code=request.GET.get('code'))
		_save_credentials(user=request.user, credentials=flow.credentials)
		return render(request, 'stakeholder/index.html')

@login_required
def create_meeting(request):
    # Retrieve the user's credentials from the database, redirecting
    # to the authorization page if none are found
    credentials = _get_credentials(user=request.user)
    if not credentials:
        return redirect(to=reverse('authorize'))

    calendar = googleapiclient.discovery.build(
        GOOGLE_OAUTH2_API_SERVICE_NAME, GOOGLE_OAUTH2_API_VERSION, credentials=credentials)
    calendars = calendar.calendarList().list().execute()
    return JsonResponse(calendars)

def _get_credentials(user):
    """
    Retrieve a user's google.oauth2.credentials.Credentials from the database.
    """
    try:
        _credentials = GoogleCredentials.objects.get(user=user)
    except GoogleCredentials.DoesNotExist:
        return
    return google.oauth2.credentials.Credentials(**_credentials.to_dict())


def _save_credentials(user, credentials):
    """
    Store a user's google.oauth2.credentials.Credentials in the database.
    """
    print("HERE IA AM",user,credentials.refresh_token,credentials)
    gc, _ = GoogleCredentials.objects.get_or_create(user=user)
    gc.update_from_credentials(credentials)

def _get_authorization_url(request):
    flow = _get_flow(request)

    # Generate URL for request to Google's OAuth 2.0 server
    return flow.authorization_url(
        # Enable offline access so that you can refresh an access token without
        # re-prompting the user for permission. Recommended for web server apps.
        access_type='offline',
        # Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes='true')


def _get_flow(request, **kwargs):
    # Use the information in the client_secret.json to identify
    # the application requesting authorization.
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        settings.GOOGLE_OAUTH2_CLIENT_SECRETS_JSON,
        scopes=settings.GOOGLE_OAUTH2_SCOPES,
        **kwargs)

    # Indicate where the API server will redirect the user after the user completes
    # the authorization flow. The redirect URI is required.
    flow.redirect_uri ="http://127.0.0.1:8000/api/user/save"
    return flow

