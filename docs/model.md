---
sidebar_position: 1
---

# Model Api

Let's create **New Model For Project**.

## Route For Create New Model

Here is Create new Model EndPoint

```shell
https://api-fluidcms.herokuapp.com/project
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

_<br /> Provide Access Token in Authorization Header._

Here is Getting single model EndPoint **Provide model identifier in URL**

```shell
https://api-fluidcms.herokuapp.com/model/demo
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

_Provide Full Access Token in Authorization Header_

**Provide model identifier in URL**

```shell
https://api-fluidcms.herokuapp.com/model/demo
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
https://api-fluidcms.herokuapp.com/model/all
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

_Provide Full Access Token in Authorization Header_ <br />
**Provide model identifier in URL**

```shell
https://api-fluidcms.herokuapp.com/model/Demo2
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

Your API Base URL is `https://api-fluidcms.herokuapp.com`.
