# API Endpoint

URL server : [http://localhost:8080/api/v1]()
## Get all users
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
	}
]


```
## Get todo list of specific user
```http
GET : /users/{username}/todos
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
	}
]
```
## Get specific todo by id
```http
GET : /users/{username}/todos/{id}
```
```json
{
    "id": 1,
    "username": "Trustacean",
    "description": "Erming",
    "targetDate": "2024-10-13",
    "done": false
}
```
## Delete specific todo by id
```http
DELETE : /users/{username}/todos/{id}
```
## Update specific todo by id
```http
PUT : /users/{username}/todos/{id}
```
## Create todo
```http
POST : /users/{username}/todos
```
