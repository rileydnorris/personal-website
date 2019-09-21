from rest_framework import generics
from rest_framework.response import Response
from .serializers import PostSerializer
from blog.models import Post

class PostsAPI(generics.ListCreateAPIView, generics.RetrieveUpdateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    # Return all posts if no url parameter, otherwise specific post
    def get_queryset(self):
        qset = Post.objects.all()
        post_id = self.kwargs['pk']
        if post_id is not None:
            qset = qset.filter(id=post_id)
        return qset