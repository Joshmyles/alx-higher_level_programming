#!/usr/bin/python3


"""
    Create an object from a JSON file.

    Parameters:
    - filename: The name of the JSON file to read.

    Returns:
    - The Python object created from the JSON file.
"""


def load_from_json_file(filename):
    """
    Create an object from a JSON file.

    Parameters:
    - filename: The name of the JSON file to read.

    Returns:
    - The Python object created from the JSON file.
    """
    with open(filename, 'r') as file:
        # Use the json.load function, read JSON file, create object
        return eval(file.read())
