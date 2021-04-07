# handle-promise

Convert json to base64 and base64 to json.

## Install

```npm
npm i json-base64
```

## How to use

```javascript
const jsonBase64 = require('json-base64');

const base64Encoded = jsonBase64.toBase64({ key1: 'value1', key2: 'value2' });

const json = jsonBase64.toJson(base64Encoded);
```
