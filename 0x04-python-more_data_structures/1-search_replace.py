#!/usr/bin/python3
def search_replace(my_list, search, replace):
    new_list = my_list
    for i in new_list:
        if i == search:
            new_list.append(replace)
        else:
            new_list.append(i)
    return new_list
    return my_list
