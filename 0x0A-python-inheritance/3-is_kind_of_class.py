#!/usr/bin/python3


"""
check if object is an instance, or if obj is an instance of a class inherited from

Parameters:
    obj: the object
    a_class: the class

Returns:
    True if obj is an instance of a_class or its subclass
"""


def is_kind_of_class(obj, a_class):
    """
    check if object is an instance, or if obj is an instance of a class inherited from

    Parameters:
        obj: The object
        a_class: the class

    Returns:
        True if obj is an instance of a_class or its subclass
    """
    return isinstance(obj, a_class)
