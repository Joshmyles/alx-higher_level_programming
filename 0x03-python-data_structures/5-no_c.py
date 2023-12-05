#!/usr/bin/python3
def no_c(my_string):
    for i in my_string:
        if(i == 'c' || i == 'C'):
            my_string.remove(i)
        else:
            print("{}".format(i))
