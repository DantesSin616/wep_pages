from rest_framework import viewsets
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from .models import Product, NewsPost, SocialLink
from .serializers import ProductSerializer, NewsPostSerializer, SocialLinkSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class NewsPostViewSet(viewsets.ModelViewSet):
    queryset = NewsPost.objects.filter(is_published=True)
    serializer_class = NewsPostSerializer


class SocialLinkViewSet(viewsets.ModelViewSet):
    queryset = SocialLink.objects.filter(is_active=True).order_by('display_order')
    serializer_class = SocialLinkSerializer


@api_view(['GET'])
def shop_products(request):
    products = Product.objects.filter(is_available=True)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def news_list(request):
    news = NewsPost.objects.filter(is_published=True)
    serializer = NewsPostSerializer(news, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def social_links(request):
    links = SocialLink.objects.filter(is_active=True).order_by('display_order')
    serializer = SocialLinkSerializer(links, many=True)
    return Response(serializer.data)