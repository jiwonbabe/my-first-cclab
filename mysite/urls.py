from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
import os

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('cclab_website.urls', namespace = "cclab_website")),

] + static("/app", document_root=os.path.join("cclab_website", "static", "angular", "app")) + static("/node_modules", document_root=os.path.join("angular", "node_modules"))
