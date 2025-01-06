const fs = require('fs');  // Import fs module
const path = require('path'); // Import path module
const phoneFormats = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/phone.json'), 'utf8')); // Using path.resolve for cross-platform compatibility


function generatePhoneNumber(countryName) {
    // Load phone formats from JSON file
    const countryKey = countryName.toLowerCase();

    if (!phoneFormats[countryKey]) {
        throw new Error(`Unsupported country code: ${countryName}`);
    }

    const { countryPrefix, format } = phoneFormats[countryKey];

    const randomDigit = () => Math.floor(Math.random() * 10);
    const randomStartDigit = () => Math.floor(Math.random() * 3) + 7;

    let isFirst = true;
    const phoneNumber = format.replace(/X/g, () => {
        if (isFirst) {
            isFirst = false;
            return randomStartDigit();
        }
        return randomDigit();
    });

    return `${countryPrefix} ${phoneNumber}`;
}

const phoneNumber = generatePhoneNumber('United States');
console.log(phoneNumber);


module.exports = { generatePhoneNumber }