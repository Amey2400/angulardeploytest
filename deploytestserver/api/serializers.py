from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import outputplot


class outputplotSerializer(serializers.ModelSerializer):
    class Meta:
        model = outputplot
        fields = ['x']