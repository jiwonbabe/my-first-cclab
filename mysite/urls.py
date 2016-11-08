from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = [
    url(r'^cclab_website/', include('cclab_website.urls', namespace = "cclab_website")),
    url(r'^admin/', include(admin.site.urls)),

]
