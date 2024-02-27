from django.db import models


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, blank=False, unique=True)
    preview = models.ImageField(blank=True, upload_to="category/preview")

    def __str__(self):
        return self.title


class Book(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, blank=False, unique=True)
    preview = models.ImageField(blank=True, upload_to="book/preview")
    description = models.TextField(max_length=1000, blank=True, unique=False)
    author = models.CharField(max_length=100, blank=True, unique=False)
    publication = models.CharField(max_length=100, blank=True, unique=False)
    created = models.DateField(blank=True, null=True)
    translation = models.CharField(max_length=100, blank=True, unique=False)
    category_id = models.ForeignKey(
        to=Category, on_delete=models.PROTECT, verbose_name="Category"
    )

    def __str__(self):
        return self.title


class Sale(models.Model):
    id = models.AutoField(primary_key=True)
    percent = models.FloatField(blank=False, unique=False)
    book_id = models.ForeignKey(to=Book, on_delete=models.CASCADE)

    def __str__(self):
        return self.percent
