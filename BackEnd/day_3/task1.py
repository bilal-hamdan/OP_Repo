import requests
import json

url = 'https://jsonplaceholder.typicode.com/comments/1'

response = requests.get(url)

json_data = response.json()

json_data_pretty = json.dumps(json_data, indent=4)

print(json_data_pretty)


