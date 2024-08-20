from django.contrib import admin
from .models import School_prefects,Compound_prefects,Dinginhall_prefects,Library_prefects,Health_prefects,Protocol_prefects,Prep_prefects,Sports_prefects,Entertainment_prefects, Number_of_voters, Rejected_votes

# Register your models here.
admin.site.register(School_prefects)
admin.site.register(Compound_prefects)
admin.site.register(Dinginhall_prefects)
admin.site.register(Library_prefects)
admin.site.register(Health_prefects)
admin.site.register(Protocol_prefects)
admin.site.register(Prep_prefects)
admin.site.register(Sports_prefects)
admin.site.register(Entertainment_prefects)

# NUMBER OF VOTERS
admin.site.register(Number_of_voters)

# NUMABER OF REJECTED VOTES
admin.site.register(Rejected_votes)