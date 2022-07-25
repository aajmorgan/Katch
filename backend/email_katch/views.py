from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

# Create your views here.

class AddUser(APIView):

    def post(self, request, format=None):
        print('posted')
        data = {
            'name': request.data.get('name'),
            'email': request.data.get('email')
        }

        serializer = UserSerializer(data=data)
        print('got here')
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)