from django.contrib import admin
from .models import FrmPrc

# Register your models here.
@admin.register(FrmPrc)
class FrmPrcAdmin(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name', 'email']