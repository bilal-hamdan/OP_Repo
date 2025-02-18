def find_second_largest(nums):
    largest = second_largest = 0

    for num in nums:
        if num > second_largest:
            if num >= largest:
                second_largest = largest
                largest = num
            else:
                second_largest = num

    if len(nums) < 2:
        return 'list does not contain a second largest number'

    return second_largest


nums = [1, 8, 10, 55]
second_largest = find_second_largest(nums)
print("The second largest number is: ", second_largest)
