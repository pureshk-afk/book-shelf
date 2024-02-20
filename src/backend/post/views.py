from rest_framework.viewsets import ModelViewSet
from rest_framework import filters

from .serializers import PostSerializer
from .models import Post

from services.views_utils import StandardResultsSetPagination


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ["id", "title", "description"]
    tags = ["Post"]
