from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "sqlite:///cars.db"
engine = create_engine(DATABASE_URL, echo=True)

session_local = sessionmaker(bind=engine)

Base = declarative_base()
