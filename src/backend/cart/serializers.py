from authsystem.serializers import UserPresentationSerializer
from book.serializers import BookSerializer
from rest_framework.serializers import ModelSerializer

from .models import Cart, CartBook


class CartBookSerializer(ModelSerializer):
    book = BookSerializer(source="book_id", many=False, read_only=True)

    class Meta:
        model = CartBook
        fields = "__all__"


class CartSerializer(ModelSerializer):
    user = UserPresentationSerializer(source="user_id", many=False, read_only=True)
    cart_books_items = CartBookSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = "__all__"
