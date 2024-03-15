#!/bin/usr/python3


import MySQLdb
import sys


"""
search_states - function
uname: username input
pwd: pwd
db: db
sname: statename
"""


def search_states(uname, pwd, db, sname):
    try:
        # Connect to MySQL server
        db = MySQLdb.connect(host="localhost", port=3306, user=uname, pwd=pwd, db=db)

        # Create a cursor object
        cursor = db.cursor()

        # Prepare the SQL query using user input
        query = "SELECT * FROM states WHERE name = '{}' ORDER BY id ASC".format(state_name)

        # Execute the query
        cursor.execute(query)

        # Fetch all the rows
        states = cursor.fetchall()

        # Display the results
        for state in states:
            print(state)

        # Close the cursor and database connection
        cursor.close()
        db.close()

    except MySQLdb.Error as e:
        print("MySQL Error {}: {}".format(e.args[0], e.args[1]))


"""
main function
"""


if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: python script.py <username> <password> <database> <state_name>")
        sys.exit(1)

    uname = sys.argv[1]
    pwd = sys.argv[2]
    db = sys.argv[3]
    sname = sys.argv[4]

    search_states(uname, pwd, db, sname)
