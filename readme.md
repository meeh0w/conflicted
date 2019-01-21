# conflicted
> Use this package to check if two given references (`HEAD`, branch name, commit hash, etc.) would produce any conflicts on a merge or rebase attempt.

## Usage
```
npm i --save conflicted
```

#### JavaScript API:
```javascript
const { conflicted, mergable } = require('conflicted');

if (mergable('master', 'feature/branch')) {
  console.log('no conflicts!');
} else {
  console.log('conflicts');
}

// or

if (conflicted('master', 'feature/branch')) {
  console.log('conflicts!');
} else {
  console.log('no conflicts');
}
```

#### in a bash script:
_Make sure to install `conflicted` globally to use it as a CLI command (`npm i -g conflicted`)._

```
#!/bin/bash

if conflicted master feature/branch
then
  echo conflicted
else
  echo mergable
fi
```

#### in `npm` scripts:
```
{
  "scripts": {
    "postversion": "mergable HEAD master && echo mergable"
  }
}
```

## TODO
* tests

