#!/usr/bin/python3


import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State
from model_city import City


"""
fetch_cities_by_state
"""


def fetch_cities_by_state(username, password, database):
    try:
        # Connect to MySQL server
        engine = create_engine(f'mysql://{username}:{password}@localhost:3306/{database}')

        # Create a session maker
        Session = sessionmaker(bind=engine)
        session = Session()

        # Query all City objects and join with State to get state name
        cities = session.query(City, State).join(State).order_by(City.id).all()

        # Display the results
        for city, state in cities:
            print(f"{state.name}: ({city.id}) {city.name}")

        # Close the session
        session.close()

    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python 14-model_city_fetch_by_state.py <username> <password> <database>")
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    fetch_cities_by_state(username, password, database)
