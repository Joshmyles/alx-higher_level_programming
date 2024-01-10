#!/usr/bin/python3


"""
    Write an object to a text file using its JSON representation.

    Parameters:
    - my_obj: The object to be serialized and saved to the file.
    - filename: The name of the file to save the JSON representation.

    Returns:
    - None
"""


def save_to_json_file(my_obj, filename):
    """
    Write an object to a text file using its JSON representation.

    Parameters:
    - my_obj: The object to be serialized and saved to the file.
    - filename: The name of the file to save the JSON representation.

    Returns:
    - None
    """
    with open(filename, 'w') as file:
        # Use the json.dump function, serialize object to JSON, write to file
        file.write(str(my_obj).replace("'", '"'))
