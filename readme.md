# Web Api


## Entities

In the application we manage a series of entities.
|ENTITES|PROPIETIES|
|------|--------|
|USER| name, firstname, lastname, username, password, accessLevel, profileId |
|PROFILE| description, amount|
|EVENT| description, capacity, date
|CONTRIBUTION| name |
|AREA| description, location |
|SPECIE| name, specie, qty|


## Requests

| METHODS | ACTION                                           |
| ------- | ------------------------------------------------ |
| GET     | Retrieves resources                              |
| POST    | Creates resources                                |
| PUT     | Changes and/or replaces resources or collections |
| DELETE  | Deletes resources                                |

## Example Request

Request structure for the User entity.

| METHODS | ACTIONS | DESCRIPTION | REQUESTBODY   |
| ------- | ----------- | ------------------ | --- |
| GET     | /users      | Get list of users  ||
| GET     | /users/{id} | Get de users by id ||
| POST    | /users/     | Create a new users | <pre> { <br> "name": "Complete Name", <br> "firstname": "First Name of new user", <br> "lastname": "Last Name of new user", <br> "username" : "New unique username", <br> "password" : "New alfanumeric password", <br> "accessLevel" : "0", <br> "profileId": "" <br> } </pre> |
| PUT     | /users/{id} | Update de user by id | <pre lang="json"> { <br> "name": "Complete Name", <br> "firstname": "First Name of new user", <br> "lastname": "Last Name of new user", <br> "username" : "New unique username", <br> "password" : "New alfanumeric password", <br> "accessLevel" : "0", <br> "profileId": "" <br> } </pre>|
|DELETE|/users/{id}|Delete de user by id||
