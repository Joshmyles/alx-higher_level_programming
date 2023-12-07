#!/usr/bin/python3
def simple_delete(a_dictionary, key=""):
    keys_set = a_dictionary.keys()
    for key in keys_set:
        if key == key:
            a_dictionary[key].remove()
