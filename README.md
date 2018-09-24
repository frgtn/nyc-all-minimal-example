# Minimal exmaple of nyc --all parameter handling bug

To run the example do:
```
npm install
npm run test
```

Expect result:
A coverage report is generated.


Actual result:
`nyc` throws an error:

```
/nyc-all-minimal-example/node_modules/mocha/lib/reporters/base.js:302
  runner.on('start', function() {
         ^

TypeError: runner.on is not a function
    at MochaJUnitReporter.Base (/nyc-all-minimal-example/node_modules/mocha/lib/reporters/base.js:302:10)
    at new MochaJUnitReporter (/nyc-all-minimal-example/node_modules/mocha-junit-reporter/index.js:110:8)
    at Object.create (/nyc-all-minimal-example/node_modules/nyc/node_modules/istanbul-reports/index.js:17:16)
    at reporter.forEach (/nyc-all-minimal-example/node_modules/nyc/index.js:451:24)
    at Array.forEach (<anonymous>)
    at NYC.report (/nyc-all-minimal-example/node_modules/nyc/index.js:450:17)
    at report (/nyc-all-minimal-example/node_modules/nyc/bin/nyc.js:89:7)
    at /nyc-all-minimal-example/node_modules/nyc/bin/nyc.js:76:25
    at ChildProcess.<anonymous> (/nyc-all-minimal-example/node_modules/nyc/node_modules/foreground-child/index.js:52:5)
    at emitTwo (events.js:126:13)

```
