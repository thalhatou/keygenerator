# keygenerate
Simple but powerfull middleware to randomly generate strings for  api key ,transction key  and api password for your nodejs  project




## Installation

```shell
 npm i keygenerate --save
```

## Usage

```javascript
const generateKey = require("generateKey");

/*
 * Default configuration
 * length: whenever you call the function you passed the length as argument.
 */

/*
 * generating a random api key with a length of 40 chars
 *
 */
let apiKey = generateKey(40);
// >> "QNpZpcAUReESnhfkmVmChk51X35IXREAX6U3j1Tp"
/*
 * generating a random api password with length of 20 chars
 *
 */
let apipassword = generateKey(20);
// >> "pq1l13BiXAtRINsxeWMT"
/*
 * generating a random transction id with length of 10 chars
 *
 */
let transction_id = generateKey(10);
// >> "eEWUtRyXLjXehnu"




```

## API

Your key is generated  from the combination of the following :

chars (bool)
> ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz


numbers (bool)
> 0123456789





## Licence

Module is licenced under the [MIT](http://opensource.org/licenses/MIT)
