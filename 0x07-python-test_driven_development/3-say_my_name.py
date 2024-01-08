#!/usr/bin/python3


"""
say_my_name function to print first and last name

Parameters:
    first_name (str)
    last_name (str)

Raises:
    TypeError: First name and last name must be strings
"""


def say_my_name(first_name, last_name=""):
    """
    say_my_name: function to print first and last name

    Parameters:
        first_name (str)
        last_name (str)

    Raises:
        TypeError: First name and last name must be strings
    """
    #check if first_name and last_name are strings
    if not isinstance(first_name, str) or not isinstance(last_name, str):
        raise TypeError("first_name must be string")

    #print the message
    print("My name is {} {}".format(first_name, last_name))
