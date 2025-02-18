class Counter:
    count = 0  # Class attribute (shared by all instances)

    def __init__(self):
        self.instance_count = 0  # Instance attribute (unique to each instance)

    def increment_instance(self):
        """Modifies instance attribute (self)"""
        self.instance_count += 1
        return self.instance_count

    @classmethod
    def increment_class(cls):
        """Modifies class attribute (cls)"""
        cls.count += 1
        return cls.count

# Creating two instances
c1 = Counter()
c2 = Counter()

# Using instance method (affects only c1)
print(c1.increment_instance())  # Output: 1
print(c1.increment_instance())  # Output: 2
print(c2.increment_instance())  # Output: 1 (separate instance variable)

# Using class method (affects the class, shared by all instances)
print(Counter.increment_class())  # Output: 1
print(Counter.increment_class())  # Output: 2
