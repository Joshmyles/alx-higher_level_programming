#!/usr/bin/python3


"""
matrix_divided function

Parameters:
    matrix (int)
    div (int)

Returns:
    int

Raises:
    TypeError: must be a matrix of integer
    TypeError: must have same size row
    TypeError: div must be a number
"""


def matrix_divided(matrix, div):
    """
    matrix_divided function

    Parameters:
        matrix (int):
        div (int):

    Returns:
        int
    Raises:
        TypeError: Must be a matrix of integer
        TypeError: Must have same size row
        TypeError: Div must be a number
    """
    if not all(isinstance(row, list) and all(isinstance(el, (int, float)) for el in row) for row in matrix):
        raise TypeError("matrix must be a matrix of integer")
    if not all(len(row) == len(matrix[0]) for row in matrix):
        raise TypeError("Each row of the matrix must have the same size")
    if not isinstance(div, (int, float)):
        raise TypeError("div must be a number")
    if div == 0:
        raise ZeroDivisionError("division by zero")
    
    result_matix = [[round(el / div, 2) for el in row] for row in matrix]

    return result_matrix
