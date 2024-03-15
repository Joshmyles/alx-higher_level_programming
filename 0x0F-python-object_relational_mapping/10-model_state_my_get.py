#!/usr/bin/python3


import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State


"""
print_state_by_name
"""


def print_state_by_name(username, password, database, state_name):
    try:
        # Connect to MySQL server
        engine = create_engine(f'mysql://{username}:{password}@localhost:3306/{database}')

        # Create a session maker
        Session = sessionmaker(bind=engine)
        session = Session()

        # Query State object with the given name
        state = session.query(State).filter(State.name == state_name).first()

        if state:
            print(state.id)
        else:
            print("Not found")

        # Close the session
        session.close()

    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: python script.py <username> <password> <database> <state_name>")
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    state_name = sys.argv[4]

    print_state_by_name(username, password, database, state_name)
