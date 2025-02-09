from django import forms

class MyForm(forms.Form):
    name = forms.CharField()
    stock = forms.DecimalField(min_value=0, max_value=1_000_000, max_digits=10, decimal_places=5)