from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.home, name="homepage"),
    url(r'^clubs$',views.CLUB_LIST),#list all club events which are approved it is passed a parameter 'name' which is name of club
    url(r'^clubs/(?P<pk>[0-9]+)$',views.CLUB_DETAIL),# lists a particular event by id, this id is the number associated with each entry in Monogodb
    url(r'^clubs/unapproved$',views.CLUB_EVENT_PENDING), # lists all unapproved events from a given club
    url(r'^clubs/upcoming$',views.CLUB_UPCOMING),
    url(r'^clubinfo$',views.CLUB_GENERAL_ADD),
    url(r'^clubinfo/(?P<pk>[0-9]+)$',views.CLUB_GENERAL_ID),
    url(r'^users$',views.ADD_USERS),
    url(r'^users/(?P<pk>[0-9]+)$',views.USERS_ID),
]