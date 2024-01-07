#!/usr/bin/python3


"""
add_integer: function

Attributes:
    a (int or float)
    b (int or float)

Methods:
    add_integer
"""


def add_integer(a, b=98):
    """
    Adds two integers

    Parameters:
        a (int or float): first number
        b (int or float): second number

    Returns:
        int: The addition of a and b

    Raises:
        TypeError: if a or b is not an int or float
    """
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer or float")
    if not isinstance(b, (int, float)):
        raise TypeError("b must be an integer or float")

    return int(a) + int(b)
