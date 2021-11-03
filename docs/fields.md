---
sidebar_position: 1
---

# Fields Api

Let's create **New Fields For Model**.

## Route For Create New Fields

Here is Create new Fields EndPoint

_Provide Full Access Token in Authorization Header_ <br />
**Provide model identifier in URL**

```shell
https://api-fluidcms.herokuapp.com/field/<modelAlias>
```

And URL will look like this.

```shell
https://api-fluidcms.herokuapp.com/field/Demo2
```

_Provide Full Access Token in Authorization Header_

Provide Following data to create new Field.

```shell
{
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

_Provide Access Token in Authorization Header.<br />_
**NOTE: Provide Field identifier and Model identifier in URL to get field**

```shell
https://api-fluidcms.herokuapp.com/field/<fieldIdAlias>/<modelAlias>
```

And URL will look like this.

```shell
https://api-fluidcms.herokuapp.com/field/language/demo1
```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "_id": "617e586fd61e1d0a1719ef48",
        "model_id": "617d796340c7dca02c415916",
        "name": "language",
        "alias": "language",
        "field_type": 0,
        "validation": {
            "isRequired": true,
            "regex": ""
        }
    }
}

```

## Route Get All Field Of model

Here is ALl field EndPoint

_Provide Full Access Token in Authorization Header_ <br />
**Provide model identifier in URL**

```shell
https://api-fluidcms.herokuapp.com/field/<modelAlias>
```

URL will look like this.

```shell
https://api-fluidcms.herokuapp.com/field/demo1
```

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

```

## Route For Update Field

_Provide Access Token in Authorization Header.<br />_
**NOTE: Provide Field identifier and Model identifier in URL to Update field**

```shell
https://api-fluidcms.herokuapp.com/field/<fieldIdAlias>/<modelAlias>
```

And URL will look like this.

```shell
https://api-fluidcms.herokuapp.com/field/language/demo1
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
    "data": "Field updated"
}

```

## Route For Get All Model

Here is Get All Project EndPoint.

_Provide Full Access Token in Authorization Header_ <br />
**Provide model identifier in URL**

```shell
https://api-fluidcms.herokuapp.com/field/<modelAlias>
```

And URL will look like this.

```shell
https://api-fluidcms.herokuapp.com/field/all/demo1
```

And response will be like this

```shell
{
    "ok": true,
    "data": [
        {
            "_id": "61803c73ec8645096e29dda5",
            "name": "image",
            "alias": "image",
            "field_type": 0,
            "validation": {
                "isRequired": true,
                "regex": ""
            }
        },
        {
            "_id": "61803ecd52bf9a7723b55631",
            "name": "name",
            "alias": "name",
            "field_type": 0,
            "validation": {
                "isRequired": true,
                "regex": ""
            }
        }
    ]
}

```

## Route For Deleting Field

Here is Deleting EndPoint through Full access Token.
Please _Provide Access Token in Authorization Header.<br />_

**NOTE: Provide Field identifier and Model identifier in URL to Delte field**

```shell
https://api-fluidcms.herokuapp.com/field/<fieldIdAlias>/<modelAlias>
```

And URL will look like this.

```shell
https://api-fluidcms.herokuapp.com/field/language/demo1
```

Response will be like this

```shell
{
    "ok": true,
    "data": "Field deleted"
}
```

<!-- ![alt text](/img/exp.png) -->

Your API Base URL is `https://api-fluidcms.herokuapp.com`.
