[![CircleCI](https://circleci.com/gh/cderche/greenlock-challenge-s3.svg?style=svg)](https://circleci.com/gh/cderche/greenlock-challenge-s3)
[![Maintainability](https://api.codeclimate.com/v1/badges/daf5cecc7ff79f8dbc00/maintainability)](https://codeclimate.com/github/cderche/greenlock-challenge-s3/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/daf5cecc7ff79f8dbc00/test_coverage)](https://codeclimate.com/github/cderche/greenlock-challenge-s3/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/cderche/greenlock-challenge-s3/badge.svg)](https://snyk.io/test/github/cderche/greenlock-challenge-s3)

!["Lifetime Downloads"](https://img.shields.io/npm/dt/greenlock-challenge-s3.svg "Lifetime Download Count can't be shown")
!["Monthly Downloads"](https://img.shields.io/npm/dm/greenlock-challenge-s3.svg "Monthly Download Count can't be shown")
!["Weekly Downloads"](https://img.shields.io/npm/dw/greenlock-challenge-s3.svg "Weekly Download Count can't be shown")

# greenlock-challenge-s3
S3 backed challenge strategy for greenlock-express.js (and greenlock.js)

## Requirements

You will need a s3 bucket and the corresponding credentials.

## Integration

### greenlock-express.js

```javascript

let challenge = require('greenlock-challenge-s3').create({
    accessKeyId: accessKeyId                // Replace with your accessKeyId
    , secretAccessKey: secretAccessKey      // Replace with your secretAccessKey
    , regionName: regionName                // Replace with your regionName
    , bucketName: bucketName                // Replace with your bucketName
    , directory: 'acme-challenge/'          // Recommended
    , debug: true                           // Debug
});

var Greenlock = require("greenlock-express");

var greenlock = Greenlock.create({
    // Other options
    , challenges: {
        'http-01': challenge
    }
});

// Continue your greenlock setup

```

## Testing

The strategy is tested against the [greenlock-challenge-test](https://git.coolaj86.com/coolaj86/greenlock-challenge-test.js)

To run the tests yourself, create a `.env` file with the following

```console
// .env file
AWS_ACCESS_KEY_ID=abc           // Replace with your accessKeyId
AWS_SECRET_ACCESS_KEY=abc       // Replace with your secretAccessKey
AWS_BUCKET_REGION=abc           // Replace with your regionName
AWS_BUCKET_NAME=abc             // Replace with your bucketName
```

Run the following command: 
```console
$ npm run clean && npm run test && npm run clean
```

## License

ISC
