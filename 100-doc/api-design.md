## Identify Object Model

1. User model
    - name
    - id
    - email
    - password
    - birthday
    - phoneNumber

2. post model
    - title
    - body 
    - [comments] (array)
    - createdTime
    - updatedTime

## Create Model URI

user model URI design

- For users
    - https://domain.com/api/users GET 
    - https://domain.com/api/users POST

    - https://domain.com/api/users/:id GET
    - https://domain.com/api/users/:id PUT/PATCH
    - https://domain.com/api/users/:id DELETE

- For posts
    - https://domain.com/api/users/posts GET
    - https://domain.com/api/users/posts POST

    - https://domain.com/api/users/posts/:id GET
    - https://domain.com/api/users/posts/:id PUT/PATCH
    - https://domain.com/api/users/posts/:id DELETE

## Single Data Representation

- For users 

    ```json

        {   
            id: 1,
            name: 'name',
            email: 'name@email.com',
            password: '123456',
            phone: '016121212121',
            birthday: '10 Jan 2001'
        }

    ```
## Determine Data Representation

Multiple single data consists and then make determine data.

  ```json

        [
            {   
                id: 1,
                name: 'name',
                email: 'name@email.com',
                password: '123456',
                phone: '016121212121',
                birthday: '20 Jan 2001'
            },
            {   
                id: 2,
                name: 'name2',
                email: 'name2@email.com',
                password: '123456',
                phone: '016121212121',
                birthday: '30 Jan 1998'
            },
            {   
                id: 3,
                name: 'name3',
                email: 'name3@email.com',
                password: '123456',
                phone: '016121212121',
                birthday: '5 Jan 2010'
            }

        ]

```

## Finally when we get the data it will be json alike object format

  ```json

        [
            {   
                "id": "1",
                "name": "name",
                "email": "name@email.com",
                "password": "123456",
                "phone": "016121212121",
                "birthday": "20 Jan 2001"
            },
            {   
                "id": "2",
                "name": "name",
                "email": "name2@email.com",
                "password": "123456",
                "phone": "016121212121",
                "birthday": "2030 Jan 1998"
            },
            {   
                "id": "1",
                "name": "name3",
                "email": "name3@email.com",
                "password": "123456",
                "phone": "016121212121",
                "birthday": "5 Jan 2010"
            }

        ]

```

when we press this url `https://domain.com/users` with Get method then server will give us this json alike object format