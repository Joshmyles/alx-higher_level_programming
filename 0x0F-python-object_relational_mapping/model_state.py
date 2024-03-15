#!/usr/bin/python3


import MySQLdb
import sys


"""
list_cities_of_state - function
username: username
password: password
database: database
state_name
"""


def list_cities_of_state(username, password, database, state_name):
    try:
        # Connect to MySQL server
        db = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database)

        # Create a cursor object
        cursor = db.cursor()

        # Prepare the SQL query using parameterized query
        query = "SELECT cities.id, cities.name, states.name FROM cities JOIN states ON cities.state_id = states.id WHERE states.name = %s ORDER BY cities.id ASC"

        # Execute the query with parameters
        cursor.execute(query, (state_name,))

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
    if len(sys.argv) != 5:
        print("Usage: python script.py <username> <password> <database> <state_name>")
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    state_name = sys.argv[4]

    list_cities_of_state(username, password, database, state_name)
