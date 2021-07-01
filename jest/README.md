# JEST

## Install

```
yarn install
```

## Run all the specification tests

Simple tests or mocked expensive ones (if they access IO or take too long to
process).

It tests the project's specifications; not the availability of external
resources.

All those tests should be called frequently:

- Anytime you save the code (by using the **test:watch** script);
- Anytime you commit the code (by using husky hooks);
- Anytime you pull request a branch (done by both the CI and the reviewer).

It executes all the **\*.spec.js** files.

```
yarn run test
```

## Auto run all the specification tests anytime you save a script file

```
yarn run test:watch
```

## Run all the expensive tests

Any test that was mocked is retested now accessing a real resource or
performing full calculations.

Those tests are slower and could be called less frequently (daily/weekly?)

Still they are important since a schema on DB or the result of an API could
change and those tests would expose the situation.

It executes all the **\*.test.js** files.

```
yarn run test:expensive
```

## Execute an analysis of testing coverage (based on the specification tests)

```
yarn run test:coverage
```
