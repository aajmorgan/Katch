from ast import Add
from django.urls import path, include
from email_katch.views import AddUser

urlpatterns = [
    path('', AddUser.as_view()),
]