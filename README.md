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
https://api-fluidcms.herokuapp.com/model/<modelAlias>
```

And URL will look like this.

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
https://api-fluidcms.herokuapp.com/model/<modelAlias>
```

And URL will look like this.

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
https://api-fluidcms.herokuapp.com/model/<modelAlias>
```

And URL will look like this.

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
