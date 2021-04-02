from django.db.models import fields
from rest_framework import serializers
from .models import *
 
class StakeholderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stakeholder
        fields = '__all__'

class Club_EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club_Event
        fields = '__all__'

class Club_DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club_Detail
        fields = '__all__'