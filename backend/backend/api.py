from rest_framework import generics, permissions
from .models import *
from .serializers import *

class StakeholderViewSet(generics.ListAPIView):
     permission_classes = [
         permissions.IsAuthenticated
     ]

     serializer_class = StakeholderSerializer
     
     def get_queryset(self):
        return self.request.user.Stakeholder.all()
     
     def perform_create(self, serializer):
         return serializer.save(owner = self.request.user)

class Club_DetailViewSet(generics.ListAPIView):
    queryset = Club_Detail.objects.all()
    permission_classes = [
         permissions.AllowAny
    ]
    serializer_class = Club_DetailSerializer

class Club_EventViewSet(generics.ListAPIView):
    queryset = Club_Event.objects.all()
    permission_classes = [
         permissions.AllowAny
    ]
    serializer_class = Club_EventSerializer