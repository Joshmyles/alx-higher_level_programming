#!/usr/bin/python3


"""
Print the elements of the list in ascending order
"""


class MyList(list):
    """
    Print the elements of the list in ascending order
    """
    def print_sorted(self):
        # Sort the list in ascending order
        sorted_list = sorted(self)

        # Print the sorted list
        for element in sorted_list:
            print(element, end=' ')
        print()  # Add a newline after printing the sorted list
