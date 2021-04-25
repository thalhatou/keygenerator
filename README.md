# keygenerate
Simple but powerfull middleware to randomly generate api key and api password for your nodejs project


simple Random string generator for your node.js project that you can used to generate api key and api password for your next project

## Installation

```shell
 npm i keygenerate --save
```

## Usage

```javascript
const keygenerator = require("generateKey");

/*
 * Default configuration
 * length: 0 
 */
keygen._();
// >> "8MRXnoG3nTmjb35U0tFwnoZpdCBBj5EX"

keygen._({
    forceUppercase: true
});
// >> "F4ZCPNOX7BWK7XWDXGSA5BPHCCCLGCRZ"

keygen._({
    specials: true
});
// >> "3L0KpE{pb.U3(Tu42,*,aNxBpb(}Mfy|"

/*
 * Configuration for password()
 *
 * chars: true
 * sticks: false
 * numbers: true
 * specials: false
 * length: 8 <- overrideable
 * forceUppercase: false
 * forceLowercase: false
 * exclude:['O', '0', 'I', '1']
 *
 */
keygen.password();
// >> "d4pTgrCY"

/*
 * Configuration for session_id()
 *
 * chars: true
 * sticks: true
 * numbers: true
 * specials: false
 * length: 32 <- overrideable
 * forceUppercase: false
 * forceLowercase: false
 * exclude:[ ]
 *
 */
keygen.session_id();
// >> "7YFSfsiM3NgE76fZa5vrjHmftKZwuiJv"

/*
 * Configuration for transaction_id()
 *
 * chars: true
 * sticks: true
 * numbers: true
 * specials: true
 * length: 6 <- overrideable
 * forceUppercase: false
 * forceLowercase: false
 * exclude:[ ]
 *
 */
keygen.transaction_id();
// >> "lTrGjp"

/*
 * Configuration for transaction_id()
 *
 * chars: false
 * sticks: false
 * numbers: true
 * specials: false
 * length: 8 <- overrideable
 * forceUppercase: false
 * forceLowercase: false
 * exclude:[ ]
 *
 */
keygen.number();
// >> "37883189"

```

## API

Your key is generated  from the combination of the following :

chars (bool)
> ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz


numbers (bool)
> 0123456789


## Licence

Module is licenced under the [MIT](http://opensource.org/licenses/MIT)
