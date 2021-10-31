---
sidebar_position: 1
---

# ~Fields API's~

Let's create **New Fields For Model**.

## Route For Create New Fields

Here is Create new Fields EndPoint

```shell
https://picaso-cms.herokuapp.com/field
```

_Provide Full Access Token in Authorization Header_

Provide Following data to create new Field.

```shell
{
    "model_id":"617d796340c7dca02c415916",
    "name":"language",
    "alias":"language",
    "field_type":0,
    "validation":{
        "isRequired": true,
        "regex": "[0-9]+"
    }
}


```

In response will look like this.

```shell
{
    "ok": true,
    "data": {
        "field_id": "617e586fd61e1d0a1719ef48"
    }
}
```

## Route Get Only One Field

Here is single field EndPoint

_You can access single Field by Full access token or only Read Token._
_<br /> Provide Access Token in Authorization Header._

```shell
https://picaso-cms.herokuapp.com/field/617e586fd61e1d0a1719ef48
```

````

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "_id": "617e586fd61e1d0a1719ef48",
        "model_id": "617d796340c7dca02c415916",
        "name": "Demo",
        "alias": "Demo",
        "field_type": 0,
        "validation": {
            "isRequired": true,
            "regex": ""
        }
    }
}

````

## Route Get All Field Of model

Here is ALl field EndPoint

_You can access single Field by Full access token or only Read Token._
_<br /> Provide Access Token in Authorization Header._
_<br /> NOTE: Provide model id in URL to get all fields of that model._

```shell
https://picaso-cms.herokuapp.com/field/617d796340c7dca02c415916
```

````

And response will be like this

```shell
{
    "ok": true,
    "data": [
        {
            "_id": "617d79afa1d0e22e943d9ca8",
            "name": "pubg",
            "alias": "pubg",
            "field_type": 0,
            "validation": {
                "isRequired": true,
                "regex": "abc"
            }
        },
        {
            "_id": "617da4e3e3683e968b6caf85",
            "name": "language",
            "alias": "language",
            "field_type": 0,
            "validation": {
                "isRequired": true,
                "regex": "[0-9]+"
            }
        },
        {
            "_id": "617e586fd61e1d0a1719ef48",
            "name": "Demo",
            "alias": "Demo",
            "field_type": 0,
            "validation": {
                "isRequired": true,
                "regex": ""
            }
        }
    ]
}

````

## Route For Update Model

Here is Model Update EndPoint.
Please _Provide Full access token in authorization Header to update Model._
_Provide model Id in url._

```shell
https://picaso-cms.herokuapp.com/model/617e53efd61e1d0a1719eee8
```

You can only update Model Title through this endpoint. <br />
And Use patch Http method to update User

```shell
{
    "alias":"Demo2"
}

```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "message": "Model updated"
    }
}

```

## Route For Get All Model

Here is Get All Project EndPoint.
Please _Provide Full access token in authorization Header to Get ALL Models_.

```shell
https://picaso-cms.herokuapp.com/model/all
```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "models": [
            {
                "_id": "617e53efd61e1d0a1719eee8",
                "name": "Demo",
                "alias": "Demo2",
                "fields": []
            }
        ]
    }
}


```

## Route For Deleting Field

Here is Deleting EndPoint through Full access Token.
Please _Provide Full Access token in authorization Header to Delete Field_.
Please _Provide field id in URL to Delete Field_.

```shell
https://picaso-cms.herokuapp.com/field/617d79afa1d0e22e943d9ca8
```

Response will be like this

```shell
{
    "ok": true,
    "data": "Field with 617d79afa1d0e22e943d9ca8 deleted"
}
```

<!-- ![alt text](/img/exp.png) -->

Your API Base URL is `https://picaso-cms.herokuapp.com`.
