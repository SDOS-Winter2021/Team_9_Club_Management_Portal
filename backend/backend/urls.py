from django.urls.conf import path
from .api import *
from .views import *
 
urlpatterns = [
    path('api/Stakeholder', StakeholderViewSet.as_view()),
    path('api/Club_Detail', StakeholderViewSet.as_view()),
    path('api/Club_Event', StakeholderViewSet.as_view()),
    path('login/', loginPage, name="login"),
]