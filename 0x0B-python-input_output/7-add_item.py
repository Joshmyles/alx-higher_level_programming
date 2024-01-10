#!/usr/bin/python3


import sys


# Function to save a list to a JSON file
def save_to_json_file(my_obj, filename):
    with open(filename, 'w') as file:
        file.write(str(my_obj).replace("'", '"'))

# Function to load a list from a JSON file
def load_from_json_file(filename):
    with open(filename, 'r') as file:
        return eval(file.read())

# Script to add arguments to a list and save it to a file
if __name__ == "__main__":
    # Check if the file exists, and load its content if it does
    try:
        existing_list = load_from_json_file("add_item.json")
    except FileNotFoundError:
        existing_list = []

    # Add the command-line arguments to the existing list
    arguments = sys.argv[1:]
    combined_list = existing_list + arguments

    # Save the updated list to the file
    save_to_json_file(combined_list, "add_item.json")
