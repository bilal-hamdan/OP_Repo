import requests
import json

url = 'https://jsonplaceholder.typicode.com/posts'

response = requests.get(url)

json_data = response.json()


def count_vowels(text):
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1

    return count


posts_info = []

def set_arr():
    for post in json_data:
        user_id = post['userId']
        post_id = post['id']
        title = post['title']
        body = post['body']

        title_word_count = len(title.split())

        num_of_vowels = count_vowels(body)

        post_info = {
            'userid': user_id,
            'postid': post_id,
            'titlewordcount': title_word_count,
            'numberOfVowels': num_of_vowels
        }

        posts_info.append(post_info)

        print(json.dumps(posts_info, indent=4))
set_arr()


