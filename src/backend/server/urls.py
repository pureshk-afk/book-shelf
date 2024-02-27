from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.static import serve
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

from .settings import DEBUG

schema_view = get_schema_view(
    openapi.Info(
        title="API",
        default_version="v1",
        description="API documentation",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = (
    [
        path("admin/", admin.site.urls),
        path(
            "api/v1/",
            include(
                [
                    path(
                        "docs/",
                        include(
                            [
                                path(
                                    "",
                                    schema_view.with_ui("swagger", cache_timeout=0),
                                    name="swagger-schema",
                                ),
                                path(
                                    "api.json/",
                                    schema_view.without_ui(cache_timeout=0),
                                    name="schema-swagger-ui",
                                ),
                                path(
                                    "redoc/",
                                    schema_view.with_ui("redoc", cache_timeout=0),
                                    name="schema-redoc",
                                ),
                            ]
                        ),
                    ),
                    path("auth/", include("authsystem.urls")),
                    path("shelf/", include("book.urls")),
                    path("post/", include("post.urls")),
                    path("cart/", include("cart.urls")),
                ]
            ),
        ),
    ]
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    + [
        re_path(
            r"^media/(?P<path>.*)$",
            serve,
            {
                "document_root": settings.MEDIA_ROOT,
            },
        ),
    ]
)


if DEBUG:
    import debug_toolbar

    urlpatterns += [
        path("__debug__/", include(debug_toolbar.urls)),
    ]
