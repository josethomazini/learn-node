# DOTENV

## Install

```
yarn install
```

## Create new .env files

Save copies of .env.sample as:

- .env.development
- .env.production
- .env.testing

Add different values to the MESSAGE variable on each file.

## Run dev

```
yarn run dev
```

## Run test

```
yarn run test
```

## Run prod

```
yarn run start
```

## Note

Remember to add on .gitignore the following rules:

```
.env.*
!.env.sample
```
