---
sidebar_position: 1
---

# ~Records API's~

Let's create **New Record For Field**.

## Route For Create New Record

Here is Create new Fields EndPoint

```shell
https://picaso-cms.herokuapp.com/field
```

_Provide Full Access Token in Authorization Header_

Provide Following data to create new Record.

```shell
{
    "model_id":"617d796340c7dca02c415916",
    "fields":[
        {
        "field_id":"617e586fd61e1d0a1719ef48",
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
https://picaso-cms.herokuapp.com/record/617e6858d61e1d0a1719efc2
```

````

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

````

## Route Get All record Of model

Here is All record EndPoint

_You can access single record by Full access token or only Read Token._
_<br /> Provide Access Token in Authorization Header._
_<br /> NOTE: Provide model id in URL to get all records of that model._

```shell
https://picaso-cms.herokuapp.com/record/all/617d796340c7dca02c415916
```

````

And response will be like this

```shell
{
    "ok": true,
    "data": [
        {
            "_id": "617d7aa17b812ba422d0999c",
            "fields": [
                {
                    "field_id": "617da4e3e3683e968b6caf85",
                    "value": ""
                },
                {
                    "field_id": "617e586fd61e1d0a1719ef48",
                    "value": ""
                }
            ]
        },
        {
            "_id": "617d7ad331de61d4246862ea",
            "fields": [
                {
                    "field_id": "617da4e3e3683e968b6caf85",
                    "value": ""
                },
                {
                    "field_id": "617e586fd61e1d0a1719ef48",
                    "value": ""
                }
            ]
        },

        {
            "_id": "617e6858d61e1d0a1719efc2",
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
    ]
}

````

## Route For Update Record

Here is Record Update EndPoint.
Please _Provide Full access token in authorization Header to update Record._
_Provide Record Id in url._

```shell
https://picaso-cms.herokuapp.com/record/617e6858d61e1d0a1719efc2
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
https://picaso-cms.herokuapp.com/record/617e6858d61e1d0a1719efc2
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

Your API Base URL is `https://picaso-cms.herokuapp.com`.
