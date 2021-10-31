---
sidebar_position: 1
---

# ~User API's~

Let's create **New User in less than 1 minutes**.

## Route For Create New User

Here is Create new User EndPoint

```shell
https://picaso-cms.herokuapp.com/user/register
```

You have to following kind of data to create new User.

```shell
{
    "first_name":"example",
    "last_name":"example",
    "email":"example@gmail.com",
    "password":"example",
    "passwordConfirm":"example"
}

```

In response you will got your account data with User Token.

```shell
{
    "ok": true,
    "data": {
        "_id": "617ddbc7c0d4729167a45060",
        "first_name": "example",
        "last_name": "example",
        "email": "example@gmail.com",
        "profile": {
            "thumb": {},
            "profile_img": {}
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2RkYmM3YzBkNDcyOTE2N2E0NTA2MCIsImlhdCI6MTYzNTYzODIxNn0.m4XNM8T_JeMnGh-rGMBXeriWBxEof5dbQ7bIM_0HHpY"
    }
}

```

## Route For Login User

Here is User login EndPoint

```shell
https://picaso-cms.herokuapp.com/user/login
```

You have to following kind of data to Login User.

```shell
{
    "email":"example@gmail.com",
    "password":"example",
}

```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "_id": "617ddbc7c0d4729167a45060",
        "first_name": "example",
        "last_name": "example",
        "email": "example@gmail.com",
        "profile": {
            "thumb": {},
            "profile_img": {}
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2RkYmM3YzBkNDcyOTE2N2E0NTA2MCIsImlhdCI6MTYzNTYzODMwNn0.hVFsB3_Rs8uPN4997Ud0amG3dHI88qXgyZe1QhbU4Ec"
    }
}

```

## Route For Update User

Here is User login EndPoint.
Please _Provide user token in authorization Header to update User_.

```shell
https://picaso-cms.herokuapp.com/user
```

Beware that you can only update first-name or last-name from this endpoint.
And Use patch Http method to update User

```shell
{
    "last_name":"husnain"
}

```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "message": "User updated successfully."
    }
}

```

## Route For Update User Password

Here is User password update EndPoint.
Please _Provide user token in authorization Header to update User Passowrd_.

```shell
https://picaso-cms.herokuapp.com/user/password
```

It is mendatory to provide all these information otherwise user password will not update.

```shell
{
    "password":"example12",
    "newPassword":"example12"
}
```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "message": "Password updated successfully."
    }
}

```

## Route For Getting User Through User Token

Here is User getting EndPoint through User Token.
Please _Provide user token in authorization Header to get User Passowrd_.

```shell
https://picaso-cms.herokuapp.com/user
```

Response will be like this

```shell
{
    "ok": true,
    "data": {
        "_id": "617ddbc7c0d4729167a45060",
        "first_name": "example",
        "last_name": "example",
        "email": "example@gmail.com",
        "profile": {
            "thumb": {},
            "profile_img": {}
        }
    }
}

```

<!-- ![alt text](/img/exp.png) -->

Your API Base URL is `https://picaso-cms.herokuapp.com`.
