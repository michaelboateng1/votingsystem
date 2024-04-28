from django.db import models

# Create your models here.

# || PREFECTS)
# schoolPrefect
class School_prefects(models.Model):
    fullname    = models.CharField(null=False, max_length=50, blank=False)
    votes       = models.IntegerField(default=0)

# compoundPrefect
class Compound_prefects(models.Model):
    fullname    = models.CharField(null=False, max_length=50, blank=False)
    votes       = models.IntegerField(default=0)

# diningHallPrefect
class Dinginhall_prefects(models.Model):
    fullname    = models.CharField(null=False, max_length=50, blank=False)
    votes       = models.IntegerField(default=0)

# libradyPrefect
class Library_prefects(models.Model):
    fullname    = models.CharField(null=False, max_length=50, blank=False)
    votes       = models.IntegerField(default=0)

# healthPrefect
class Health_prefects(models.Model):
    fullname    = models.CharField(null=False, max_length=50, blank=False)
    votes       = models.IntegerField(default=0)

# protocolPrefect
class Protocol_prefects(models.Model):
    fullname    = models.CharField(null=False, max_length=50, blank=False)
    votes       = models.IntegerField(default=0)

# prepPrefect
class Prep_prefects(models.Model):
    fullname    = models.CharField(null=False, max_length=50, blank=False)
    votes       = models.IntegerField(default=0)

# sportsPrefect
class Sports_prefects(models.Model):
    fullname    = models.CharField(null=False, max_length=50, blank=False)
    votes       = models.IntegerField(default=0)

# entertainmentPrefect
class Entertainment_prefects(models.Model):
    fullname    = models.CharField(null=False, max_length=50, blank=False)
    votes       = models.IntegerField(default=0)


# TOTAL NUMER OF VOTERS
class Number_of_voters(models.Model):
    voters     = models.IntegerField(default=0)
