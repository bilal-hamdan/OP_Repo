import requests
import json


x = input('Enter a number: ')

url = 'https://jsonplaceholder.typicode.com/comments/' + x

try:
    x = int(x)
    response = requests.get(url)

    response.raise_for_status()

    json_data = response.json()
    json_data_pretty = json.dumps(json_data, indent=4)
    print(json_data_pretty)

except requests.exceptions.HTTPError as err:
    print('HTTP error occurred: ', err)
except ValueError:
    print('Error: Please enter a valid number.')    
