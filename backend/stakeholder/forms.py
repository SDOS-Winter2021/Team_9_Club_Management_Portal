from django import forms
from stakeholder.models import GoogleCredentials
from django.contrib.auth.models import User

class UserForm(forms.ModelForm):
	password= django.contrib.auth.models.User.set_unusable_password()
	class Meta:
		model=User
		fields=('username','password','email')
class GoogleCredentialsForm(forms.ModelForm):
	class Meta:
		model=GoogleCredentials
		fields=('token','refresh_token','scopes')