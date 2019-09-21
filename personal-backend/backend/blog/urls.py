from django.conf.urls import url
from . import views
from blog.api.views import PostsAPI

urlpatterns = [

    # GET, POST, PATCH, PUT Posts
    url(r'^posts/$', PostsAPI.as_view(), name='posts', kwargs={'pk': None}),
    url(r'^posts/(?P<pk>[0-9]*)$', PostsAPI.as_view(), name='posts'),
]