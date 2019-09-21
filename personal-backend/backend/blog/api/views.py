from rest_framework import generics
from rest_framework.response import Response
from .serializers import PostSerializer
from blog.models import Post

class PostsAPI(generics.ListCreateAPIView, generics.UpdateAPIView):
    serializer_class = PostSerializer
    lookup_field = 'id'

    def get_queryset(self):
        qset = Post.objects.all()
        post_id = self.request.query_params.get('id', None)
        if post_id is not None:
            qset = qset.filter(id=post_id)
        return qset