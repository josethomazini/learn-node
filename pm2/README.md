# PM2

## Install

```
yarn install
```

## Run production

```
yarn run pm2:start
```

## Stop production

```
yarn run pm2:stop
```

## PM2 status

```
yarn run pm2:status
```

## Note 1

You can change the location of the log files at the ecosystem.config.js

## Note 2

The log rotate is already configured with default configurations:

- 10M each file
- 30 file logs
- no compression

More on https://www.npmjs.com/package/pm2-logrotate

## Note 3

- Save the pm2 state by running:

```bash
npx pm2 save
```

- Then, set the pm2 state to be allways automatically restarted:

```bash
npx pm2 startup
```

Copy and paste the code it will output and that's it!
