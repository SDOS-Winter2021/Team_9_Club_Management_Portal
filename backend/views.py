from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.parsers import FileUploadParser
from django.http import HttpResponseRedirect, request
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
from django.contrib.auth.models import Group

# Create your views here.

logger = logging.getLogger(__name__)


def home(request):
    return render(request, "backend/index.html")


# The foolowing api can be used to ge those event which are upcmoing within 2 days and it returns atmost 10 results
@login_required(login_url="/login")
@api_view(["GET"])
def CLUB_UPCOMING(request):
    today = datetime.now().date()
    future = datetime.now().date() + timedelta(days=3)
    if request.method == "GET":
        clubs = CLUB.objects.all()
        clubs = clubs.filter(date_time__gte=today, date_time__lt=future).order_by(
            "date_time"
        )[:10]
        club_serializer = CLUBSerializer(clubs, many=True)
        return JsonResponse(club_serializer.data, safe=False)


# The following api can be used to approved events for a club with 'name',  this api can also be used to post new events with and without an initial image field
@api_view(["GET", "POST"])
def CLUB_LIST(request):
    if request.method == "GET":
        clubs = CLUB.objects.all()
        name = request.GET.get("name", None)
        if name is not None:
            clubs = clubs.filter(club_name__icontains=name)
            clubs = clubs.filter(approved=True)
        club_serializer = CLUBSerializer(clubs, many=True)
        return JsonResponse(club_serializer.data, safe=False)
    elif request.method == "POST":
        # club_data=JSONParser.parse(request)
        clubs = CLUB()
        parser_classes = (MultipartJsonParser, JSONParser)
        club_data = json.loads(request.data["request"])
        # print(club_data)
        print(request.data, type(request.data), type(request.data["request"]))
        # club_serializer=CLUBSerializer(data=request.data)
        if "poster" in request.data and request.data["poster"]:
            p = request.data["poster"]
            clubs.poster.save(p.name, p, save=True)
        print(club_data, type(club_data))
        club_serializer = CLUBSerializer(clubs, data=club_data)
        # print("THIS IS DATA",club_data,club_serializer.is_valid())
        if club_serializer.is_valid():
            club_serializer.save()
            return JsonResponse(club_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(club_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# The follwoing api can be used to get a particlar event and can also be used to edit a particular evet.
@api_view(["GET", "PUT", "DELETE"])
def CLUB_DETAIL(request, pk):
    try:
        clubs = CLUB.objects.get(pk=pk)
    except CLUB.DoesNotExist:
        return JsonResponse(
            {"message: The given club does not exist"}, status=status.HTTP_404_NOT_FOUND
        )
    if request.method == "GET":
        club_serializer = CLUBSerializer(clubs)
        return JsonResponse(club_serializer.data)
    elif request.method == "PUT":
        parser_classes = (MultipartJsonParser, JSONParser)
        club_data = json.loads(request.data["request"])
        print(request.data, type(request.data), type(request.data["request"]))
        if "poster" in request.data and request.data["poster"]:
            clubs.poster.delete(save=True)
            p = request.data["poster"]
            clubs.poster.save(p.name, p, save=True)
        club_serializer = CLUBSerializer(clubs, data=club_data)
        if club_serializer.is_valid():
            club_serializer.save()
            return JsonResponse(club_serializer.data)
        print(club_serializer.errors)
        return JsonResponse(club_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        clubs.poster.delete(save=True)
        clubs.delete()
        return JsonResponse(
            {"message": "EVENT was deleted successfully!"},
            status=status.HTTP_204_NO_CONTENT,
        )


# The follwoing api can be used to get all the events which are not approved.
@api_view(["GET"])
def CLUB_EVENT_PENDING(request):
    if request.method == "GET":
        clubs = CLUB.objects.all()
        name = request.GET.get("name", None)
        if name is not None:
            clubs = clubs.filter(club_name__icontains=name)
            clubs = clubs.filter(approved=False)
        club_serializer = CLUBSerializer(clubs, many=True)
        return JsonResponse(club_serializer.data, safe=False)

# The follwoing api can be used to get all the events which are approved.
@api_view(["GET"])
def CLUB_EVENT_APPROVED(request):
    if request.method == "GET":
        clubs = CLUB.objects.all()
        name = request.GET.get("name", None)
        if name is not None:
            clubs = clubs.filter(club_name__icontains=name)
            clubs = clubs.filter(approved=True)
        club_serializer = CLUBSerializer(clubs, many=True)
        return JsonResponse(club_serializer.data, safe=False)



# @login_required(login_url="/login")
@api_view(["GET", "POST"])
def CLUB_GENERAL_ADD(request):
    print("Got in CLUBGENERATLADD")
    print(request.data, "request")
    if request.method == "GET":
        club_general = CLUB_GENERAL.objects.all()
        club_general_serializer = CLUB_GENERALSerializer(club_general, many=True)
        return JsonResponse(club_general_serializer.data, safe=False)
    elif request.method == "POST":
        print("IN POST CLUB GENErAL")
        parser_classes = (MultipartJsonParser, JSONParser)
        clubdata = json.loads(request.data["request"])
        print(request.data["request"], "CLUBDATA INSIDE")
        club_general = CLUB_GENERAL()
        print(clubdata, type(clubdata), "Request to Add club")
        if "logo" in request.data and request.data["logo"]:
            p = request.data["logo"]
            club_general.logo.save(p.name, p, save=True)
        club_general_serializer = CLUB_GENERALSerializer(club_general, data=clubdata)
        if club_general_serializer.is_valid():
            club_general_serializer.save()
            return JsonResponse(
                club_general_serializer.data, status=status.HTTP_201_CREATED
            )
        return JsonResponse(
            club_general_serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )


@api_view(["GET", "PUT", "DELETE"])
def CLUB_GENERAL_ID(request, pk):
    try:
        club_general = CLUB_GENERAL.objects.get(pk=pk)
    except:
        return JsonResponse(
            {"message: The given club doenot exist"}, status=status.HTTP_404_NOT_FOUND
        )
    if request.method == "GET":
        club_general_serializer = CLUB_GENERALSerializer(club_general)
        return JsonResponse(club_general_serializer.data)
    elif request.method == "PUT":
        club_general_serializer = CLUB_GENERALSerializer(
            club_general, data=request.data
        )
        if club_general_serializer.is_valid():
            club_general_serializer.save()
            return JsonResponse(club_general_serializer.data)
        return JsonResponse(
            club_general_serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )
    elif request.method == "DELETE":
        club_general.delete()
        return JsonResponse(
            {"message": "Club was deleted successfully!"},
            status=status.HTTP_204_NO_CONTENT,
        )


@api_view(["GET", "POST"])
def ADD_USERS(request):
    if request.method == "GET":
        users = Users.objects.all()
        users_serializer = UsersSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)
    elif request.method == "POST":
        users_serializer = UsersSerializer(data=request.data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse(users_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def USERS_ID(request, pk):
    try:
        users = Users.objects.get(pk=pk)
    except:
        return JsonResponse(
            {"message: The given USER doenot exist"}, status=status.HTTP_404_NOT_FOUND
        )
    if request.method == "GET":
        users_serializer = UsersSerializer(users)
        return JsonResponse(users_serializer.data)
    elif request.method == "PUT":
        users_serializer = UsersSerializer(users, data=request.data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse(users_serializer.data)
        return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        users.delete()
        return JsonResponse(
            {"message": "User was deleted successfully!"},
            status=status.HTTP_204_NO_CONTENT,
        )


@api_view(["PUT"])
def approve_event(request, pk):
    try:
        clubs = CLUB.objects.get(pk=pk)
    except CLUB.DoesNotExist:
        return JsonResponse(
            {"message: The given club does not exist"}, status=status.HTTP_404_NOT_FOUND
        )
    if request.method == "PUT":
        clubs.approved = True
        clubs.save()
        return JsonResponse(
            {"message": "event approved"}, status=status.HTTP_201_CREATED
        )


@api_view(["GET"])
def USER_INFO(request):
    print("ADDING user: ", request.user, "to a group")
    if request.method == "GET":
        if request.user.is_authenticated:
            user = request.user
            okuser = ""
            if len(request.user.groups.all()) == 0:
                alluser = Users.objects.all()
                alluser = alluser.filter(email__icontains=request.user.email)
                if alluser:
                    okuser = alluser.values("club_name")[0]["club_name"]
                    print(okuser, "OKUSER")
                    gr = alluser.values("group")[0]["group"]
                    request.user.groups.add(Group.objects.get(name=gr))
                else:
                    request.user.groups.add(Group.objects.get(name="Student")) 
            else:
                alluser = Users.objects.all()
                alluser = alluser.filter(email__icontains=request.user.email)
                if alluser:
                    okuser = alluser.values("club_name")[0]["club_name"]

            return JsonResponse(
                {
                    "name": user.get_username(),
                    "user_club_name": okuser,
                    "email": user.email,
                    "group": str(user.groups.all()[0]),
                    "is_authenticated": user.is_authenticated,
                }
            )
        else:
            return JsonResponse({"is_authenticated": request.user.is_authenticated})