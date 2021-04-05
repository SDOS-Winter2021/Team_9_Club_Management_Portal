from django.db import models

# Create your models here.

# club models here
class CLUB(models.Model):    
    name = models.CharField(max_length=100, blank=False)
    date_time = models.DateTimeField(blank=False)
    location = models.CharField(max_length=200, blank=False)
    description = models.TextField(blank=False)
    poster=models.ImageField(upload_to="club/posters",blank=True)
    payment_receipt_student = models.FileField(upload_to="club/student/payment_receipt",blank=True)
    payment_receipt_reimburse=models.FileField(upload_to="club/office/payment_receipt",blank=True)
    approved = models.BooleanField(default=False, blank=False)
    attendance = models.IntegerField(default=0)
    club_name=models.CharField(max_length=100,blank=False)

class Users(models.Model):
    email=models.CharField(max_length=100,blank=False)
    group=models.CharField(max_length=100,blank=False)

class CLUB_GENERAL(models.Model):
    name=models.CharField(max_length=100,blank=False)
    description=models.TextField(blank=False)
    coordinator1=models.CharField(max_length=100,blank=False)
    coordinator1_email=models.CharField(max_length=100,blank=False)
    coordinator2=models.CharField(max_length=100,blank=True)
    coordinator2_email=models.CharField(max_length=100,blank=True)
    coordinator3=models.CharField(max_length=100,blank=True)
    coordinator3_email=models.CharField(max_length=100,blank=True)
    fb_link=models.URLField(max_length=200,blank=True)
    ig_link=models.URLField(max_length=200,blank=True)
    website_link=models.URLField(max_length=200,blank=True)