from django.contrib import admin

from .models import Post


class PostAdmin(admin.ModelAdmin):
    fields = (
        "id",
        "title",
        "description",
        "subtitle",
        "preview",
    )
    list_display = ("id", "title")
    search_fields = ("id", "title", "description", "subtitle", "preview", "created")
    readonly_fields = ("id",)


admin.site.register(Post, PostAdmin)
