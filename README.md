<a id="top"></a>
# Laravel Symbolic Links

![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)

This package allows the creation of symbolic links (files and folders) during the laravel-mix bundling.

The parameters to the function paths accept both windows & unix-style paths, relative and absolute paths as well as UNC network paths.

## Usage

1. Install the package with npm or yarn:
```js
npm install git+https://github.com/GNOffice/laravel-mix-symbolic-links.git --save-dev

yarn add https://github.com/GNOffice/laravel-mix-symbolic-links.git --dev
```

2. Require the extension in your Mix configuration:
 ```js
const mix = require('laravel-mix');
require('laravel-mix-symbolic-links');
```

3. Create symbolic link folders using the createSymbolicFolder method
 ```js
mix.createSymbolicFolder(target, path)
mix.createSymbolicFolder("src/data", "dist/data")
mix.createSymbolicFolder("//mnt/d/testdata", "dist/data")
mix.createSymbolicFolder("c:/windows/temp", "dist/data")
```

4. Create symbolic link files using the createSymbolicFile method
 ```js
mix.createSymbolicFolder(target, path)
mix.createSymbolicFolder("src/data/data.json", "dist/data/data.json")
mix.createSymbolicFolder("//mnt/d/testdata/data.json", "dist/data/data.json")
mix.createSymbolicFolder("c:/windows/temp/data.json", "dist/data/data.json")
```

5. Delete symbolic link using the unlinkSymbolicLink method
 ```js
mix.unlinkSymbolicLink(path)
mix.unlinkSymbolicLink("dist/data")
mix.unlinkSymbolicLink("dist/data/data.json")
```
