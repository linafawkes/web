from rest_framework.serializers import ModelSerializer
from .models import *


class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class ServiceSerializer(ModelSerializer):
    tags = TagSerializer(many=True)

    class Meta:
        model = Service
        fields = [
            'id',
            'name',
            'text',
            'price',
            'image',
            'tags'
        ]

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'id',
            'author',
            'text',
            'service',
        ]
        depth = 1

