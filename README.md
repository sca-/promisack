# Promisack 🎒

A lightweight library for managing and viewing the completion process of multiple concurrent promises.

## Installation

```
npm install promisack
```

## Usage

Basic usage

```javascript
import Promisack from 'promisack';

const sack = new Promisack(myBunchOfPromises);
sack.add(someMorePromises);
sack.add(oneMorePromise);

sack.status(); // { overall: 100, fulfilled: 42, rejected: 1 }
```

### Progress bars of Promisack status

Browser

```javascript
import Progress from 'promisack/browser/progress';

/**
 * This class uses the https://github.com/kimmobrunfeldt/progressbar.js library
 *      Line ProgressBar by default.
 * You can specify any progressbar.js Line options or you can set up custom progressbar.js class
 *      via CustomBarClass property.
 */
const bar = new Progress('#progress', myBunchOfPromises);
// const bar = new Progress('#progress', myBunchOfPromises, null, { strokeWidth: 4 });
/**
 * import { Circle } from 'progressbar.js;
 *  const bar = new Progress('#progress', myBunchOfPromises, null, { CustomBarClass: Circle });
 */

bar.add(someMorePromises);
```

NodeJS

```javascript
const Progress = require('promisack/node/progress');

/**
 * This class uses https://github.com/visionmedia/node-progress library
 */
const bar = new Progress(myBunchOfPromises);

bar.add(someMorePromises);
```

## More

This library was created for personal use but have fun using it, suggesting feature requests and reporting bugs.

You can see some examples in test files in the code. Just open html or run node.js file.

Feel free to contact me via issues.

🖖🤓 Happy coding!
