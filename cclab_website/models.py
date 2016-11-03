from django.db import models
from django.utils import timezone
# 다른 파일에 있는 것을 추가하는 부분(헤더 같은 역할)

class Project(models.Model):
    name = models.CharField(max_length=200)
    intro = models.TextField()
    organization = models.CharField(max_length=200)
    icon = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()

class People(models.Model):
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    picture = models.ImageField()

class Publication(models.Model):
    publication_id = models.AutoField(primary_key=True)
    year = models.IntegerField()
    author = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    publisher = models.CharField(max_length=200)
    abstract = models.TextField()

class Teaching(models.Model):
    teaching_id = models.AutoField(primary_key=True)
    class_name_kr = models.CharField(max_length=200)
    class_name_en = models.CharField(max_length=200)
    class_intro = models.TextField()
    year = models.DateField()
    semester = models.BooleanField()





# class time: project_period, teaching_time
