from django.db import models

# Create your models here.
class Club_Events(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt = models.ImageField(upload_to="clubs/payment_receipt")
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)
