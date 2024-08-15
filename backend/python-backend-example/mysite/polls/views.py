from django.http import HttpResponse
from .models import Question
from django.shortcuts import render


def index(request):
    return render(request, './templates/index.html')