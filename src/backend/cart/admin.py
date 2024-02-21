from django.contrib import admin

from cart.models import Cart, CartBook


class CartAdmin(admin.ModelAdmin):
    fields = (
        "id", "user_id", "closed", "town", "cart_books"
    )
    list_display = (
        'id', "closed", "town"
    )
    search_fields = (
        'id', "closed", "town"
    )
    readonly_fields = (
        'id', 
    )


class CartBookAdmin(admin.ModelAdmin):
    fields = (
        'id', 'quantity', 'book_id',
    )
    list_display = (
        'id', 'quantity', 'book_id',
    )
    search_fields = (
        'id', 'quantity', 'book_id',
    )
    readonly_fields = (
        'id', 
    )


admin.site.register(model_or_iterable=Cart, admin_class=CartAdmin)
admin.site.register(model_or_iterable=CartBook, admin_class=CartBookAdmin)