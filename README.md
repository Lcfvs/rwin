rwin
====

Because some of the required modules are sometimes loaded and use your memory for nothing...

<strong>Require When I Need</strong> is a lightweight tool that loads the required module only when and if you need it!

This Node.js module is under MIT License.


Install :
---------

`$ npm install rwin`


Usage :
-------

lib = rwin(paths, [dirname]);

Where :
`lib` : is the container that contains an accessor for each required modules
`paths` : is an object that contains the accessor name paired with the module path
`dirname` : is the source path, generally __dirname (useless if You only require installed modules)


Example:
--------

``` JavaScript
var rwin, lib;

rwin = require('rwin');

lib = rwin({
  installedModule: 'installed-module',
  uninstalledModule: '/uninstalled-module/path'
}, __dirname);

// At this point, rwin is the only one loaded module (and its own dependencies)

console.log(lib.installedModule); // loads the module & returns it to the console
```
