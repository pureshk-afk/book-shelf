from django.urls import path 
from rest_framework.routers import SimpleRouter

from .views import BookViewSet, CategoryViewSet, SaleViewSet


router = SimpleRouter()

router.register('category', CategoryViewSet)
router.register('book', BookViewSet)
router.register('sale', SaleViewSet)

urlpatterns = router.urls