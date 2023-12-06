#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    squared_matrix = []
    for i in matrix:
        row_matrix = []
        for j in i:
            row_matrix.append(j ** 2)
        squared_matrix.append(row_matrix)
    print(squared_matrix)
    print(matrix)
