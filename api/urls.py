
from django.urls import path, include
from api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('frmprc', views.FrmPrcInfo, basename='frmprc')

urlpatterns = [
    path('', views.lrnform),
    path('frm/', include(router.urls)),
    path('profile/<int:pk>/', views.profile_view, name='profile'),
]
