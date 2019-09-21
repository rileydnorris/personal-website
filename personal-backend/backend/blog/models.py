from django.db import models
from django.urls import reverse

class Post(models.Model):
    
    title = models.CharField(max_length=150, help_text='The title of the blog')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        """Returns the url to access a detail record for this post."""
        return reverse('posts', args=[str(self.id)])