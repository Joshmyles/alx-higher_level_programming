#!/usr/bin/python3


"""
Square class

Attributes:
    size (int): size of the square

Methods:
    No methods
"""


class Square:
    """
    Square class

    Attributes:
        size (int): private instance attribute

    Methods:
        __init__(self, size=0): initializes a new instance of class
    """
    def __init__(self, size=0):
        """
        Initializes a new instance of the square class

        Parameters:
            size (int): The size of the square.

        Raises:
            TypeError: if the size is not an integer
            ValueError: if size is less than 0
        """
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size
