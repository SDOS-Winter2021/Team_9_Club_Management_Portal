from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Stakeholder(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200, unique=True)
    owner = models.ForeignKey(User, related_name="Stakeholder", on_delete=models.CASCADE)

class Club_Event(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt = models.ImageField(upload_to="clubs/payment_receipt", blank=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)

class Club_Detail(models.Model):
    Name=models.CharField(max_length=100, unique=True)
    Description=models.TextField(blank=False)
    Coordinator1=models.CharField(max_length=100)
    Corrdinator1_email=models.CharField(max_length=100)
    Coordinator2=models.CharField(max_length=100)
    Corrdinator2_email=models.CharField(max_length=100)
    Coordinator3=models.CharField(max_length=100)
    Corrdinator3_email=models.CharField(max_length=100)
    FB_link=models.URLField(max_length=200)
    IG_link=models.URLField(max_length=200)
    Website_link=models.URLField(max_length=200)