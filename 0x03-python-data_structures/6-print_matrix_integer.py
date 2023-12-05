#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        for i, j in enumerate(row):
            if (i == len(row) - 1):
                print("{:d}".format(j), end="")
            else:
                print("{:d}".format(j), end="")
        print()
