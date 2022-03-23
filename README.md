# textlint-rule-empty-list-item

空白列表项检测

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-empty-list-item

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "empty-list-item": true
    }
}
```

Via CLI

```
textlint --rule empty-list-item README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

ISC © 
