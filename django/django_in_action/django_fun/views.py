from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def first(request):
    return render(request, 'index.html')

@login_required
def restricted_page(request):
    data = {
        'title': 'Restricted page',
        'cotent': '<h1>You are logged in</h1>',
    }
    return render(request, 'example.html', data)


from . import forms
def my_form(request):
    if request.method == 'GET':
        form = forms.MyForm()
    elif request.method == 'POST':
        form = forms.MyForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            stock = form.cleaned_data['stock']
    
    data = {
        'form': form,
        'name': name,
        'stock': stock
    }

    return render(request, 'myform.html', data)