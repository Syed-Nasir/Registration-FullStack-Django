from django.shortcuts import render
from .forms import LrnForm
from .models import FrmPrc
from .serializers import FrmPrcSerializer
from rest_framework import viewsets

# Create your views here.
def lrnform(req):
    form = LrnForm()
    return render(req, 'api/register.html', {'form': form})

class FrmPrcInfo(viewsets.ModelViewSet):
    queryset = FrmPrc.objects.all()
    serializer_class = FrmPrcSerializer

def profile_view(request, pk):
    record = FrmPrc.objects.get(pk=pk)
    return render(request, 'api/profile.html', {'record': record})