class Human ():
    name: str
    age: int

    def __init__(self, name, age):
        self.name = name
        self.age = age


class Student(Human):
    grade: int

    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

    def get_info(self):
        print(f'Hi my name is {self.name}')
        print(f'i am {self.age} years old and I am in {self.grade}th grade !')


class Adult(Human):
    job: str

    def __init__(self, name, age, job):
        super().__init__(name, age)
        self.job = job

    def get_info(self):
        print(f'Hi my name is {self.name}')
        print(f'i am {self.age} years old and I am a {self.job} !')


bilal = Student('bilal', 13, 8)
bilal.get_info()
ahmad = Adult('ahmad', 33, 'teacher')
ahmad.get_info()
