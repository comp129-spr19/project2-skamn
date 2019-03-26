import pytest
from test_functions import dummy_functions


def test_environment():
    assert dummy_functions.dummy_function() == 4


def test_supposed_to_fail():
    assert dummy_functions.dummy_function() == 2
