from rest_framework.generics import GenericAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import filters
from services.views_utils import StandardResultsSetPagination

from .models import User

from .backend import JWTAuthClass

from .serializers import UserPresentationSerializer, UserRegisterSerializer

class RegisterAPIView(GenericAPIView):
    serializer_class = UserRegisterSerializer
    permission_classes = (AllowAny, )
    presentation_serializer = UserPresentationSerializer


    def post(self, request) -> Response:
        response, status_code = JWTAuthClass.register(request, self.serializer_class, self.presentation_serializer)
        return Response(response, status_code)


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserPresentationSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ["id", "username", "email"]
    tags = ["User"]