#!/usr/bin/python3


import MySQLdb
import sys


""" list_states function that takes in 3 parameters: uname, pwd, db"""


def list_states(uname, pwd, db):
    try:
        # Connect to MySQL server
        db = MySQLdb.connect(host="localhost", port=3306, user=uname, pwd=pwd, db=db)

        # Create a cursor object
        cursor = db.cursor()

        # Execute the query
        cursor.execute("SELECT * FROM states ORDER BY id ASC")

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


""" Main function """
if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python script.py <uname> <pwd> <db>")
        sys.exit(1)

    uname = sys.argv[1]
    pwd = sys.argv[2]
    db = sys.argv[3]

    list_states(uname, pwd, db)
