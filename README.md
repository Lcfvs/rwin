rwin
====

Like to keep your requires in the script header?

Tired to load modules that will possibly not been used and overloading your RAM?

<strong>Require When I Need</strong> is a lightweight tool that loads the required module only when and if you need it!

This Node.js module is under MIT License.


Install :
---------
`$ npm install rwin`


Usage :
-------
``` JavaScript
lib = rwin(imports, [dirname]);
```
Where :

`lib` : is an object that contains an accessor for each required modules

`imports` : is an object that contains the accessor name paired with the module path

`dirname` : is the source path, generally <strong>__dirname</strong> (useless if You only require installed modules)


Example:
--------
``` JavaScript
var rwin,
    imports,
    lib;

rwin = require('rwin');

imports = {
    installedModule: 'installed-module',
    uninstalledModule: '/uninstalled-module/path'
};

lib = rwin(imports, __dirname);

// At this point, rwin is the only one loaded module (and its own dependencies)

console.log(lib.installedModule); // loads the module & returns it to the console
```