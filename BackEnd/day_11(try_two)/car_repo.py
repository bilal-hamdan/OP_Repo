from base_repo import BaseRepo
from car_entity import Car

class carRepo(BaseRepo(Car)):
    def __init__(self) -> None:
        self.table_name = 'cars'
        self.entity = Car
        super