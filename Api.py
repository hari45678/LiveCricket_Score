import requests

api_key = "6LdxntgZAAAAAFUGnqxdFolgOmLuQ6januc8AQDq"
base_url = 'https://.sportsmonks.com/api/v2.0/'

endpoint = 'fixtures'  'fixtures', 'leagues', etc.

params = {
    'api_token': api_key,

}

response = requests.get(f'{base_url}{endpoint}', params=params)

if response.status_code == 200:
    data = response.json()
else:
    print(f"Error: {response.status_code}")