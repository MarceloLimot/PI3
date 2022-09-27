from django.shortcuts import render, HttpResponse
from django.http import HttpResponse, request

def core(request):
    return HttpResponse('Core')

def base(request):
    return render(request, 'templates/base.html')

def inicio(request):
    return render(request,'apps/login.html')

def login(request):
    return render(request,'apps/login.html')  