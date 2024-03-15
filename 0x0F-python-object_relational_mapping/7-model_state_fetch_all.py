#!/usr/bin/python3


from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base


# Create an instance of declarative_base
Base = declarative_base()


# Define the State class
class State(Base):
    __tablename__ = 'states'

    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    name = Column(String(128), nullable=False)


# Ensure all classes are imported before calling Base.metadata.create_all(engine)
if __name__ == '__main__':
    # Connect to MySQL server
    engine = create_engine('mysql://username:password@localhost:3306/database')

    # Create tables
    Base.metadata.create_all(engine)
