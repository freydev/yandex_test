def li_concat(list_of_keys, list_of_values):
	diff = len(list_of_keys) - len(list_of_values)
	list_of_values += diff > 0 and [None for x in range(diff)] or []
	return dict(zip(list_of_keys, list_of_values))

keys = ['a','b','c','d']
values = [1,2,3,4,5,6]

print li_concat(keys, values)