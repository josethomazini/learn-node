# CROSS-ENV

Most Windows command prompts will choke when you set environment variables with
NODE_ENV=production like that. (The exception is Bash on Windows, which uses
native Bash.)

Similarly, there's a difference in how windows and POSIX commands utilize
environment variables. With POSIX, you use: $ENV_VAR and on windows you use
%ENV_VAR%.

cross-env makes it so you can have a single command without worrying about
setting or using the environment variable properly for the platform. Just set
it like you would if was running on a POSIX system, and cross-env will take
care of setting it properly.

## Install

```
yarn install
```

## Run

```
yarn run dev
```

## Note

Avoid passing lots of environment variables on the packages.json scripts. Just
pass the NODE_ENV like that.

The other environment variables can be set into the corresponding .env files.
