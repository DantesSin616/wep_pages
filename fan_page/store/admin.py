from django.contrib import admin
from .models import Product, NewsPost, SocialLink


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'stock_quantity', 'category', 'is_available', 'created_at']
    list_filter = ['category', 'is_available']
    search_fields = ['name', 'description']
    list_editable = ['price', 'stock_quantity', 'is_available']


@admin.register(NewsPost)
class NewsPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_published', 'published_at']
    list_filter = ['category', 'is_published']
    search_fields = ['title', 'content']
    list_editable = ['is_published']


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'platform_name', 'url', 'is_active', 'display_order']
    list_editable = ['is_active', 'display_order']