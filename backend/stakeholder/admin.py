from django.contrib import admin
from .models import *
# Register your models here.
class CLUBAdmin(admin.ModelAdmin):
	list_display=('id','name','date_time','location','description','poster','payment_receipt_student','payment_receipt_reimburse','approved','attendance','club_name')
class UsersAdmin(admin.ModelAdmin):
	list_display=('id','email','group')
class CLUB_GENERALAdmin(admin.ModelAdmin):
	list_display=('id','name','description','coordinator1','coordinator1_email','coordinator2','coordinator2_email','coordinator3','coordinator3_email','fb_link','ig_link','website_link')
class USER_DETAILSAdmin(admin.ModelAdmin):
	list_display=('refresh_token','access_token','google_id','name')

# all club models
admin.site.register(CLUB,CLUBAdmin)
admin.site.register(Users,UsersAdmin)
admin.site.register(CLUB_GENERAL,CLUB_GENERALAdmin)
admin.site.register(USER_DETAILS,USER_DETAILSAdmin)


