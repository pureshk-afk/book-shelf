from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.viewsets import ModelViewSet
from services.views_utils import StandardResultsSetPagination

from .models import Cart, CartBook
from .serializers import CartBookSerializer, CartSerializer


class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter,  DjangoFilterBackend]
    search_fields  = ["id", "closed"]
    filterset_fields = ["id", "user_id", "closed", "town"]
    tags = ["Cart"]

class CartBookViewSet(ModelViewSet):
    queryset = CartBook.objects.all()
    serializer_class = CartBookSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields  = ["id", "quantity"]
    filterset_fields = ["id", "quantity", "book_id"]
    tags = ["Cart book"]