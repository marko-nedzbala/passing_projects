from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required


def first(request):
    return render(request, 'index.html')

@login_required
def restricted_page(request):
    data = {
        'title': 'Restricted page',
        'cotent': '<h1>You are logged in</h1>',
        'stocks': Stocks.objects.filter(owner=request.user)
    }
    return render(request, 'example.html', data)


# from . import forms
# def my_form(request):
#     if request.method == 'GET':
#         form = forms.MyForm()
#     elif request.method == 'POST':
#         form = forms.MyForm(request.POST)
#         if form.is_valid():
#             name = form.cleaned_data['name']
#             stock = form.cleaned_data['stock']
#             return redirect('first')
    
#     data = {
#         'form': form,
#         # 'name': name,
#         # 'stock': stock
#     }

#     return render(request, 'myform.html', data)

from .models import Stocks
from .forms import MyModelForm

def get_all_stocks(request):
    current_user = request.user
    fd = Stocks.objects.filter(ticker='IBM')
    data = {
        'mystocks': fd,
        'user': current_user,
    }
    return render(request, 'example.html', data)

@login_required
def my_model_form(request):
    if request.method == 'GET':
        form = MyModelForm()
    else:
        form = MyModelForm(request.POST)
        if form.is_valid():
            stock = form.save(commit=False)
            stock.owner = request.user
            stock.save()

            return redirect('example')
    data = {
        'form': form
    }
    return render(request, 'myform.html', data)

def form_accepted(request):
    data = {
        'content': '''
            <h1>Form Accepted</h1>
        '''
    }
    return render(request, 'form_out.html', data)