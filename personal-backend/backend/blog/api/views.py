from rest_framework import generics
from rest_framework.response import Response
from .serializers import PostSerializer
from blog.models import Post

class PostsAPI(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer