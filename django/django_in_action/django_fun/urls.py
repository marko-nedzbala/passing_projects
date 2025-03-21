"""
URL configuration for django_fun project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from stocks import views as stock_views

urlpatterns = [
    path('admin/', admin.site.urls),

    # loading our own page
    path('', stock_views.first, name='first'),

    # logged in example
    path('example/', stock_views.restricted_page, name='example'),

    path('accounts/', include('django.contrib.auth.urls')),

    path('form/', stock_views.my_model_form, name='my_form'),

    path('edit/<int:id>/', stock_views.edit_stocks, name='editing'),

    path('my_uploaded/', stock_views.upload, name='my_uploaded'),

    path('uploads/', stock_views.list_upload, name='uploads')
    
]

from django.conf import settings
from django.conf.urls.static import static
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)










