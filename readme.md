# eslint-config-react

[![Build Status](https://travis-ci.org/1000ch/eslint-config-react.svg?branch=master)](https://travis-ci.org/1000ch/eslint-config-react)

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
