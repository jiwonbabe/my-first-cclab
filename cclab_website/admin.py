from django.contrib import admin
from .models import Project
from .models import People
from .models import Publication
from .models import Teaching

admin.site.register(Project)
admin.site.register(People)
admin.site.register(Publication)
admin.site.register(Teaching)
# Register your models here.
