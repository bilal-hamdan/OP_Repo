from sqlalchemy.orm import Session
from models import Car

def create_car(db: Session, car: Car):
    db.add(car)
    db.commit()
    db.refresh(car)
    return car

def get_all_cars(db: Session):
    return db.query(Car).all()

def print_all_cars(db: Session):
    cars = get_all_cars(db)
    if not cars:
        print("\n🚗 No cars found in the database!")
    else:
        print("\n🚗 All Cars in Database:")
        for car in cars:
            print(f"ID: {car.id} | Model: {car.model} | Color: {car.color.value} | Year: {car.year} | Brand: {car.brand} | VIN: {car.vin_num}")

def get_car_by_vin(db: Session, vin_num: str):
    return db.query(Car).filter(Car.vin_num == vin_num).first()

def update_car(db: Session, vin_num: str, model: str = None, color: str = None):
    car = get_car_by_vin(db, vin_num)
    if car:
        if model:
            car.model = model
        if color:
            car.color = color
        db.commit()
        return car
    return None

def delete_car(db: Session, vin_num: str):
    car = get_car_by_vin(db, vin_num)
    if car:
        db.delete(car)
        db.commit()
        return True
    return False
