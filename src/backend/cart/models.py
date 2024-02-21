from authsystem.models import User
from book.models import Book
from django.db import models


class CartBook(models.Model):
    id = models.AutoField(primary_key=True)
    quantity = models.PositiveIntegerField(default=1, blank=False)
    book_id = models.ForeignKey(to=Book, on_delete=models.PROTECT, verbose_name="Book")

    def __str__(self):
        return f"{self.book_id}: {self.quantity}"


class Cart(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(to=User, on_delete=models.PROTECT, verbose_name="User")
    cart_books = models.ManyToManyField(to=CartBook,)
    closed = models.BooleanField(default=False, blank=True, null=True)
    town = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.town
