# TYPESCRIPT

## Install

```
yarn install
```

## 1st time

To generate a config file, run:

```
npx tsc --init
```

## Run development

```
yarn run dev
```

## Build

```
yarn run build
```

## Validate

```
yarn run ts:check
```

## Run production

```
yarn run start
```

## Notes

- In order to call just "tsc" from the build script I had to redefine the
  following attributes on tsconfig.json:

```
"outDir": "./dist"
"rootDir": "./src
```

- The reason I've created the ts:check script was for an eventual babel
  integration, where I could use typescript only to check types, while babel
  could transpile everything.
