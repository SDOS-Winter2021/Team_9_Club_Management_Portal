from rest_framework import serializers
from .models import *

class CLUBSerializer(serializers.ModelSerializer):
	class Meta:
		model=CLUB
		fields=('id','name','date_time','location','description','poster','payment_receipt_student','payment_receipt_reimburse','approved','attendance','club_name')

class UsersSerializer(serializers.ModelSerializer):
	class Meta:
		model=Users
		fields=('id','email','group')

class CLUB_GENERALSerializer(serializers.ModelSerializer):
	class Meta:
		model=CLUB_GENERAL
		fields=('id','name','description','coordinator1','coordinator1_email','coordinator2','coordinator2_email','coordinator3','coordinator3_email','fb_link','ig_link','website_link')

