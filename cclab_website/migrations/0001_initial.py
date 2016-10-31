# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='People',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=200)),
                ('picture', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('intro', models.TextField()),
                ('organization', models.CharField(max_length=200)),
                ('icon', models.CharField(max_length=200)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Publication',
            fields=[
                ('publication_id', models.AutoField(primary_key=True, serialize=False)),
                ('year', models.IntegerField()),
                ('author', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=200)),
                ('publisher', models.CharField(max_length=200)),
                ('abstract', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Teaching',
            fields=[
                ('teaching_id', models.AutoField(primary_key=True, serialize=False)),
                ('class_name_kr', models.CharField(max_length=200)),
                ('class_name_en', models.CharField(max_length=200)),
                ('class_intro', models.TextField()),
                ('year', models.DateField()),
                ('semester', models.BooleanField()),
            ],
        ),
    ]
