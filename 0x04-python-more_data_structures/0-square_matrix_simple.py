#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    new_matrix = []
    for i in matrix:
        row_matrix = []
        for j in i:
            row_matrix.append(j ** 2)
        new_matrix.append(row_matrix)
    return new_matrix
    return matrix
