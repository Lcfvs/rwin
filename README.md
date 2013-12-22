rwin
====

Node.js module loader that loads the required module when you need it.

This Node.js module is under MIT License.


Install :
---------

`$ npm install rwin`


Concept :
---------

Because some of the required modules are sometimes loaded and uses your memory for nothing...

<strong>rwin</strong> (Require When I Need), is a lightweight tool that loads the required module only when and if you need it!


Usage :
-------

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
