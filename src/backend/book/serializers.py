from rest_framework.serializers import ModelSerializer

from .models import Book, Category, Sale


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ("__all__")


class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = ("__all__")


class SaleSerializer(ModelSerializer):
    class Meta:
        model = Sale
        fields = ("__all__")
        