# Tip Calculator API - Ruby Gem

Tip Calculator computes tips and splits bill totals across group members. Pass a pre-tip bill amount, tip percentage, and group size to get the tip total, overall cost, and individual per-person shares.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_tipcalculator'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_tipcalculator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_tipcalculator'

# Initialize the client
client = APIVerve::Tipcalculator::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  amount: 100,
  percentage: 15,
  people: 1,
  currency: "USD"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ amount: 100, percentage: 15, people: 1, currency: "USD" })
  puts response["data"]
rescue APIVerve::Tipcalculator::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Tipcalculator::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Tipcalculator::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tipcalculator?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tipcalculator?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tipcalculator?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
