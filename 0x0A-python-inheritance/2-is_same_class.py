#!/usr/bin/python3

"""

"""


def is_same_class(obj, a_class):
    """
    Check if obj is an instance of the class

    Parameters:
        obj: the object
        a_class: the class to compare

    Returns:
        True if obj is an instance else False
    """
    return type(obj) == a_class
