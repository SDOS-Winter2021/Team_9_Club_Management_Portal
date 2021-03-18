from django.contrib import admin
from .models import *
# Register your models here.
class CLUBAdmin(admin.ModelAdmin):
	list_display=('name','date_time','location','description','payment_receipt_student','payment_receipt_reimburse','approved','attendance','club_name')
# all club models
admin.site.register(CLUB,CLUBAdmin)
admin.site.register(Users)
admin.site.register(CLUB_GENERAL)
admin.site.register(USER_DETAILS)

