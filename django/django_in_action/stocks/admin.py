from django.db import models
from django.contrib import admin
from django.contrib.admin import StackedInline
# from django.contrib.auth.admin import StackedInline
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from .models import UserProfile

class UserProfileInLine(StackedInline):
    model = UserProfile
    can_delete = False

class UserAdmin(BaseUserAdmin):
    inlines = [UserProfileInLine]

admin.site.unregister(User)
admin.site.register(User, UserAdmin)

from .models import Stocks, MyUploadModel
admin.site.register(Stocks)

admin.site.register(MyUploadModel)