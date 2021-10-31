---
sidebar_position: 1
---

# ~Media API's~

Let's Post **New Image**.

## Route For Posting New Image

Here is Create new Image EndPoint

```shell
https://picaso-cms.herokuapp.com/image
```

_Provide Full Access Token in Authorization Header_
If you are using axios then you can send this request as

```shell
{
    curl --authorization Bearer_Token full_access_token https://picaso-cms.herokuapp.com/image
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

Here we provided you three different sizes of images with URL.
keep these cdn_token and media Id to update and get image data

## Route Get Only One Record

_You can access single Record by Full access token._
_<br /> Provide Access Token in Authorization Header and media Id in URL._

```shell
https://picaso-cms.herokuapp.com/media/617e53efd61e1d0a1719eee8
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

## Route For Update Image

Here is Image Update EndPoint.<br/>
Please _Provide **Full access token** in authorization Header to update Image._<br/>
**NOTE: Provide Image CDN_Id in url.**

```shell
https://picaso-cms.herokuapp.com/image/617e53efd61e1d0a1719eee8
```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "message": "Image updated"
    }
}

```

<!-- ![alt text](/img/exp.png) -->

Your API Base URL is `https://picaso-cms.herokuapp.com`.
