from typing import List

from domain.student import Student
from infrastructure.base_repo import BaseRepository


class StudentRepository(BaseRepository[Student]):
    def __init__(self) -> None:
        super().__init__()

    def get_by_name(self, name: str) -> List[Student]:
        return [student for student in self.get_all() if student.name == name]
