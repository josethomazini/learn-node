# ESLINT

## Install

```
yarn install
```

## 1st time

To generate a config file, run:

```
npx eslint --init
```

## Run

To list problems:

```
yarn run lint:js
```

To try to fix problems, and list any unresolved problems:

```
yarn run lint:js:fix
```

## Note

The fix version is to be used for developers, specially if they include a hook
on husky.

The list version is to be used for CIs to show invalid submitted code.
