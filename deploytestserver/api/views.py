from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import outputplotSerializer
from .models import outputplot
from rest_framework.response import Response
from django.http import HttpResponse
import sys
from subprocess import run,PIPE
from django.http import HttpResponse



class outputplotViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = outputplot.objects.all()
    serializer_class = outputplotSerializer

def senddata_topython(request):
    outputplot_data=outputplot.objects.all()
    serializer=outputplotSerializer(outputplot_data,many=True)
    print(serializer.data)
    temp=[]
    for i in serializer.data:
        x=i['x']
        temp.append(x)
    print(temp)
    seq=""
    ip_values=""
    #for i in serializer.data:
    #    seq=i['seq']
    #    ip_values=i['ip_values']
    '''
    for i in serializer.data:
        for j in i.items():
            if j[0]=="seq":
                seq=j[1]
            if j[0]=="ip_values":
                ip_values=j[1]'''
    #print(seq,ip_values)
    #print(type(seq),type(ip_values))
    #Run python script pass input and get the output
    out = run([sys.executable,'C:\\Users\\amey sonje\\deploy_angular_django_test\\deploytestserver\\testserver.py', temp],shell=False,stdout=PIPE)
    out1=out.stdout.decode("utf-8")
    print(out1)
    outputplot.objects.all().delete()
    outputplot.objects.update_or_create(id=1,x=out1)
    #plot1 = outputplot(outputplot_id=1, x=xa,y=ya)
    #plot1.save()'''
    return HttpResponse()
