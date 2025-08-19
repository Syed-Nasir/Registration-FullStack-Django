from rest_framework import serializers
from .models import FrmPrc


class FrmPrcSerializer(serializers.ModelSerializer):
    class Meta:
        model = FrmPrc
        fields = '__all__'