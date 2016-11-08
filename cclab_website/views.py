from django.shortcuts import render
from .models import Project
from .models import People
from .models import Publication
from .models import Teaching
from django.http import HttpResponse
from django.core import serializers

def index(request):
    return render(request, 'cclab_website/index.html')

def project(request):
    data = serializers.serialize("json", Project.objects.all())
    return HttpResponse(data, content_type="application/json")

def people(request):
     data = serializers.serialize("json", People.objects.all())
     return HttpResponse(data, content_type="application/json")
#page는 URLconf에서의 파라미터
#page 짜기
def publication(request, page):
     data = serializers.serialize("json", Publication.objects.only("publication_id", "year", "author", "title","publisher"))
     return HttpResponse(data, content_type="application/json")

def pubOverlay(request, publication_id):
     data = serializers.serialize("json", Publication.objects.only("author","title", "publisher", "abstract" ))
     return HttpResponse(data, content_type="application/json")

def teaching(request, page):
     data = serializers.serialize("json", Teaching.objects.only("teaching_id", "year", "semester", "class_name_kr", "class_name_en"))
     return HttpResponse(data, content_type="application/json")

def teachOverlay(request, teaching_id):
    data = serializers.serialize("json", Teaching.objects.only("class_name_kr", "class_name_en", "class_intro"))
    return HttpResponse(data, content_type="application/json")
