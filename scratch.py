def some_func(num: int, arr: list) -> list:
    arr.append(num)
    return arr


print(some_func('10', [1, 2, 3, '4', '5']))
help(some_func)

def square(x):
    return x**2

nums = [1, 2, 3, 4, 5, 6, 7]
squared_nums = list(map(square, nums))

print(nums)
print(squared_nums)


def is_even(num):
    return num % 2 == 0


even_nums = list(filter(is_even, nums))
print(even_nums)

list_a = [1, 2, 3]
list_b = [4, 5, 6]
print(list_a + list_b)

print(3 in list_a)

my_name_list = ['B', 'r', 'i', 'a', 'n']

print("".join(my_name_list))
print("-".join(my_name_list))

print(my_name_list[2:4])
print(my_name_list[:2])

my_list = [23, -1, 10, 3, 5, -7, 2]

print(sorted([str(x) for x in my_list]))
