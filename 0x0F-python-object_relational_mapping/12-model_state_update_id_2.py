#!/usr/bin/python3


import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State


"""
change_state_name
"""


def change_state_name(username, password, database):
    try:
        # Connect to MySQL server
        engine = create_engine(f'mysql://{username}:{password}@localhost:3306/{database}')

        # Create a session maker
        Session = sessionmaker(bind=engine)
        session = Session()

        # Query the State object with id = 2
        state_to_change = session.query(State).filter_by(id=2).first()

        # If the state exists, change its name to "New Mexico"
        if state_to_change:
            state_to_change.name = "New Mexico"
            session.commit()
            print("State name changed successfully")
        else:
            print("State with id=2 not found")

        # Close the session
        session.close()

    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python script.py <username> <password> <database>")
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    change_state_name(username, password, database)
