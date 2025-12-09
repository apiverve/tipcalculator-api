# Tip Calculator API

Tip Calculator is a tool for calculating tips and splitting bills among multiple people. It provides common tip percentage comparisons and per-person breakdowns.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Tip Calculator API](https://apiverve.com/marketplace/tipcalculator)

---

## Installation

Using npm:
```shell
npm install @apiverve/tipcalculator
```

Using yarn:
```shell
yarn add @apiverve/tipcalculator
```

---

## Configuration

Before using the Tip Calculator API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart)

The Tip Calculator API documentation is found here: [https://docs.apiverve.com/ref/tipcalculator](https://docs.apiverve.com/ref/tipcalculator).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const tipcalculatorAPI = require('@apiverve/tipcalculator');
const api = new tipcalculatorAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  amount: "100",
  percentage: "18",
  people: "4",
  currency: "USD"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  amount: "100",
  percentage: "18",
  people: "4",
  currency: "USD"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  amount: "100",
  percentage: "18",
  people: "4",
  currency: "USD"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "bill_amount": 100,
    "tip_percentage": 18,
    "tip_amount": 18,
    "total_amount": 118,
    "currency": "USD",
    "split_between": 4,
    "per_person": {
      "bill_amount": 25,
      "tip_amount": 4.5,
      "total_amount": 29.5
    },
    "common_tip_amounts": [
      {
        "percentage": 10,
        "tip_amount": 10,
        "total": 110,
        "per_person": 27.5
      },
      {
        "percentage": 15,
        "tip_amount": 15,
        "total": 115,
        "per_person": 28.75
      },
      {
        "percentage": 18,
        "tip_amount": 18,
        "total": 118,
        "per_person": 29.5
      },
      {
        "percentage": 20,
        "tip_amount": 20,
        "total": 120,
        "per_person": 30
      },
      {
        "percentage": 25,
        "tip_amount": 25,
        "total": 125,
        "per_person": 31.25
      }
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
