# chkip
Command line tool to retrieve current IP

## Installation

`npm install chkip`

## Usage

    var chkip = require('chkip');

    chkip((ip) => {
      console.log(ip);
    });      

Output should be `XXX.XXX.XXX.XXX`

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.