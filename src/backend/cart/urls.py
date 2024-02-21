from rest_framework.routers import SimpleRouter

from .views import CartBookViewSet, CartViewSet

router = SimpleRouter()

router.register('cart-only', CartViewSet)
router.register('cart-book-quantity', CartBookViewSet)

urlpatterns = router.urls