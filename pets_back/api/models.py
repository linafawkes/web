from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class Service (models.Model):
    name = models.CharField(max_length=256)
    text = models.CharField(max_length=1024, blank=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.CharField(max_length=256)
    image = models.ImageField(upload_to=settings.MEDIA_ROOT, blank=True)
    tags = models.ManyToManyField('Tag')

    def __str__(self):
        return self.name


class Comment (models.Model):
    author = models.CharField(max_length=256)
    text = models.CharField(max_length=10234)
    service = models.ForeignKey(
        'Service', on_delete=models.CASCADE, related_name='comments')


class Tag (models.Model):
    label = models.CharField(max_length=64)

    def __str__(self):
        return self.label
