#!/usr/bin/python3


"""
    Return the JSON representation of an object as a string.

    Parameters:
    - my_obj: The object to be serialized to JSON.

    Returns:
    - A string representing the JSON serialization of the object.
"""


def to_json_string(my_obj):
    """
    Return the JSON representation of an object as a string.

    Parameters:
    - my_obj: The object to be serialized to JSON.

    Returns:
    - A string representing the JSON serialization of the object.
    """
    # Use the json.dumps function to serialize the object to JSON
    return str(my_obj).replace("'", '"')
