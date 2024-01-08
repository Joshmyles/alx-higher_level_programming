#!/usr/bin/python3



def inherits_from(obj, a_class):
    """
    Check if the obj is an instance of a class that inherited directly/indirectly from
    the specified class

    Parameters:
        obj: the obj
        a_class: the class to compare against

    Returns:
        True if obj is an instance of a class that inherited from a_class, else False
    """
    return issubclass(type(obj), a_class) and type(obj) != a_class
