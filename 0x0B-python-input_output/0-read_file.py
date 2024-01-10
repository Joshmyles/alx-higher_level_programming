#!/usr/bin/python3


def read_file(filename=""):
    """
    Read a text file (UTF-8) and print its content to stdout.

    Parameters:
    - filename: The name of the file to read. Defaults to an empty string.

    Returns:
    - None
    """
    with open(filename, encoding='utf-8') as file:
        # Read the content of the file and print it to stdout
        print(file.read(), end='')
