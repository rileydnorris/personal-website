from django.conf.urls import url
from . import views
from blog.api.views import PostsAPI

urlpatterns = [
    url(r'posts/$', PostsAPI.as_view(), name='posts-create'),
]