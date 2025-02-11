from django.shortcuts import render, redirect, get_object_or_404
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
def my_model_form(request, id=0):
    if request.method == 'GET':
        if id == 0:
            form = MyModelForm()
        else:
            ad = get_object_or_404(Stocks, id=id, owner=request.user)
            form = Stocks(ad)
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


def edit_stocks(request, id=0):
    fd = Stocks.objects.filter(id=id)
    if request.method == 'GET':
        if id == 0:
            form = MyModelForm()
        else:
            ad = get_object_or_404(Stocks, id=id, owner=request.user)
            print(f'Get: {ad}')
            form = MyModelForm(instance=ad)
    else:
        if id == 0:
            form = MyModelForm(request.POST)
        else:
            ad = get_object_or_404(Stocks, id=id, owner=request.user)
            print(f'Post: {ad}')
            form = MyModelForm(request.POST, instance=ad)

        if form.is_valid():
            ad = form.save(commit=False)
            ad.owner = request.user
            ad.save()
        

            return redirect('example')
    data = {
        'form': form,
        'stock': fd
    }
    return render(request, 'edit.html', data)