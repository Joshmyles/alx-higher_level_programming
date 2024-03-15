#!/usr/bin/python3


import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State


"""
list_states_with_letter
"""


def list_states_with_letter_a(username, password, database):
    try:
        # Connect to MySQL server
        engine = create_engine(f'mysql://{username}:{password}@localhost:3306/{database}')

        # Create a session maker
        Session = sessionmaker(bind=engine)
        session = Session()

        # Query State objects containing the letter 'a'
        states_with_a = session.query(State).filter(State.name.like('%a%')).order_by(State.id).all()

        # Display the results
        for state in states_with_a:
            print(state)

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

    list_states_with_letter_a(username, password, database)
