from rest_framework import serializers
from .models import CLUB

class CLUBSerializer(serializers.ModelSerializer):
	class Meta:
		model=CLUB
		fields=('id','name','date_time','location','description','payment_receipt_student','payment_receipt_reimburse','approved','attendance','club_name')