from django import forms
from .models import Stocks

class MyForm(forms.Form):
    name = forms.CharField()
    stock = forms.DecimalField(min_value=0, max_value=1_000_000, max_digits=10, decimal_places=5)

class MyModelForm(forms.ModelForm):
    class Meta:
        model = Stocks
        fields = ['ticker', 'shares', 'price']

    # helpers
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['ticker'].label = 'The Stock ticker'
        self.fields['shares'].label = 'The number of shares'
        self.fields['price'].label = 'The price per share'
        # also acceptable
        # labels = {
        #     'ticker': 'The Stock ticker'
        # }