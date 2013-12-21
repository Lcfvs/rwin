/*
Copyright 2013 Lcf.vs
Released under the MIT license
https://github.com/Lcfvs/rwin
*/

'use strict';

var resolve,
    getOwnPropertyNames,
    defineProperty,
    rwin,
    setDescriptor,
    setGetter,
    load;

resolve = require('path').resolve;
getOwnPropertyNames = Object.getOwnPropertyNames.bind(Object);
defineProperty = Object.defineProperty.bind(Object);

rwin = function rwin(dirname, lib) {
    var store,
        rwinLib,
        propertyNames,
        onEachProperty;

    store = {};
    rwinLib = {};
    propertyNames = getOwnPropertyNames(lib);
    onEachProperty = setDescriptor.bind(rwinLib, lib, store, dirname);
    propertyNames.forEach(onEachProperty);

    return rwinLib;
};

setDescriptor = function setDescriptor(lib, store, dirname, name) {
    var path,
        descriptor;

    path = lib[name];

    descriptor = {
        enumerable: true,
        configurable: true
    };

    descriptor.get = setGetter.bind(descriptor, store, dirname, path, name);
    defineProperty(this, name, descriptor);
};

setGetter = function setGetter(store, dirname, path, name) {
    var isRequired,
        filename;

    isRequired = !store.hasOwnProperty(name);

    if (isRequired) {
        store[name] = load(dirname, path);
    }

    return store[name];
};

load = function load(dirname, path) {
    var firstChar,
        isNodeModule,
        modulePath,
        module;
    
    firstChar = path.charAt(0);
    isNodeModule = firstChar !== '.' && firstChar !== '/';
    
    if (isNodeModule) {
        modulePath = path;
    } else {
        modulePath = resolve(dirname, path);
    }
    
    module = require(modulePath);
    
    return module;
};

module.exports = rwin;
