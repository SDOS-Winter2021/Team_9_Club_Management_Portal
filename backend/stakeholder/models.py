from django.db import models

# Create your models here.


#biobytes models here
class BIOBYTES(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="biobytes/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="biobytes/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)

#foobar model here
class FOOBAR(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="foobar/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="foobar/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)

#byld model here
class BYLD(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="byld/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="byld/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0) 

#astronots model here
class ASTRONUTS(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="astronuts/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="astronuts/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)

#audiobytes model here
class AUDIOBYTES(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="audiobytes/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="audiobytes/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)    

#machan model here
class MACHAN(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="machan/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="machan/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)    
 
 #madtoes model here
class MADTOES(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="madtoes/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="madtoes/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)   

#electroholics model here
class ELECTROHOLICS(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="electroholics/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="electroholics/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)

#tasveer model here
class TASVEER(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="tasveer/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="tasveer/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)    

#trivialis model here
class TRIVIALIS(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="trivialis/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="trivialis/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0) 

#hte65square model here
class THE65SQUARE(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="the65square/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="the65square/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)     

#philosoc model here
class PHILOSOC(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="philosoc/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="philosoc/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)

#robotics model here
class ROBOTICS(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="robotics/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="robotics/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)

#kubic model here
class KUBIC(models.Model):    
    Name = models.CharField(max_length=100, blank=False)
    Time = models.DateTimeField(blank=False)
    Location = models.URLField(max_length=500, blank=False)
    Description = models.TextField(blank=False)
    Payment_receipt_student = models.ImageField(upload_to="kubic/student/payment_receipt",null=True)
    Payment_receipt_reimburse=models.ImageField(upload_to="kubic/office/payment_receipt",null=True)
    Approved = models.BooleanField(default=False, blank=False)
    Attendance = models.IntegerField(default=0)  

 # all club model end here

class CLUB_GENERAl(models.Model):
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




     