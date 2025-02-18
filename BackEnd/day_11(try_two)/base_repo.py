from typing import Generic, TypeVar 

E = TypeVar('BaseEntity', bound=True)

class BaseRepo:
    def __init__(self, table_name: str, entity: Generic(E)) -> None:
        self.entity = entity
        self.table_name = table_name

    def insert(self, entity: E) -> E:
        ...

    def get_all(self) -> list[E]:
        ...

    def get(self, id: int) -> E:
        ...

    def update(self, id: int, data: dict[str, Any]) -> E:
        ...

    def delete(self, id: int) -> None:
        ...