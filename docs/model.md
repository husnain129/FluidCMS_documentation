---
sidebar_position: 1
---

# ~Model API's~

Let's create **New Model For Project**.

## Route For Create New Model

Here is Create new Model EndPoint

```shell
https://picaso-cms.herokuapp.com/project
```

Provide Project title to create new Project.
_Provide Full Access Token in Authorization Header_

```shell
{
    "name":"Demo",
    "alias":"demo"
}

```

In response will look like this.

```shell
{
    "ok": true,
    "data": {
        "model_id": "617e53efd61e1d0a1719eee8"
    }
}
```

## Route Get Only One Model

Here is Ger single model EndPoint
_You can access single model by Full access token or only Read Token._
_<br /> Provide Access Token in Authorization Header._

```shell
https://picaso-cms.herokuapp.com/model/617e53efd61e1d0a1719eee8
```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "model": {
            "name": "Demo",
            "alias": "demo",
            "fields": []
        }
    }
}

```

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

## Route For Deleting Model

Here is Deleting EndPoint through User Token.
Please _Provide user token in authorization Header to Delete Project_.

```shell
https://picaso-cms.herokuapp.com/model/617e53efd61e1d0a1719eee8
```

Response will be like this

```shell
{
    "ok": true,
    "data": {
        "message": "Model deleted successfully"
    }
}

```

<!-- ![alt text](/img/exp.png) -->

Your API Base URL is `https://picaso-cms.herokuapp.com`.
