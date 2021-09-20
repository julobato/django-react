from django.shortcuts import render

# Create your views here.
def index(request):
    context = {}
    return render(request, "index.html", context)

def contact_page(request):
    context = {}
    return render(request, "contact.html", context)

def projects_page(request):
    context = {}
    return render(request, "projects.html", context)