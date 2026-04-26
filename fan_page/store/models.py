from django.db import models


class Product(models.Model):
    CATEGORY_CHOICES = [
        ('tshirt', 'T-Shirt'),
        ('cup', 'Cup'),
        ('accessory', 'Accessory'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock_quantity = models.IntegerField(default=0)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='other')
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name


class NewsPost(models.Model):
    CATEGORY_CHOICES = [
        ('tour', 'Tour'),
        ('release', 'Music Release'),
        ('event', 'Fan Event'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='news/', blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='other')
    is_published = models.BooleanField(default=True)
    published_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('auth.User', on_delete=models.SET_NULL, null=True)

    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title


class SocialLink(models.Model):
    PLATFORM_CHOICES = [
        ('tiktok', 'TikTok'),
        ('instagram', 'Instagram'),
        ('facebook', 'Facebook'),
        ('whatsapp', 'WhatsApp'),
        ('youtube', 'YouTube'),
        ('twitter', 'X (Twitter)'),
        ('other', 'Other'),
    ]

    platform_name = models.CharField(max_length=50, choices=PLATFORM_CHOICES)
    custom_name = models.CharField(max_length=50, blank=True)
    url = models.URLField()
    icon = models.CharField(max_length=100, blank=True)
    is_active = models.BooleanField(default=True)
    display_order = models.IntegerField(default=0)

    class Meta:
        ordering = ['display_order']

    def __str__(self):
        return self.custom_name or self.get_platform_name_display()