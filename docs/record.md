---
sidebar_position: 1
---

# Records Api

Let's create **New Record For Field**.

## Route For Create New Record

_Provide Full Access Token in Authorization Header_ <br />
**Provide model identifier in URL**

```shell
https://api-fluidcms.herokuapp.com/record/<modelAlias>
```

And URL will look like this.

```shell
https://api-fluidcms.herokuapp.com/record/demo1
```

Provide Following data to create new Record.

```shell
{
    "fields":[
        {
        "field_alias":"profile",
        "value":"asdb"
        }
    ]
}


```

In response will look like this.

```shell
{
    "ok": true,
    "data": {
        "_id": "617e6858d61e1d0a1719efc2",
        "model_id": "617d796340c7dca02c415916",
        "fields": [
            {
                "field_id": "617da4e3e3683e968b6caf85",
                "value": ""
            },
            {
                "field_id": "617e586fd61e1d0a1719ef48",
                "value": "asdb"
            }
        ]
    }
}
```

## Route Get Only One Record

Here is single record EndPoint

_You can access single Record by Full access token or only Read Token._
_<br /> Provide Access Token in Authorization Header._

```shell
https://api-fluidcms.herokuapp.com/record/617e6858d61e1d0a1719efc2
```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "model_id": "617d796340c7dca02c415916",
        "fields": [
            {
                "field_id": "617da4e3e3683e968b6caf85",
                "value": ""
            },
            {
                "field_id": "617e586fd61e1d0a1719ef48",
                "value": "asdb"
            }
        ]
    }
}

```

## Route Get All record Of model

Here is All record EndPoint

_You can access single record by Full access token or only Read Token._

_Provide Full Access Token in Authorization Header_ <br />
**Provide model identifier in URL**

```shell
https://api-fluidcms.herokuapp.com/record/<modelAlias>
```

And URL will look like this.

```shell
https://api-fluidcms.herokuapp.com/record/all/demo1
```

And response will be like this

```shell
{
    "ok": true,
    "data": [
        {
            "_id": "617da4e3e3683e968b6caf85",
            "pubg": "good game",
            "Demo": "testing phase",
            "language": "python",

        },
        {
            "_id": "617e586fd61e1d0a1719ef48",
            "pubg": "best",
            "Demo": "testing",
            "language": "java",
        },
    ]
}

```

## Route For Update Record

Here is Record Update EndPoint.
Please _Provide Full access token in authorization Header to update Record._
_Provide Record Id in url._

```shell
https://api-fluidcms.herokuapp.com/record/617e6858d61e1d0a1719efc2
```

You can only update Field Value through this endpoint <br />
And Use patch Http method to update User

```shell
{
    "fields":[
        {
        "field_id":"617e586fd61e1d0a1719ef48",
        "value":"Hunny"
        }
    ]
}

```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "_id": "617e6858d61e1d0a1719efc2",
        "model_id": "617d796340c7dca02c415916",
        "fields": [
            {
                "field_id": "617da4e3e3683e968b6caf85",
                "value": ""
            },
            {
                "field_id": "617e586fd61e1d0a1719ef48",
                "value": "Hunny"
            }
        ]
    }
}

```

## Route For Deleting Record

Here is Deleting EndPoint through Full access Token.
Please _Provide Full Access token in authorization Header to Delete Record_.
Please _Provide Record id in URL to Delete Record_.

```shell
https://api-fluidcms.herokuapp.com/record/617e6858d61e1d0a1719efc2
```

Response will be like this

```shell
{
    "ok": true,
    "data": {
        "message": "Record deleted"
    }
}
```

<!-- ![alt text](/img/exp.png) -->

Your API Base URL is `https://api-fluidcms.herokuapp.com`.
