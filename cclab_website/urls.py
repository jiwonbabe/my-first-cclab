from django.conf.urls import patterns, url
from cclab_website import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^project/$', views.project, name = 'project'),
    url(r'^people/$', views.people, name = 'people'),
    url(r'^publication/(?P<page>\d+)/$', views.publication, name = 'publication'),
    url(r'^pubOverlay/(?P<publication_id>\d+)/$', views.pubOverlay, name = 'publicationOverlay'),
    url(r'^teaching/(?P<page>\d+)/$', views.teaching, name = 'teaching'),
    url(r'^teachOverlay/(?P<teaching_id>\d+)/$', views.teachOverlay, name = 'teachingOverlay'),
    # url(r'', include('cclab.urls')),
]
