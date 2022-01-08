"""INSTAGRAM views."""

# Django.
from django.http import HttpResponse

# Utilities
from datetime import datetime
import json


def hello_world(request):
    """Returns a greeting."""
    now = datetime.now().strftime('%b %dth, %Y - %H:%M hrs')
    return HttpResponse('Hello, world! Current server time is {now}'.format(now=now))


def sort_integers(request):
    """Return a JSON response with sorted integers list"""
    numbers = [int(i) for i in request.GET['numbers'].split(',')]
    sorted_ints = sorted(numbers)
    data = {
        'status': 'ok',
        'numbers': sorted_ints,
        'message': 'Integers sorted successfully',
    }
    return HttpResponse(json.dumps(data, indent=4), content_type='application/json')


def say_hi(request, name, age):
    """Return a greeting"""
    if age < 12:
        message = 'Sorry {}, you are not allowed here 😞'.format(name)
    else:
        message = 'Hi {}, welcome to Instagram 😊'.format(name)
    return HttpResponse(message)
