from rest_framework import serializers
from .models import Product, NewsPost, SocialLink


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class NewsPostSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)

    class Meta:
        model = NewsPost
        fields = '__all__'


class SocialLinkSerializer(serializers.ModelSerializer):
    display_name = serializers.CharField(source='__str__', read_only=True)

    class Meta:
        model = SocialLink
        fields = '__all__'