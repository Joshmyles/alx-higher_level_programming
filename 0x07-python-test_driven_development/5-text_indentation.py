#!/usr/bin/python3


"""
text_indentation - function to print space

Parameters:
    text (str)

Raises:
    TypeError: text must be a string
"""


def text_indentation(text):
    """
    text_indentation - function to print space

    Parameters:
        text (str)

    Raises:
        TypeError: text must be a string
    """
    #check if text is a string
    if not isinstance(text, str):
        raise TypeError("Text must be a string")

    #iterate through each character in the test
    for char in text:
        #print the character without leading or trailing white spaces
        if char == '.' or char == ':' or char == '?':
            print('\n\n')
        else:
            print(char, end='')
