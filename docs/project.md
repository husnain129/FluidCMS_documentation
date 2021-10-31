---
sidebar_position: 1
---

# ~Project API's~

Let's create **New User in less than 1 minutes**.

## Route For Create New User

Here is Create new Project EndPoint

```shell
https://picaso-cms.herokuapp.com/project
```

Provide Project title to create new Project.
_Provide User Token in Authorization Header_

```shell
{
    "title":"Demo"
}

```

In response will look like this.

```shell
{
    "ok": true,
    "data": {
        "_id": "617de74affc1f190a85e4047",
        "title": "Demo",
        "access_tokens": [
            {
                "token": "8MqXQ4LXV73JVobdb_0g5",
                "access_type": 1
            },
            {
                "token": "rP0jhv2YTe6dDNMajaFBR",
                "access_type": 0
            }
        ]
    }
}
```

Here is response and the main thing is access tokens _through which you can access you projects to update data._

## Route Get Only One Project

Here is User login EndPoint
_Provide user token in authorization and project id in endpoint_

```shell
https://picaso-cms.herokuapp.com/project/617de74affc1f190a85e4047
```

````

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "project": {
            "_id": "617de74affc1f190a85e4047",
            "title": "Demo",
            "access_tokens": [
                {
                    "token": "8MqXQ4LXV73JVobdb_0g5",
                    "access_type": 1
                },
                {
                    "token": "rP0jhv2YTe6dDNMajaFBR",
                    "access_type": 0
                }
            ]
        }
    }
}

````

## Route For Update Project

Here is User Update EndPoint.
Please _Provide user token in authorization Header to update Project._

```shell
https://picaso-cms.herokuapp.com/project/617de74affc1f190a85e4047
```

````

You can only update Project Title through this endpoint.
And Use patch Http method to update User

```shell
{
    "title":"Demo2"
}

````

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "_id": "617de74affc1f190a85e4047",
        "user_id": "616c150867cd3da78559b075",
        "title": "Demo2",
        "access_tokens": [
            {
                "token": "8MqXQ4LXV73JVobdb_0g5",
                "access_type": 1,
                "_id": "617de74affc1f190a85e4048"
            },
            {
                "token": "rP0jhv2YTe6dDNMajaFBR",
                "access_type": 0,
                "_id": "617de74affc1f190a85e4049"
            }
        ],
        "created_at": "2021-10-31T00:46:02.502Z",
        "__v": 0
    }
}

```

## Route For Get All Project

Here is Get All Project EndPoint.
Please _Provide user token in authorization Header to Get ALL Project_.

```shell
https://picaso-cms.herokuapp.com/project
```

And response will be like this

```shell
{
    "ok": true,
    "data": [
        {
            "_id": "616ed3e28d3d48557ef2b80b",
            "title": "html",
            "created_at": "2021-10-31T00:55:53.494Z",
            "access_tokens": [
                {
                    "token": "a2cuMzHl1tCv5MiDN2kkm",
                    "access_type": 1
                },
                {
                    "token": "AU_OD0CblrGopv1uuEB1j",
                    "access_type": 0
                }
            ]
        },
        {
            "_id": "61749ade0f2279f8b685b17f",
            "title": "test2",
            "created_at": "2021-10-23T23:29:34.870Z",
            "access_tokens": [
                {
                    "token": "xyGHYA20bGiwT7uMFdSi3",
                    "access_type": 1
                },
                {
                    "token": "BN-ZrV1myDCKBDg1PUv7a",
                    "access_type": 0
                }
            ]
        },
    ]
}


```

## Route For Deleting Project

Here is Deleting EndPoint through User Token.
Please _Provide user token in authorization Header to Delete Project_.

```shell
https://picaso-cms.herokuapp.com/project/617de74affc1f190a85e4047
```

Response will be like this

```shell
{
    "ok": true,
    "data": {
        "message": "Project deleted successfully"
    }
}

```

<!-- ![alt text](/img/exp.png) -->

Your API Base URL is `https://picaso-cms.herokuapp.com`.
