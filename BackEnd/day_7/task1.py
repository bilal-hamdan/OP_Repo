import requests
import json

x = input('Enter a number: ')

url = f'https://jsonplaceholder.typicode.com/posts/{x}'


def create_post(x):
    try:
        x = int(x)

        response = requests.get(url)

        response.raise_for_status()

        json_data = response.json()
        json_data_pretty = json.dumps(json_data, indent=4)

        file_path = f'data/post_{x}.json'


        try:
            with open(file_path, 'r') as post_file:
                print('File already exists. Here is the content:')
                print(post_file.read())
        except FileNotFoundError:
            with open(file_path, 'w') as post_file:
                post_file.write(json_data_pretty)
            print(f'File created successfully and data saved to {file_path}')

    except requests.exceptions.HTTPError as err:
        print(f'HTTP error occurred: {err}')
    except ValueError:
        print('Error: Please enter a valid number.')

create_post(x)