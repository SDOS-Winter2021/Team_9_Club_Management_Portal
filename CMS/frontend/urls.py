from django.urls import path
from django.conf.urls import url
from . import views


urlpatterns = [
    path('', views.index ),
    path('home/', views.index ),
    path('login/', views.login ),
    path('student/', views.index ),
    path('form/', views.index ),
    path('clubform/', views.index ),
    url(r'^(club)', views.index ),
    url(r'^event/(?P<pk>[0-9]+)$', views.index),
]