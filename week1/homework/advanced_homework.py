# For the following list of numbers:

numbers = [1, 6, 2, 2, 7, 1, 6, 13, 99, 7]

# 1. Print out a list of the even integers:
evens = []
for num in numbers:
    if num % 2 != 0:
        evens.append(num)
print(evens)

# 2. Print the difference between the largest and smallest value:
largest = max(numbers)
smallest = min(numbers)
print(largest-smallest)

# 3. Print True if the list contains a 2 next to a 2 somewhere.
result = False
index = 0
for num in numbers:
    if index != 0:
        if num == 2 and numbers[index-1] ==2:
            result = True
    index += 1
print(result)

# 4. Print the sum of the numbers, 
#    BUT ignore any section of numbers starting with a 6 and extending to the next 7.
#    
#    So [11, 6, 4, 99, 7, 11] would have sum of 22

total = 0
found_6 = False
for num in numbers:
    if num == 6:
        found_6 = True
    elif found_6 == True:
        if num == 7:
            found_6 = False
    else:
        total += num
print(total)

# 5. HARD! Print the sum of the numbers. 
#    Except the number 13 is very unlucky, so it does not count.
#    And numbers that come immediately after a 13 also do not count.
#    HINT - You will need to track the index throughout the loop.
#
#    So [5, 13, 2] would have sum of 5. 

index = 0 
total = 0
for num in numbers:
    if num == 13 or numbers[index-1] == 13:
        pass
    else:
        total += num
    index += 1
print(total)