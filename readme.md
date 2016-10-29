# eslint-config-react

[![Build Status](https://travis-ci.org/1000ch/eslint-config-react.svg?branch=master)](https://travis-ci.org/1000ch/eslint-config-react)
[![devDependency Status](https://david-dm.org/1000ch/eslint-config-react/dev-status.svg)](https://david-dm.org/1000ch/eslint-config-react#info=dev)
[![peerDependency Status](https://david-dm.org/1000ch/eslint-config-react/peer-status.svg)](https://david-dm.org/1000ch/eslint-config-react#info=peer)

## Install

```sh
npm install --save-dev @1000ch/eslint-config-react
```

## Usage

In `.eslintrc`:

```json
{
  "extends": [
    "@1000ch/eslint-config-react",
    "@1000ch/eslint-config-react/jsx-a11y"
  ]
}
```

In `package.json`:

```json
{
  "eslintConfig": {
    "extends": [
      "@1000ch/eslint-config-react",
      "@1000ch/eslint-config-react/jsx-a11y"
    ]
  }
}
```

## License

MIT: http://1000ch.mit-license.org
