from my_db import SessionLocal, engine, Base
from crud import create_car, update_car, delete_car, print_all_cars
from models import Car, CarColor
from datetime import date

Base.metadata.create_all(bind=engine)

db = SessionLocal()
car1 = Car(model="Tesla Model 3", color=CarColor.RED, year=date(2023, 1, 1), brand="Tesla", vin_num="123ABC456DEF789GH")
car2 = Car(model="Ford Mustang", color=CarColor.BLUE, year=date(2022, 5, 10), brand="Ford", vin_num="456XYZ789LMN123OP")

create_car(db, car1)
create_car(db, car2)

print_all_cars(db)

update_car(db, "123ABC456DEF789GH", model="Tesla Model S", color=CarColor.GREEN)

print("\nAfter update:")
print_all_cars(db)

delete_car(db, "123ABC456DEF789GH")

print("\nAfter deletion:")
print_all_cars(db)

db.close()
