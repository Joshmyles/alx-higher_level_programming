#!/usr/bin/python3


import MySQLdb
import sys


"""
list_cities - function
"""


def list_cities(username, password, database):
    try:
        # Connect to MySQL server
        db = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database)

        # Create a cursor object
        cursor = db.cursor()

        # Prepare the SQL query
        query = "SELECT * FROM cities ORDER BY id ASC"

        # Execute the query
        cursor.execute(query)

        # Fetch all the rows
        cities = cursor.fetchall()

        # Display the results
        for city in cities:
            print(city)

        # Close the cursor and database connection
        cursor.close()
        db.close()

    except MySQLdb.Error as e:
        print("MySQL Error {}: {}".format(e.args[0], e.args[1]))


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python script.py <username> <password> <database>")
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    list_cities(username, password, database)
