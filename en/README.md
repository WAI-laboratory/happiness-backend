
# Korean Happiness Quotes API

This project provides an API for Korean happiness quotes. Through the API, you can get random happiness quotes and their English translations.

## Buy Me A Coffee
[!["Buy Me A Coffee"](https://cdn.buymeacoffee.com/buttons/default-yellow.png)](https://www.buymeacoffee.com/sobabear)


## Features

- Provides random happiness quotes in Korean
- Provides English translations and author information for the quotes


## Usage

The API provides a simple way to fetch random happiness quotes. You can try it using the following endpoint:

### Random Quote Endpoint

```bash
GET https://api.sobabear.com/happiness/random-quote
```


### Example Response

When you call the endpoint, you will receive a JSON response like the one below:

```
{
  "message": "Quote fetched successfully",
  "statusCode": 200,
  "data": {
    "id": 60,
    "content": "행복은 내면에서 오지 않고 사이에서 온다. Happiness comes not from within, but from getting the right relationship between yourself and something larger than yourself.",
    "author": "Jonathan Haidt, 사회심리학자",
    "description": null,
    "link": null
  }
}
```

## Usage Site
[Daily Happiness: Chrome Web Extension](https://chromewebstore.google.com/detail/%ED%95%98%EB%A3%A8-%ED%96%89%EB%B3%B5/mlmeakkbggjjgaefcjpajfdmfhlmldin)
