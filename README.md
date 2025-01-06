
# Universal Phone Number Generator

The **Universal Phone Number Generator** is a JavaScript package that allows you to generate random, formatted phone numbers for different countries by simply providing the country name as a parameter. This package uses country-specific phone number formats and prefixes, ensuring the generated numbers are accurate and realistic.

## Features
- Generate random phone numbers based on country.
- Phone numbers are generated in their respective country formats (e.g., starting with country prefixes, correct number of digits).
- Supports multiple countries, with more to be added.

## Installation

To install the package, run the following command:

```bash
npm install universal-phone-number-generator
```

## Usage

You can generate a random phone number by calling the `generatePhoneNumber` function with the country name as an argument.

Example usage:

```javascript
const { generatePhoneNumber } = require('universal-phone-number-generator');

// Generate a random phone number for United States
const phoneNumber = generatePhoneNumber('United States');
console.log(phoneNumber);
```

The output will look like:

```
+1 (928) 468-8399
```

## Supported Countries

This package supports all the countries.

## License

This package is open source and available under the MIT License.

## Contributing

Feel free to fork the repository, make improvements, and submit a pull request.

## Notice
Please note that the generated phone numbers are randomly created and are not linked to real phone numbers. They are intended for testing and development purposes only and should not be used for any malicious activities.