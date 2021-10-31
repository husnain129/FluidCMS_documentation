---
sidebar_position: 1
---

# Media Api

Let's Post **New Image**.

## Route For Posting New Image

Here is Create new Image EndPoint

```shell
https://api-fluidcms.herokuapp.com/image
```

_Provide Full Access Token in Authorization Header_
If you are using axios then you can send this request as

```shell
{
    curl -H "Authorization: Bearer <ACCESS_TOKEN>" https://api-fluidcms.herokuapp.com/image
}

```

In response will look like this.

```shell
{
    "ok": true,
    "data": {
        "sm": {
            "url": "http://res.cloudinary.com/hunnykhan/image/upload/v1635680820/rpedktoawqfwizbf1j1u.jpg",
            "cdn_id": "rpedktoawqfwizbf1j1u"
        },
        "md": {
            "url": "http://res.cloudinary.com/hunnykhan/image/upload/v1635680822/mruvsscc7xsnjzn3fw4t.jpg",
            "cdn_id": "mruvsscc7xsnjzn3fw4t"
        },
        "raw": {
            "url": "http://res.cloudinary.com/hunnykhan/image/upload/v1635680827/v9lynmd6kuqcpfm3vwtg.jpg",
            "cdn_id": "v9lynmd6kuqcpfm3vwtg"
        },
        "_id": "617e823bda51edec08f1731d",
        "__v": 0
    }
}
```

Here we provided you three different sizes of images with URL.
keep these cdn_token and media Id to update and get image data

## Route Get Only One Record

_You can access single Record by Full access token._
_<br /> Provide Access Token in Authorization Header and media Id in URL._

```shell
https://api-fluidcms.herokuapp.com/media/617e53efd61e1d0a1719eee8
```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "sm": {
            "url": "http://res.cloudinary.com/hunnykhan/image/upload/v1635680820/rpedktoawqfwizbf1j1u.jpg",
            "cdn_id": "rpedktoawqfwizbf1j1u"
        },
        "md": {
            "url": "http://res.cloudinary.com/hunnykhan/image/upload/v1635680822/mruvsscc7xsnjzn3fw4t.jpg",
            "cdn_id": "mruvsscc7xsnjzn3fw4t"
        },
        "raw": {
            "url": "http://res.cloudinary.com/hunnykhan/image/upload/v1635680827/v9lynmd6kuqcpfm3vwtg.jpg",
            "cdn_id": "v9lynmd6kuqcpfm3vwtg"
        },
        "_id": "617e823bda51edec08f1731d"
    }
}

```

## Route For Update Image

Here is Image Update EndPoint.<br/>
Please _Provide **Full access token** in authorization Header to update Image._<br/>
**NOTE: Provide Image CDN_Id in url.**

```shell
https://api-fluidcms.herokuapp.com/image/617e53efd61e1d0a1719eee8
```

And response will be like this

```shell
{
    "ok": true,
    "data": {
        "sm": {
            "url": "http://res.cloudinary.com/hunnykhan/image/upload/v1635680982/exkdkpp6niyx6ryvh9q5.jpg",
            "cdn_id": "exkdkpp6niyx6ryvh9q5"
        },
        "md": {
            "url": "http://res.cloudinary.com/hunnykhan/image/upload/v1635680979/bykadlrayu9oagv2emxn.jpg",
            "cdn_id": "bykadlrayu9oagv2emxn"
        },
        "raw": {
            "url": "http://res.cloudinary.com/hunnykhan/image/upload/v1635680983/dspxsysbxa78z1jwm0yb.jpg",
            "cdn_id": "dspxsysbxa78z1jwm0yb"
        },
        "_id": "617e823bda51edec08f1731d",
        "__v": 0
    }
}

```

<!-- ![alt text](/img/exp.png) -->

Your API Base URL is `https://api-fluidcms.herokuapp.com`.
