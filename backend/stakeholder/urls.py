from django.urls import path
from django.conf.urls import url
from stakeholder import views
from django.views.decorators.csrf import csrf_exempt
urlpatterns = [
    path('', views.home, name="homepage"),
    url(r'^api/clubs$',views.CLUB_LIST),#list all club events which are approved it is passed a parameter 'name' which is name of club
    url(r'^api/clubs/(?P<pk>[0-9]+)$',views.CLUB_DETAIL),# lists a particular event by id, this id is the number associated with each entry in Monogodb
    url(r'^api/clubs/unapproved$',views.CLUB_EVENT_PENDING), # lists all unapproved events from a given club
    url(r'^api/clubs/upcoming$',views.CLUB_UPCOMING),
    url(r'^api/user/login$', csrf_exempt(views.USERS)),

]