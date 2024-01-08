#!/usr/bin/python3


"""
print_square function to print a square using #

Parameters:
    size

Raises:
    TypeError: size must be an integer and >= 0
"""


def print_square(size):
    """
    print_square function to print a square using #

    Parameters:
        size

    Raises:
        TypeError: size must be an integer and >= 0
    """

    #check if size is an integer
    if not isinstance(size, int):
        raise TypeError("size must be an integer")

    #check if size is greater than or equal to 0
    if size < 0:
        raise ValueError("size must be >= 0")

    if isinstance(size, float) and size < 0:
        raise TypeError("size must be an integer")

    #print the square
    for _ in range(size):
        print('#' * size)
