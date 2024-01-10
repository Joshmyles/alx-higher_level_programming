#!/usr/bin/python3


"""
    Write a string to a text file, return number of characters written.

    Parameters:
    - filename: The name of the file to write. Defaults to an empty string.
    - text: The string to be written to the file. Defaults to an empty string.

    Returns:
    - The number of characters written to the file.
    """


def write_file(filename="", text=""):
    """
    Write a string to a text file, return number of characters written.

    Parameters:
    - filename: The name of the file to write. Defaults to an empty string.
    - text: The string to be written to the file. Defaults to an empty string.

    Returns:
    - The number of characters written to the file.
    """
    with open(filename, 'w', encoding='utf-8') as file:
        # Write the text to the file and get the number of characters written
        num_characters_written = file.write(text)

    return num_characters_written
