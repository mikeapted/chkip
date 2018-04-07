
![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoicitXTUdlNXFuMmxobXg3RGxVL29sRkNoMWFLVHNRNU5vQ3FqdG1rZ3JrKy8zVG04V1E5MXh0cnlwbVFnRVpBNituenptOW5CdXViS1YvcFAwSVZyaWFVPSIsIml2UGFyYW1ldGVyU3BlYyI6ImU0ek15WlRtVm9KeUQ5OHgiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master) [![GitHub license](https://img.shields.io/github/license/mikeapted/chkip.svg)](https://github.com/mikeapted/chkip/blob/master/LICENSE)


# chkip
Retrieve current IP address

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