from django.db import models

# Create your models here.


# club models here
class CLUB(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="club/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="club/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)
    Club_name=models.CharField(max_length=100,blank=False)

class Users(models.Model):
    Email=models.CharField(max_length=100,blank=False)
    group=models.CharField(max_length=100,blank=False)


class CLUB_GENERAL(models.Model):
    Name=models.CharField(max_length=100,blank=False)
    Description=models.TextField(blank=False)
    Coordinator1=models.CharField(max_length=100,blank=False)
    Corrdinator1_email=models.CharField(max_length=100,blank=False)
    Coordinator2=models.CharField(max_length=100)
    Corrdinator2_email=models.CharField(max_length=100)
    Coordinato3=models.CharField(max_length=100)
    Corrdinator3_email=models.CharField(max_length=100)
    FB_link=models.URLField(max_length=200)
    IG_link=models.URLField(max_length=200)
    Website_link=models.URLField(max_length=200)




     