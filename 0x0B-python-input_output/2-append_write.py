#!/usr/bin/python3


"""
    Append a string to the end of a text file, return number of chars added.

    Parameters:
    - filename: The name of the file to append. Defaults to an empty string.
    - text: The string to be appended to the file. Defaults to an empty string.

    Returns:
    - The number of characters added to the file.
"""


def append_write(filename="", text=""):
    """
    Append a string to the end of a text file, return number of chars added.

    Parameters:
    - filename: The name of the file to append. Defaults to an empty string.
    - text: The string to be appended to the file. Defaults to an empty string.

    Returns:
    - The number of characters added to the file.
    """
    with open(filename, 'a', encoding='utf-8') as file:
        # Append the text to the file and get the number of characters added
        num_characters_added = file.write(text)

    return num_characters_added
