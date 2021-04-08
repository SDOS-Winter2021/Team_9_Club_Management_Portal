from rest_framework import serializers
from .models import *

class CLUBSerializer(serializers.ModelSerializer):
	class Meta:
		model=CLUB
		fields=('id','name','date_time','location','description','poster','approved','attendance','club_name','web_link')

class UsersSerializer(serializers.ModelSerializer):
	class Meta:
		model=Users
		fields=('id','email','group')

class CLUB_GENERALSerializer(serializers.ModelSerializer):
	class Meta:
		model=CLUB_GENERAL
		fields=('id','name','logo','club_email','description','coordinator1','coordinator1_email','coordinator2','coordinator2_email','coordinator3','coordinator3_email','fb_link','ig_link','website_link')
