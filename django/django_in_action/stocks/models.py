from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default='')

    
    
class Stocks(models.Model):
    ticker = models.CharField(max_length=4)
    shares = models.DecimalField(decimal_places=5, max_digits=10)
    price = models.DecimalField(decimal_places=5, max_digits=10)

    # owner = models.ForeignKey(User, verbose_name='User', on_delete=models.CASCADE)
    # owner = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.ticker)
    

