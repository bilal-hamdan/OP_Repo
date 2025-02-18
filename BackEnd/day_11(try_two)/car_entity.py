from dataclasses import dataclass

from datetime import datetime

@dataclass
class BaseEntity:
    id: int
    created_at: datetime
    updated_at: datetime

@dataclass
class Car(BaseEntity):
    model: str
    color: str
    brand: str
    vin_num: str