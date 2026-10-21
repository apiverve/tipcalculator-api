# Tip Calculator API - PHP Package

Tip Calculator computes tips and splits bill totals across group members. Pass a pre-tip bill amount, tip percentage, and group size to get the tip total, overall cost, and individual per-person shares.

## Installation

Install via Composer:

```bash
composer require apiverve/tipcalculator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Tipcalculator\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'amount' => 100,
    'percentage' => 15,
    'people' => 1,
    'currency' => 'USD'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Tipcalculator\Client;
use APIVerve\Tipcalculator\Exceptions\APIException;
use APIVerve\Tipcalculator\Exceptions\ValidationException;

try {
    $response = $client->execute(['amount' => 100, 'percentage' => 15, 'people' => 1, 'currency' => 'USD']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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
        "percentage": 20,
        "tip_amount": 20,
        "total": 120,
        "per_person": 30
      }
    ],
    "formatted": {
      "bill_amount": "$100.00",
      "tip_amount": "$18.00",
      "total_amount": "$118.00",
      "per_person_total": "$29.50"
    }
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tipcalculator?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tipcalculator?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tipcalculator?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
