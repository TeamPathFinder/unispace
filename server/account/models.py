from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, email, name, pasword=None):
        """Create and return a `User` with an email, username and password."""
        if not email:
            raise ValueError("Users must have an email address")
        if not name:
            raise ValueError("Users must have a name")

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )
        user.set_password(pasword)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password=None):
        """Create and return a `User` with superuser (admin) permissions."""
        user = self.create_user(email=self.normalize_email(email), name=name)
        user.set_password(password)
        user.is_admin = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    """A custom user class that uses email as the primary identifier."""

    email = models.EmailField(max_length=60, unique=True)
    name = models.CharField(max_length=60)

    # Optional fields for user profile (not sure which ones we want to keep yet)
    nickname = models.CharField(max_length=60, null=True, blank=True)
    school = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    major = models.CharField(max_length=100, null=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        """Return True if the user is a member of staff."""
        return self.is_admin
