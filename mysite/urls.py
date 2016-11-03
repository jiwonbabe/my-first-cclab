from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # url(r'^$', 'mysite.views.home', name='home'),
    url(r'^cclab/project/$', view.project, name = 'project'),
    url(r'^cclab/people/$', view.people, name = 'people'),
    url(r'^cclab/project/$', view.project, name = 'project'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('cclab.urls')),
]
