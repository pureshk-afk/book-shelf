from django.contrib import admin

from .models import Book, Category, Sale


class BookAdmin(admin.ModelAdmin):
    fields = (
        'id', 'title', 'preview', 'description', 'category_id'
    )
    list_display = (
        'id', 'title',
    )
    search_fields = (
        'id', 'title', 'category_id'
    )
    readonly_fields = (
        'id', 
    )


class CategoryAdmin(admin.ModelAdmin):
    fields = (
        'id', 'title',
    )
    list_display = (
        'id', 'title',
    )
    search_fields = (
        'id', 'title',
    )
    readonly_fields = (
        'id', 
    )


class SaleAdmin(admin.ModelAdmin):
    fields = (
        'id', 'percent', 'book_id'
    )
    list_display = (
        'id', 'percent', 'book_id'
    )
    search_fields = (
        'id', 'percent', 'book_id'
    )
    readonly_fields = (
        'id',
    )


admin.site.register(model_or_iterable=Book, admin_class=BookAdmin)
admin.site.register(model_or_iterable=Category, admin_class=CategoryAdmin)
admin.site.register(model_or_iterable=Sale, admin_class=SaleAdmin)