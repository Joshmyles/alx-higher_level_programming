#!/usr/bin/python3


"""

"""


def lookup(obj):
    """

    """
    #get the list of attributes and methods using dir()
    attributes_and_methods = dir(obj)

    #filter out any items starting with '--'(dunder methods)
    result = [item for item in attributes_and_methods if not item.startswith('__')]

    return result
