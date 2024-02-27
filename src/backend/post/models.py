from django.db import models


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, blank=False, unique=True)
    description = models.TextField(max_length=1000, blank=True, unique=False)
    subtitle = models.CharField(max_length=50, blank=True, unique=False)
    preview = models.ImageField(blank=True, upload_to="post/preview")
    created = models.DateField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.title
