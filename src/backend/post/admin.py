from django.contrib import admin

from .models import Post


class PostAdmin(admin.ModelAdmin):
    model = Post
    list_display = ['id', 'title']
    list_editable = []
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'preview')
        }),
    )


admin.site.register(Post, PostAdmin)