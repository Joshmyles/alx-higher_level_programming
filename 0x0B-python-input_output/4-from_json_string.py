#!/usr/bin/python3


"""
    Return the Python object represented by a JSON string.

    Parameters:
    - my_str: The JSON string to be deserialized.

    Returns:
    - The Python object represented by the JSON string.
"""


def from_json_string(my_str):
    """
    Return the Python object represented by a JSON string.

    Parameters:
    - my_str: The JSON string to be deserialized.

    Returns:
    - The Python object represented by the JSON string.
    """
    # Use the json.loads function to deserialize the JSON string
    return eval(my_str)
