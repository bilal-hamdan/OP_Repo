from sqlalchemy import Column, Integer, String, Enum, Date, DateTime, func
from my_db import Base
import enum

class CarColor(enum.Enum):
    RED = "Red"
    BLUE = "Blue"
    GREEN = "Green"

class Car(Base):
    __tablename__ = "cars"

    id = Column(Integer, primary_key=True, autoincrement=True)
    model = Column(String, nullable=False)
    color = Column(Enum(CarColor), nullable=False)
    year = Column(Date, nullable=False)
    brand = Column(String, nullable=False)
    vin_num = Column(String, unique=True, nullable=False)  # UNIQUE constraint
    created_at = Column(DateTime, server_default=func.now())  # Auto-generated timestamp
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())  # Auto-updated
