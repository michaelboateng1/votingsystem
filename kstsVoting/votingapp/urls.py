from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index, name='home'),
    path('vote', views.check_vote, name='check_vote'),
    path('code', views.check_code, name='check_code'),
    path('results-girls', views.girls_results_view, name='girls_results'),
    path('results-boys', views.boys_results_view, name='boys_results'),
]
