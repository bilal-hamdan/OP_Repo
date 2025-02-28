from abc import ABC, abstractmethod
from typing import Optional


class BaseEntity(ABC):
    def __init__(self) -> None:
        self.id: Optional[int] = None  # Optionally, each entity can have an ID

    @abstractmethod
    def to_dict(self) -> dict:
        """
        Each entity should implement this
        method to convert itself to a dictionary.
        """
        pass

    def __eq__(self, other: object) -> bool:
        """
        Compare entities based on their ID.
        """
        if isinstance(other, BaseEntity):
            return self.id == other.id
        return False

    def __repr__(self) -> str:
        """
        Return a string representation of
        the entity (can be useful for debugging).
        """
        return f"<{self.__class__.__name__}(id={self.id})>"
