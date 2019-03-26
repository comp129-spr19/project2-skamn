import pytest
from test_functions import dummy_functions


def test_environment():
    assert dummy_functions.dummy_function() == 4
