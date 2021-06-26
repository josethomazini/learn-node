# learn-node

```
One Repo to rule them all,
One Repo to find them,
One Repo to bring them all,
and in the darkness bind them,
In the Github where the Shadows lie.
```

## husky

Add to the root's package.json the following script:

```json
{
  "postinstall": "husky install"
}
```

```bash
yarn add -D -W husky
```

After the install a folder names .husky will be created.

## commitizen + commitlint

```bash
yarn add -D -W @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog
```

Add the following commands in order to hook commitlint and commitizen to the git commit process:

```bash
npx husky add .husky/prepare-commit-msg "exec < /dev/tty && node_modules/.bin/cz --hook || true"

npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

Add the following 2 files on project root:

.czrc

```
{
  "path": "cz-conventional-changelog"
}
```

commitlint.config.js

```
module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ]
};
```
