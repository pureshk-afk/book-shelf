from rest_framework.viewsets import ModelViewSet
from rest_framework import filters

from .serializers import BookSerializer, CategorySerializer, SaleSerializer
from .models import Book, Category, Sale
from services.views_utils import StandardResultsSetPagination


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields  = ["id", "title"]
    tags = ["Category"]


class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ["id", "title", "description", "category_id"]
    tags = ["Book"]


class SaleViewSet(ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ["id", "percent", "book_id"]
    tags = ["Sale"]