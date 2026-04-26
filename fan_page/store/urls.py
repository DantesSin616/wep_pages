from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'news', views.NewsPostViewSet)
router.register(r'social', views.SocialLinkViewSet)

urlpatterns = [
    path('', include(router.urls)),
]