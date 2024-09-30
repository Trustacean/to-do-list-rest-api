## API Endpoint

URL server : [http://localhost:8080]()
### Get all users
```http
GET :  /users
```
Response examples
```json
[
	{
		"id": 1,
		"name": "Adam",
		"birthDate": "2024-09-30"
	},
	{
		"id": 2,
		"name": "Eve",
		"birthDate": "2024-09-30"
	},
	{
		"id": 3,
		"name": "Jack",
		"birthDate": "2024-09-30"
	}
]
```
### Get todo list of specific user
```http
GET : /users/todos
```
Response examples
```json
[
	{
		"id": 1,
		"username": "Trustacean",
		"task": "Erming",
		"targetDate": "2024-09-30T00:53:50.406+00:00",
		"completed": false
	},
	{
		"id": 2,
		"username": "Trustacean",
		"task": "Learning Neo TSD",
		"targetDate": "2024-09-30T00:53:50.406+00:00",
		"completed": false
	},
	{
		"id": 3,
		"username": "Trustacean",
		"task": "Learning Spring Boot",
		"targetDate": "2024-09-30T00:53:50.406+00:00",
		"completed": false
	}
]
```
