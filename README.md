Stringify all args as a resolver for memoization functions.  Useful if you have more than one function, and one of them is an object.

#Usage:

```javascript
import 'allArgsStringified' from 'all-args-stringified'
import 'memoize' from 'lodash.memoize'

export default memoize ((arg1, arg2) => arg1 + arg2Object, allArgsStringified)
```
