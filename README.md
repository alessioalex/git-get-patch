# git-get-patch

Returns a readable stream with a [git patch](http://git-scm.com/docs/git-format-patch).

## Usage

```js
streamPatch(repoPath, rev)
```

Example:

```js
var streamPatch = require('./');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV || 'master';

streamPatch(repoPath, rev).on('error', function(err) {
  throw err;
}).on('end', function() {
  console.log('\n------ THE END ------');
}).pipe(process.stdout);
```

## Tests

```
npm test
```

## License

MIT
