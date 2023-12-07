#!/usr/bin/python3
    def print_sorted_dictionary(a_dictionary):
        sorted_dict_by_keys = sorted(a_dictionary.keys())
        for key in sorted_dict_by_keys:
            print(f"{key}: {a_dictionary[key]}")
