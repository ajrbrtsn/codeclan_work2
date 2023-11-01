# 1. Create an empty list called `task_list`
# task_list []
# 2. Add a few `str` elements, representing some everyday tasks e.g. 'Make Dinner'
# task_list.append("")
# 3. Print out `task_list`
# print(task_list)
# 4. Remove the last task
# task_list.pop()    empty bracket removes last - add index to delete specific list item
# 5. Print out `task_list`

# 6. Print out the number of elements in `task_list`

task_list  = []
task_list.append("Brush teeh")
task_list.append("sleep")
task_list.append("eat")
print(task_list)
task_list.pop()
print(task_list)
size_of_task_list = len(task_list)
print(size_of_task_list)