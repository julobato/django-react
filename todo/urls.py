from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^projects/$', views.projects_page, name='projects_page'),
    url(r'^contact/$', views.contact_page, name='contact_page')
]