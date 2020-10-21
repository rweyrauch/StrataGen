/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/reflect-metadata/Reflect.js":
/*!**************************************************!*\
  !*** ./node_modules/reflect-metadata/Reflect.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/typescript-json-serializer/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/typescript-json-serializer/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = exports.deserialize = exports.Serializable = exports.JsonProperty = void 0;
__webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
var apiMap = 'api:map:';
var apiMapSerializable = apiMap + "serializable";
var designType = 'design:type';
var designParamTypes = 'design:paramtypes';
var Type;
(function (Type) {
    Type["Array"] = "array";
    Type["Boolean"] = "boolean";
    Type["Date"] = "date";
    Type["Number"] = "number";
    Type["Object"] = "object";
    Type["String"] = "string";
})(Type || (Type = {}));
function getBaseClassNames(target) {
    var names = [];
    var baseClass = Reflect.getPrototypeOf(target);
    if (!baseClass || !baseClass['name']) {
        return names;
    }
    names.push(baseClass['name']);
    return __spreadArrays(names, getBaseClassNames(baseClass));
}
function getPropertyNames(ctor) {
    var ctorWithoutComments = ctor.toString().replace(/(\/\*[\s\S]*?\*\/|\/\/.*$)/gm, '');
    var ctorOnSingleLine = ctorWithoutComments.replace(/[\r\t\n\v\f]/g, '');
    var ctorWithoutSuccessiveWhiteSpaces = ctorOnSingleLine.replace(/( +)/g, ' ');
    var constructorParamPattern = /(?:.*(?:constructor|function).*?(?=\())(?:\()(.+?(?=\)))/m;
    var propertyPattern = /(?:this\.)([^\n\r\t\f\v;]+)([\s;])/gm;
    var propertyNames = new Map();
    var paramsExecArray = constructorParamPattern.exec(ctorWithoutSuccessiveWhiteSpaces);
    if (!paramsExecArray || !paramsExecArray.length) {
        return propertyNames;
    }
    var params = paramsExecArray[1].replace(/ /g, '').split(',');
    var match;
    var _loop_1 = function () {
        var matchResult = match[1].replace(/ /g, '').split('=');
        var index = params.findIndex(function (param) { return param === matchResult[1]; });
        if (index > -1) {
            propertyNames.set(index, matchResult[0]);
        }
    };
    while ((match = propertyPattern.exec(ctorWithoutSuccessiveWhiteSpaces))) {
        _loop_1();
    }
    return propertyNames;
}
function JsonProperty(args) {
    return function (target, key, index) {
        if (key === undefined && target['prototype']) {
            var type = Reflect.getMetadata(designParamTypes, target)[index];
            var keys = getPropertyNames(target['prototype'].constructor);
            key = keys.get(index);
            target = target['prototype'];
            Reflect.defineMetadata(designType, type, target, key);
        }
        var map = {};
        var targetName = target.constructor.name;
        var apiMapTargetName = "" + apiMap + targetName;
        if (Reflect.hasMetadata(apiMapTargetName, target)) {
            map = Reflect.getMetadata(apiMapTargetName, target);
        }
        map[key] = getJsonPropertyValue(key, args);
        Reflect.defineMetadata(apiMapTargetName, map, target);
    };
}
exports.JsonProperty = JsonProperty;
function Serializable() {
    return function (target) {
        var baseClassNames = getBaseClassNames(target);
        Reflect.defineMetadata(apiMapSerializable, baseClassNames, target);
    };
}
exports.Serializable = Serializable;
function getBaseClassMaps(baseClassNames, instance) {
    var baseClassMaps = {};
    baseClassNames.forEach(function (baseClassName) {
        baseClassMaps = __assign(__assign({}, baseClassMaps), Reflect.getMetadata("" + apiMap + baseClassName, instance));
    });
    return baseClassMaps;
}
function deserialize(json, type) {
    if ([null, undefined].includes(json)) {
        return json;
    }
    if (type === undefined) {
        return castSimpleData(typeof json, json);
    }
    var instance = new type();
    var instanceName = instance.constructor.name;
    var baseClassNames = Reflect.getMetadata(apiMapSerializable, type);
    var apiMapInstanceName = "" + apiMap + instanceName;
    var hasMap = Reflect.hasMetadata(apiMapInstanceName, instance);
    var instanceMap = {};
    if (!hasMap && (!baseClassNames || !baseClassNames.length)) {
        return instance;
    }
    instanceMap = Reflect.getMetadata(apiMapInstanceName, instance);
    if (baseClassNames && baseClassNames.length) {
        instanceMap = __assign(__assign({}, instanceMap), getBaseClassMaps(baseClassNames, instance));
    }
    Object.keys(instanceMap).forEach(function (key) {
        var property = convertDataToProperty(instance, key, instanceMap[key], json);
        if (property !== undefined) {
            instance[key] = property;
        }
    });
    return instance;
}
exports.deserialize = deserialize;
function serialize(instance, removeUndefined) {
    if (removeUndefined === void 0) { removeUndefined = true; }
    if ([undefined, null].includes(instance) || typeof instance !== Type.Object) {
        return instance;
    }
    var instanceName = instance.constructor.name;
    var apiMapInstanceName = "" + apiMap + instanceName;
    var baseClassNames = Reflect.getMetadata(apiMapSerializable, instance.constructor);
    var hasBaseClasses = baseClassNames && baseClassNames.length;
    var hasMap = Reflect.hasMetadata(apiMapInstanceName, instance);
    var instanceMap = {};
    if (!hasMap && !hasBaseClasses) {
        return instance;
    }
    instanceMap = Reflect.getMetadata(apiMapInstanceName, instance);
    if (hasBaseClasses) {
        instanceMap = __assign(__assign({}, instanceMap), getBaseClassMaps(baseClassNames, instance));
    }
    var json = {};
    var instanceKeys = Object.keys(instance);
    Object.keys(instanceMap).forEach(function (key) {
        var onSerialize = instanceMap[key]['onSerialize'];
        if (instanceKeys.includes(key)) {
            var data_1 = convertPropertyToData(instance, key, instanceMap[key], removeUndefined);
            if (onSerialize) {
                data_1 = onSerialize(data_1, instance);
            }
            if (instanceMap[key]['names']) {
                instanceMap[key]['names'].forEach(function (name) {
                    if (!removeUndefined || (removeUndefined && data_1[name] !== undefined)) {
                        json[name] = data_1[name];
                    }
                });
            }
            else {
                if (!removeUndefined || (removeUndefined && data_1 !== undefined)) {
                    json[instanceMap[key]['name']] = data_1;
                }
            }
        }
    });
    return json;
}
exports.serialize = serialize;
function convertPropertyToData(instance, key, metadata, removeUndefined) {
    var property = instance[key];
    var type = Reflect.getMetadata(designType, instance, key);
    var isArray = type.name.toLocaleLowerCase() === Type.Array;
    var predicate = metadata['predicate'];
    var propertyType = metadata['type'] || type;
    var isSerializableProperty = isSerializable(propertyType);
    if (property && (isSerializableProperty || predicate)) {
        if (isArray) {
            var array_1 = [];
            property.forEach(function (d) {
                array_1.push(serialize(d, removeUndefined));
            });
            return array_1;
        }
        if (metadata['isDictionary']) {
            var obj_1 = {};
            Object.keys(property).forEach(function (k) {
                obj_1[k] = serialize(property[k], removeUndefined);
            });
            return obj_1;
        }
        return serialize(property, removeUndefined);
    }
    if (propertyType.name.toLocaleLowerCase() === Type.Date) {
        return property ? property.toISOString() : property;
    }
    return property;
}
function convertDataToProperty(instance, key, metadata, json) {
    var data;
    if ([null, undefined].includes(json)) {
        return json;
    }
    if (metadata['names']) {
        var object_1 = {};
        metadata['names'].forEach(function (name) { return (object_1[name] = json[name]); });
        data = object_1;
    }
    else {
        data = json[metadata['name']];
    }
    if ([null, undefined].includes(data)) {
        return data;
    }
    var type = Reflect.getMetadata(designType, instance, key);
    var isArray = type.name.toLowerCase() === Type.Array;
    var isDictionary = metadata['isDictionary'];
    var predicate = metadata['predicate'];
    var onDeserialize = metadata['onDeserialize'];
    var postDeserialize = metadata['postDeserialize'];
    var propertyType = metadata['type'] || type;
    var isSerializableProperty = isSerializable(propertyType);
    var result;
    if (onDeserialize) {
        data = onDeserialize(data, instance);
    }
    if (!isSerializableProperty && !predicate) {
        result = castSimpleData(propertyType.name, data);
    }
    else if (isArray) {
        var array_2 = [];
        if (!Array.isArray(data)) {
            console.error(data + " is not an array.");
            result = undefined;
        }
        else {
            data.forEach(function (d) {
                if (predicate) {
                    propertyType = predicate(d);
                }
                array_2.push(deserialize(d, propertyType));
            });
            result = array_2;
        }
    }
    else if (isDictionary) {
        var obj_2 = {};
        if (typeof data !== Type.Object) {
            console.error(data + " is not an object.");
            result = undefined;
        }
        else {
            Object.keys(data).forEach(function (k) {
                if (predicate) {
                    propertyType = predicate(data[k]);
                }
                obj_2[k] = deserialize(data[k], propertyType);
            });
            result = obj_2;
        }
    }
    else {
        propertyType = predicate ? predicate(data) : propertyType;
        result = deserialize(data, propertyType);
    }
    if (postDeserialize) {
        result = postDeserialize(result, instance);
    }
    return result;
}
function isSerializable(type) {
    return Reflect.hasOwnMetadata(apiMapSerializable, type);
}
function getJsonPropertyValue(key, args) {
    if (!args) {
        return {
            name: key.toString(),
            type: undefined,
            onDeserialize: undefined,
            onSerialize: undefined,
            postDeserialize: undefined,
            isDictionary: false
        };
    }
    var metadata;
    if (typeof args === Type.String) {
        metadata = { name: args };
    }
    else if (args['name']) {
        metadata = { name: args['name'] };
    }
    else if (args['names'] && args['names'].length) {
        metadata = { names: args['names'] };
    }
    else {
        metadata = { name: key.toString() };
    }
    return args['predicate']
        ? __assign(__assign({}, metadata), { predicate: args['predicate'], onDeserialize: args['onDeserialize'], onSerialize: args['onSerialize'], postDeserialize: args['postDeserialize'], isDictionary: !!args['isDictionary'] }) : __assign(__assign({}, metadata), { type: args['type'], onDeserialize: args['onDeserialize'], onSerialize: args['onSerialize'], postDeserialize: args['postDeserialize'], isDictionary: !!args['isDictionary'] });
}
function castSimpleData(type, data) {
    type = type.toLowerCase();
    if ((typeof data).toLowerCase() === type) {
        return data;
    }
    switch (type) {
        case Type.String:
            return data ? data.toString() : data;
        case Type.Number:
            var number = +data;
            if (isNaN(number)) {
                console.error(data + ": Type " + typeof data + " is not assignable to type " + type + ".");
                return undefined;
            }
            return number;
        case Type.Boolean:
            console.error(data + ": Type " + typeof data + " is not assignable to type " + type + ".");
            return undefined;
        case Type.Date:
            if (isNaN(Date.parse(data))) {
                console.error(data + ": Type " + typeof data + " is not assignable to type " + type + ".");
                return undefined;
            }
            return new Date(data);
        default:
            return data;
    }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.ts");
/* harmony import */ var typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-json-serializer */ "./node_modules/typescript-json-serializer/index.js");
/* harmony import */ var typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__);


let activeCards = [];
let currentCard = 0;
function updatePreview() {
    let canvas = document.getElementById('preview');
    if (canvas && activeCards[currentCard]) {
        activeCards[currentCard].draw(canvas, 0);
    }
}
function onCardTypeChanged(event) {
    const selectElem = event.target;
    if (selectElem && activeCards[currentCard]) {
        activeCards[currentCard]._heading = selectElem.selectedOptions[0].text;
        $('#cardheader').val(activeCards[currentCard]._heading);
        if (selectElem.selectedOptions[0].text == 'Stratagem') {
            activeCards[currentCard]._type = _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].Stratagem;
        }
        else if (selectElem.selectedOptions[0].text == 'Psychic Power') {
            activeCards[currentCard]._type = _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].PsychicPower;
        }
        else if (selectElem.selectedOptions[0].text == 'Tactical Objective') {
            activeCards[currentCard]._type = _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].TacticalObjective;
        }
        else if (selectElem.selectedOptions[0].text == 'Prayer') {
            activeCards[currentCard]._type = _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].Prayer;
        }
        updateCardUI();
        updatePreview();
    }
}
function onCardStyleChanged(event) {
    const selectElem = event.target;
    if (selectElem && activeCards[currentCard]) {
    }
}
function onHeaderChanged(event) {
    const inputElem = event.target;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._heading = inputElem.value;
        updatePreview();
    }
}
function onTitleChanged(event) {
    const inputElem = event.target;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._title = inputElem.value;
        updatePreview();
    }
}
function onRuleChanged(event) {
    const inputElem = event.target;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._rule = inputElem.value;
        updatePreview();
    }
}
function onFluffChanged(event) {
    const inputElem = event.target;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._fluff = inputElem.value;
        updatePreview();
    }
}
function onValueChanged(event) {
    const inputElem = event.target;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._value = inputElem.value;
        updatePreview();
    }
}
function onPreviousCard() {
    currentCard = Math.max(currentCard - 1, 0);
    updateCardUI();
    updatePreview();
}
function onNextCard() {
    currentCard = Math.min(currentCard + 1, activeCards.length - 1);
    updateCardUI();
    updatePreview();
}
function mmToInches(mm) {
    return mm / 25.4;
}
function handleCreate() {
    if (activeCards[currentCard]) {
        const cardSizeMm = [63, 88];
        let dpi = 300;
        let marginMm = 0;
        const outputDPIInput = document.getElementById('outputdpi');
        if (outputDPIInput)
            dpi = parseInt(outputDPIInput.value);
        const outputMargin = document.getElementById('outputmargin');
        if (outputMargin)
            marginMm = parseInt(outputMargin.value);
        let marginPx = Math.ceil(mmToInches(marginMm) * dpi);
        let canvas = document.createElement('canvas');
        canvas.width = Math.round(mmToInches(cardSizeMm[0]) * dpi) + 2 * marginPx;
        canvas.height = Math.round(mmToInches(cardSizeMm[1]) * dpi) + 2 * marginPx;
        activeCards[currentCard].draw(canvas, marginPx);
        let link = document.createElement('a');
        link.download = 'stratagem.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
        console.log("Current card: " + currentCard + " Num active cards: " + activeCards.length);
        updateCardUI();
        updatePreview();
    }
}
function getFileExtension(filename) {
    const substrings = filename.split('.');
    if (substrings.length > 1) {
        return substrings[substrings.length - 1].toLowerCase();
    }
    return "";
}
function handleFileSelect(event) {
    const input = event.target;
    const files = input.files;
    if (files) {
        currentCard = 0;
        activeCards.length = 0;
        let output = [];
        for (let f of files) {
            const fileExt = getFileExtension(f.name);
            if (fileExt === "csv" || fileExt === 'tsv') {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const re = e.target;
                    if (re && re.result) {
                        let sourceData = re.result;
                        const csvdatastart = sourceData.toString().indexOf(',') + 1;
                        const csvdata = window.atob(sourceData.toString().slice(csvdatastart));
                        const csvarray = csvdata.split(/\r?\n/g);
                        let cardType = _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].Stratagem;
                        for (let c of csvarray) {
                            const fields = c.split(fileExt === 'csv' ? ',' : '\t');
                            if (fields.length > 1) {
                                console.log("Type: " + fields[0]);
                                if (fields[0].toUpperCase() == "STRATAGEM")
                                    cardType = _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].Stratagem;
                                else if (fields[0].toUpperCase() === "PSYCHIC POWER")
                                    cardType = _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].PsychicPower;
                                else if (fields[0].toUpperCase() === "TACTICAL OBJECTIVE")
                                    cardType = _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].TacticalObjective;
                                else if (fields[0].toUpperCase() === "PRAYER")
                                    cardType = _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].Prayer;
                                else {
                                    $('#errorText').html('Unknown card type: ' + fields[0] + '.  Supported card types are ' +
                                        'STRATAGEM, PSYCHIC POWER, PRAYER and TACTICAL OBJECTIVE.');
                                    $('#errorDialog').modal();
                                }
                                if (cardType == _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].Prayer) {
                                    if (fields.length == 5) {
                                        let card = new _card__WEBPACK_IMPORTED_MODULE_0__["Card"]();
                                        card._type = cardType;
                                        card._value = "";
                                        card._title = fields[1];
                                        card._heading = fields[2];
                                        card._fluff = fields[3];
                                        card._rule = fields[4];
                                        activeCards.push(card);
                                    }
                                }
                                else {
                                    if (fields.length == 6) {
                                        let card = new _card__WEBPACK_IMPORTED_MODULE_0__["Card"]();
                                        card._type = cardType;
                                        card._value = fields[1];
                                        card._title = fields[2];
                                        card._heading = fields[3];
                                        card._fluff = fields[4];
                                        card._rule = fields[5];
                                        activeCards.push(card);
                                    }
                                }
                            }
                        }
                        currentCard = 0;
                        console.log("Num active cards: " + activeCards.length);
                        updateCardUI();
                        updatePreview();
                    }
                };
                reader.readAsDataURL(f);
            }
            else {
                $('#errorText').html('StrataGen only supports .csv files.  Selected file is a \'' + fileExt + "\' file.");
                $('#errorDialog').modal();
            }
        }
    }
}
function onSaveCard() {
    localStorage.setItem('lastCard', JSON.stringify(Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["serialize"])(activeCards[currentCard])));
}
function onLoadCard() {
    let lastCardString = localStorage.getItem('lastCard');
    if (lastCardString) {
        activeCards[currentCard] = Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_1__["deserialize"])(JSON.parse(lastCardString), _card__WEBPACK_IMPORTED_MODULE_0__["Card"]);
        updateCardUI();
        updatePreview();
    }
    else {
        console.log("Card not loaded.");
    }
}
function onBackgroundLoad(event) {
    const input = event.target;
    const files = input.files;
    if (files && files[0]) {
    }
}
function onBgOpacityChanged(event) {
    const inputElem = event.target;
    if (inputElem) {
        inputElem.value;
    }
}
function onBgSaturationChanged(event) {
    const inputElem = event.target;
    if (inputElem) {
        inputElem.value;
    }
}
function updateCardUI() {
    if (activeCards[currentCard]) {
        $('#cardtype').val(activeCards[currentCard]._type.toString());
        $('#cardheader').val(activeCards[currentCard]._heading);
        $('#cardtitle').val(activeCards[currentCard]._title);
        $('#cardrule').val(activeCards[currentCard]._rule);
        $('#cardfluff').val(activeCards[currentCard]._fluff);
        if (activeCards[currentCard]._type === _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].Stratagem) {
            $('#cardvalue').attr({ "min": 1, "max": 3 });
            if (parseInt(activeCards[currentCard]._value) > 3)
                activeCards[currentCard]._value = "3";
            else if (parseInt(activeCards[currentCard]._value) < 1)
                activeCards[currentCard]._value = "1";
            $('#cardvaluelabel').html("Command Points");
            $('#cardvaluecontrol').show();
        }
        else if (activeCards[currentCard]._type === _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].PsychicPower) {
            $('#cardvalue').attr({ "min": 2, "max": 12 });
            if (parseInt(activeCards[currentCard]._value) > 12)
                activeCards[currentCard]._value = "12";
            else if (parseInt(activeCards[currentCard]._value) < 2)
                activeCards[currentCard]._value = "2";
            $('#cardvaluelabel').html("Warp Charge");
            $('#cardvaluecontrol').show();
        }
        else if (activeCards[currentCard]._type === _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].TacticalObjective) {
            $('#cardvalue').attr({ "min": 11, "max": 66 });
            if (parseInt(activeCards[currentCard]._value) > 66)
                activeCards[currentCard]._value = "66";
            else if (parseInt(activeCards[currentCard]._value) < 11)
                activeCards[currentCard]._value = "11";
            $('#cardvaluelabel').html("Objective (D66)");
            $('#cardvaluecontrol').show();
        }
        else if (activeCards[currentCard]._type === _card__WEBPACK_IMPORTED_MODULE_0__["CardType"].Prayer) {
            $('#cardvaluecontrol').hide();
        }
        $('#cardvalue').val(activeCards[currentCard]._value);
    }
}
function plumbCallbacks() {
    $('#previouscard').click(onPreviousCard);
    $('#nextcard').click(onNextCard);
    $('#cardtype').on('change', onCardTypeChanged);
    $('#cardstyle').on('change', onCardStyleChanged);
    $('#cardheader').on('input', onHeaderChanged);
    $('#cardtitle').on('input', onTitleChanged);
    $('#cardrule').on('input', onRuleChanged);
    $('#cardfluff').on('input', onFluffChanged);
    $('#cardvalue').on('input', onValueChanged);
    $('#createcard').click(handleCreate);
    $('#datacardfile').on('change', handleFileSelect);
    $('#backgroundfile').on('change', onBackgroundLoad);
    $('#bgopacity').on('input', onBgOpacityChanged);
    $('#bgsaturation').on('input', onBgSaturationChanged);
    $('#savecard').click(onSaveCard);
    $('#loadcard').click(onLoadCard);
}
console.log("Reloading web page.");
let canvas = document.getElementById('preview');
if (canvas) {
    let ctx = canvas.getContext('2d');
    if (ctx) {
        if (activeCards.length == 0) {
            currentCard = 0;
            activeCards[currentCard] = new _card__WEBPACK_IMPORTED_MODULE_0__["Card"]();
        }
    }
}
plumbCallbacks();
updatePreview();


/***/ }),

/***/ "./src/card.ts":
/*!*********************!*\
  !*** ./src/card.ts ***!
  \*********************/
/*! exports provided: CardType, Justification, RenderText, RenderParagraph, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardType", function() { return CardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Justification", function() { return Justification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderText", function() { return RenderText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderParagraph", function() { return RenderParagraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-json-serializer */ "./node_modules/typescript-json-serializer/index.js");
/* harmony import */ var typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Card_1;

var CardType;
(function (CardType) {
    CardType["Stratagem"] = "Stratagem";
    CardType["PsychicPower"] = "Psychic Power";
    CardType["TacticalObjective"] = "Tactical Objective";
    CardType["Prayer"] = "Prayer";
})(CardType || (CardType = {}));
var Justification;
(function (Justification) {
    Justification[Justification["Left"] = 0] = "Left";
    Justification[Justification["Right"] = 1] = "Right";
    Justification[Justification["Center"] = 2] = "Center";
})(Justification || (Justification = {}));
;
function RenderText(ctx, text, x, y, w, h, how) {
    if (ctx && text.length) {
        ctx.textBaseline = 'top';
        let measure = ctx.measureText(text);
        const tw = measure.width;
        const th = measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent;
        if (how == Justification.Center) {
            ctx.fillText(text, x + Math.max((w - tw) / 2, 0), y + (h - th) / 2, w);
        }
        else if (how == Justification.Left) {
            ctx.fillText(text, x, y + (h - th) / 2, w);
        }
        else if (how == Justification.Right) {
            ctx.fillText(text, x + w - tw, y + (h - th) / 2, w);
        }
    }
}
function RenderParagraph(ctx, text, x, y, w, how) {
    let curY = y;
    if (ctx && text.length) {
        let lines = [];
        let currentLine = [];
        ctx.textBaseline = 'top';
        let length = 0;
        const spaceWidth = ctx.measureText(" ").width;
        const heightMeasure = ctx.measureText(text);
        const th = (heightMeasure.actualBoundingBoxDescent - heightMeasure.actualBoundingBoxAscent) * 1.5;
        text.split(" ").forEach(function (word) {
            const measure = ctx.measureText(word);
            if ((length + measure.width) > w) {
                lines.push(currentLine.join(" "));
                currentLine.length = 0;
                length = 0;
            }
            length += measure.width + spaceWidth;
            currentLine.push(word);
        });
        if (currentLine.length > 0) {
            lines.push(currentLine.join(" "));
        }
        for (let l of lines) {
            let measure = ctx.measureText(l);
            const tw = measure.width;
            if (how == Justification.Center) {
                ctx.fillText(l, x + Math.max((w - tw) / 2, 0), curY, w);
            }
            else if (how == Justification.Left) {
                ctx.fillText(l, x, curY, w);
            }
            else if (how == Justification.Right) {
                ctx.fillText(l, x + w - tw, curY, w);
            }
            curY += th;
        }
    }
    return curY;
}
let Card = Card_1 = class Card {
    constructor() {
        this._width = Card_1.defaultWidthPx;
        this._height = Card_1.defaultHeightPx;
        this._scale = 1;
        this._type = CardType.Stratagem;
        this._heading = "Stratagem";
        this._title = "<Title>";
        this._fluff = "<Fluff text>";
        this._rule = "<Rule text>";
        this._value = "1";
    }
    headerFont() {
        return Math.round(24 * this._scale).toString() + 'px ' + 'Teko';
    }
    titleFont() {
        return Math.round(28 * this._scale).toString() + 'px ' + 'Teko';
    }
    fluffFont() {
        return 'italic ' + Math.round(14 * this._scale).toString() + 'px ' + 'serif';
    }
    ruleFont() {
        return Math.round(14 * this._scale).toString() + 'px ' + 'serif';
    }
    footFont() {
        return Math.round(18 * this._scale).toString() + 'px ' + 'Teko';
    }
    valueFont() {
        return Math.round(24 * this._scale).toString() + 'px ' + 'Teko';
    }
    draw(canvas, marginPx) {
        let ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        this._width = canvas.width - 2 * marginPx;
        this._height = canvas.height - 2 * marginPx;
        this._scale = Math.max(this._width / Card_1.defaultWidthPx, this._height / Card_1.defaultHeightPx);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(marginPx, marginPx);
        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'silver';
        this.roundRect(ctx, 1, 1, this._width - 2, this._height - 2, 20, false, true);
        const borderX = this._width * 0.05;
        const borderY = borderX;
        const borderWidth = this._width - 2 * borderX;
        const borderHeight = this._height - 2 * borderY;
        const borderLineWidth = Math.ceil(borderX * 0.3);
        const textRegionHeight = this._height / 12;
        ctx.save();
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = borderLineWidth;
        this.drawBorder(ctx, borderX, borderY, borderWidth, borderHeight, textRegionHeight);
        ctx.restore();
        const cardHeader = this._heading.toLocaleUpperCase();
        ctx.save();
        ctx.font = this.headerFont();
        ctx.textBaseline = 'top';
        ctx.fillStyle = 'black';
        RenderText(ctx, cardHeader, borderX, borderY, borderWidth, textRegionHeight, Justification.Center);
        ctx.restore();
        let curY = borderY * 2 + textRegionHeight;
        const marginXLeft = borderX * 2;
        const marginXRight = this._width - 2 * borderX;
        const textWidth = marginXRight - marginXLeft;
        ctx.moveTo(marginXLeft, curY);
        ctx.lineTo(marginXRight, curY);
        ctx.stroke();
        const cardTitle = this._title.toLocaleUpperCase();
        ctx.save();
        ctx.font = this.titleFont();
        ctx.textBaseline = 'top';
        ctx.fillStyle = 'black';
        RenderText(ctx, cardTitle, marginXLeft, curY, textWidth, textRegionHeight, Justification.Center);
        ctx.restore();
        curY += textRegionHeight;
        ctx.moveTo(marginXLeft, curY);
        ctx.lineTo(marginXRight, curY);
        ctx.stroke();
        curY += borderY;
        if (this._fluff.length > 0) {
            ctx.save();
            ctx.font = this.fluffFont();
            ctx.fillStyle = 'black';
            curY = RenderParagraph(ctx, this._fluff, marginXLeft, curY, textWidth, Justification.Center);
            ctx.restore();
            curY += textRegionHeight / 2;
        }
        ctx.moveTo(marginXLeft, curY);
        ctx.lineTo(marginXRight, curY);
        ctx.stroke();
        curY += textRegionHeight / 2;
        ctx.save();
        ctx.font = this.ruleFont();
        ctx.fillStyle = 'black';
        curY = RenderParagraph(ctx, this._rule, marginXLeft, curY, textWidth, Justification.Center);
        ctx.restore();
        curY = this._height - borderY * 1.5 - textRegionHeight;
        if ((this._type == CardType.Stratagem) || (this._type == CardType.PsychicPower) || (this._type == CardType.TacticalObjective)) {
            const cpBoxSize = textRegionHeight;
            ctx.save();
            ctx.lineWidth = Math.max(Math.ceil(this._scale), 1.0);
            this.roundRect(ctx, marginXLeft * 2 + cpBoxSize, curY, textWidth - 2 * marginXLeft - cpBoxSize, textRegionHeight - 6, 8, false, true);
            ctx.restore();
            ctx.save();
            ctx.font = this.footFont();
            ctx.textBaseline = 'top';
            ctx.fillStyle = 'black';
            let footText = 'COMMAND POINTS';
            if (this._type === CardType.Stratagem) {
                footText = 'COMMAND POINTS';
            }
            else if (this._type === CardType.PsychicPower) {
                footText = 'WARP CHARGE';
            }
            else if (this._type === CardType.TacticalObjective) {
                footText = 'OBJECTIVE';
            }
            RenderText(ctx, footText, marginXLeft * 2 + cpBoxSize, curY, textWidth - 2 * marginXLeft - cpBoxSize, textRegionHeight - 6, Justification.Center);
            ctx.restore();
            ctx.save();
            ctx.fillStyle = '#ba2222';
            ctx.lineWidth = Math.max(Math.ceil(this._scale), 1.0);
            this.bevelRect(ctx, marginXLeft * 2, curY - 3, cpBoxSize, cpBoxSize, 5, true, true);
            ctx.restore();
            ctx.save();
            ctx.font = this.valueFont();
            ctx.textBaseline = 'top';
            ctx.fillStyle = '#f5f2f2';
            RenderText(ctx, this._value, marginXLeft * 2, curY - 3, cpBoxSize, cpBoxSize, Justification.Center);
            ctx.restore();
        }
        else if (this._type == CardType.Prayer) {
        }
    }
    toString() {
        return "Card: " + this._type.toString() + "  Title: " + this._title + "  Rule: " + this._rule + "  CP: " + this._value;
    }
    roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    }
    bevelRect(ctx, x, y, width, height, bevel, fill, stroke) {
        ctx.beginPath();
        ctx.moveTo(x, y + bevel);
        ctx.lineTo(x, y + height - bevel);
        ctx.lineTo(x + bevel, y + height);
        ctx.lineTo(x + width - bevel, y + height);
        ctx.lineTo(x + width, y + height - bevel);
        ctx.lineTo(x + width, y + bevel);
        ctx.lineTo(x + width - bevel, y);
        ctx.lineTo(x + bevel, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    }
    drawBorder(ctx, x, y, width, height, bevel) {
        this.bevelRect(ctx, x, y, width, height, bevel, false, true);
        ctx.moveTo(x, y + bevel);
        ctx.lineTo(x + width, y + bevel);
        ctx.stroke();
    }
};
Card.defaultWidthPx = 400;
Card.defaultHeightPx = 560;
__decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])(),
    __metadata("design:type", Number)
], Card.prototype, "_width", void 0);
__decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])(),
    __metadata("design:type", Number)
], Card.prototype, "_height", void 0);
__decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])(),
    __metadata("design:type", Number)
], Card.prototype, "_scale", void 0);
__decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])(),
    __metadata("design:type", String)
], Card.prototype, "_type", void 0);
__decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])(),
    __metadata("design:type", String)
], Card.prototype, "_heading", void 0);
__decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])(),
    __metadata("design:type", String)
], Card.prototype, "_title", void 0);
__decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])(),
    __metadata("design:type", String)
], Card.prototype, "_fluff", void 0);
__decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])(),
    __metadata("design:type", String)
], Card.prototype, "_rule", void 0);
__decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])(),
    __metadata("design:type", String)
], Card.prototype, "_value", void 0);
Card = Card_1 = __decorate([
    Object(typescript_json_serializer__WEBPACK_IMPORTED_MODULE_0__["Serializable"])()
], Card);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90eXBlc2NyaXB0LWpzb24tc2VyaWFsaXplci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUMzQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsMkNBQTJDO0FBQzNDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx1QkFBdUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzFELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzVFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzVELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksRUFBRTtZQUNOLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxNQUFNLEVBQUU7WUFDUixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQTZCLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLEtBQWEsRUFBRSxJQUFhLEVBQUUsTUFBZTtRQUMvSSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksRUFBRTtZQUNOLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxNQUFNLEVBQUU7WUFDUixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRU8sVUFBVSxDQUFDLEdBQTZCLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDaEgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Q0FFSjtBQTNOMkIsbUJBQWMsR0FBRyxHQUFHLENBQUM7QUFDckIsb0JBQWUsR0FBRyxHQUFHLENBQUM7QUFFOUI7SUFBZiwrRUFBWSxFQUFFOztvQ0FBOEM7QUFDN0M7SUFBZiwrRUFBWSxFQUFFOztxQ0FBZ0Q7QUFDL0M7SUFBZiwrRUFBWSxFQUFFOztvQ0FBNEI7QUFFM0I7SUFBZiwrRUFBWSxFQUFFOzttQ0FBNkM7QUFFNUM7SUFBZiwrRUFBWSxFQUFFOztzQ0FBdUM7QUFDdEM7SUFBZiwrRUFBWSxFQUFFOztvQ0FBbUM7QUFDbEM7SUFBZiwrRUFBWSxFQUFFOztvQ0FBd0M7QUFDdkM7SUFBZiwrRUFBWSxFQUFFOzttQ0FBcUM7QUFDcEM7SUFBZiwrRUFBWSxFQUFFOztvQ0FBNkI7QUFmbkMsSUFBSTtJQURoQiwrRUFBWSxFQUFFO0dBQ0YsSUFBSSxDQTZOaEI7QUE3TmdCIiwiZmlsZSI6InN0cmF0YWdlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKEMpIE1pY3Jvc29mdC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxuXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG52YXIgUmVmbGVjdDtcbihmdW5jdGlvbiAoUmVmbGVjdCkge1xuICAgIC8vIE1ldGFkYXRhIFByb3Bvc2FsXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS9cbiAgICAoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgICAgICAgICAgIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6XG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMgPT09IFwib2JqZWN0XCIgPyB0aGlzIDpcbiAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb24oXCJyZXR1cm4gdGhpcztcIikoKTtcbiAgICAgICAgdmFyIGV4cG9ydGVyID0gbWFrZUV4cG9ydGVyKFJlZmxlY3QpO1xuICAgICAgICBpZiAodHlwZW9mIHJvb3QuUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcm9vdC5SZWZsZWN0ID0gUmVmbGVjdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV4cG9ydGVyID0gbWFrZUV4cG9ydGVyKHJvb3QuUmVmbGVjdCwgZXhwb3J0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGZhY3RvcnkoZXhwb3J0ZXIpO1xuICAgICAgICBmdW5jdGlvbiBtYWtlRXhwb3J0ZXIodGFyZ2V0LCBwcmV2aW91cykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgeyBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91cylcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSkoZnVuY3Rpb24gKGV4cG9ydGVyKSB7XG4gICAgICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgICAvLyBmZWF0dXJlIHRlc3QgZm9yIFN5bWJvbCBzdXBwb3J0XG4gICAgICAgIHZhciBzdXBwb3J0c1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgdmFyIHRvUHJpbWl0aXZlU3ltYm9sID0gc3VwcG9ydHNTeW1ib2wgJiYgdHlwZW9mIFN5bWJvbC50b1ByaW1pdGl2ZSAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbC50b1ByaW1pdGl2ZSA6IFwiQEB0b1ByaW1pdGl2ZVwiO1xuICAgICAgICB2YXIgaXRlcmF0b3JTeW1ib2wgPSBzdXBwb3J0c1N5bWJvbCAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLml0ZXJhdG9yIDogXCJAQGl0ZXJhdG9yXCI7XG4gICAgICAgIHZhciBzdXBwb3J0c0NyZWF0ZSA9IHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSBcImZ1bmN0aW9uXCI7IC8vIGZlYXR1cmUgdGVzdCBmb3IgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0XG4gICAgICAgIHZhciBzdXBwb3J0c1Byb3RvID0geyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheTsgLy8gZmVhdHVyZSB0ZXN0IGZvciBfX3Byb3RvX18gc3VwcG9ydFxuICAgICAgICB2YXIgZG93bkxldmVsID0gIXN1cHBvcnRzQ3JlYXRlICYmICFzdXBwb3J0c1Byb3RvO1xuICAgICAgICB2YXIgSGFzaE1hcCA9IHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBvYmplY3QgaW4gZGljdGlvbmFyeSBtb2RlIChhLmsuYS4gXCJzbG93XCIgbW9kZSBpbiB2OClcbiAgICAgICAgICAgIGNyZWF0ZTogc3VwcG9ydHNDcmVhdGVcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KE9iamVjdC5jcmVhdGUobnVsbCkpOyB9XG4gICAgICAgICAgICAgICAgOiBzdXBwb3J0c1Byb3RvXG4gICAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoeyBfX3Byb3RvX186IG51bGwgfSk7IH1cbiAgICAgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeSh7fSk7IH0sXG4gICAgICAgICAgICBoYXM6IGRvd25MZXZlbFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBoYXNPd24uY2FsbChtYXAsIGtleSk7IH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4ga2V5IGluIG1hcDsgfSxcbiAgICAgICAgICAgIGdldDogZG93bkxldmVsXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KSA/IG1hcFtrZXldIDogdW5kZWZpbmVkOyB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIG1hcFtrZXldOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyBMb2FkIGdsb2JhbCBvciBzaGltIHZlcnNpb25zIG9mIE1hcCwgU2V0LCBhbmQgV2Vha01hcFxuICAgICAgICB2YXIgZnVuY3Rpb25Qcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRnVuY3Rpb24pO1xuICAgICAgICB2YXIgdXNlUG9seWZpbGwgPSB0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudltcIlJFRkxFQ1RfTUVUQURBVEFfVVNFX01BUF9QT0xZRklMTFwiXSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgIHZhciBfTWFwID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgTWFwLnByb3RvdHlwZS5lbnRyaWVzID09PSBcImZ1bmN0aW9uXCIgPyBNYXAgOiBDcmVhdGVNYXBQb2x5ZmlsbCgpO1xuICAgICAgICB2YXIgX1NldCA9ICF1c2VQb2x5ZmlsbCAmJiB0eXBlb2YgU2V0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFNldC5wcm90b3R5cGUuZW50cmllcyA9PT0gXCJmdW5jdGlvblwiID8gU2V0IDogQ3JlYXRlU2V0UG9seWZpbGwoKTtcbiAgICAgICAgdmFyIF9XZWFrTWFwID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBXZWFrTWFwID09PSBcImZ1bmN0aW9uXCIgPyBXZWFrTWFwIDogQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCk7XG4gICAgICAgIC8vIFtbTWV0YWRhdGFdXSBpbnRlcm5hbCBzbG90XG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5LW9iamVjdC1pbnRlcm5hbC1tZXRob2RzLWFuZC1pbnRlcm5hbC1zbG90c1xuICAgICAgICB2YXIgTWV0YWRhdGEgPSBuZXcgX1dlYWtNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGxpZXMgYSBzZXQgb2YgZGVjb3JhdG9ycyB0byBhIHByb3BlcnR5IG9mIGEgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIGRlY29yYXRvcnMgQW4gYXJyYXkgb2YgZGVjb3JhdG9ycy5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSB0byBkZWNvcmF0ZS5cbiAgICAgICAgICogQHBhcmFtIGF0dHJpYnV0ZXMgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkgZGVzY3JpcHRvciBmb3IgdGhlIHRhcmdldCBrZXkuXG4gICAgICAgICAqIEByZW1hcmtzIERlY29yYXRvcnMgYXJlIGFwcGxpZWQgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgRXhhbXBsZSA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcbiAgICAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcbiAgICAgICAgICogICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKSkpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKSkpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGF0dHJpYnV0ZXMpICYmICFJc1VuZGVmaW5lZChhdHRyaWJ1dGVzKSAmJiAhSXNOdWxsKGF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKElzTnVsbChhdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZVByb3BlcnR5KGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFJc0FycmF5KGRlY29yYXRvcnMpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVDb25zdHJ1Y3RvcihkZWNvcmF0b3JzLCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZGVjb3JhdGVcIiwgZGVjb3JhdGUpO1xuICAgICAgICAvLyA0LjEuMiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNyZWZsZWN0Lm1ldGFkYXRhXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGRlZmF1bHQgbWV0YWRhdGEgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBjYW4gYmUgdXNlZCBvbiBhIGNsYXNzLCBjbGFzcyBtZW1iZXIsIG9yIHBhcmFtZXRlci5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IFRoZSBrZXkgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhVmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEgZW50cnkuXG4gICAgICAgICAqIEByZXR1cm5zIEEgZGVjb3JhdG9yIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcmVtYXJrc1xuICAgICAgICAgKiBJZiBgbWV0YWRhdGFLZXlgIGlzIGFscmVhZHkgZGVmaW5lZCBmb3IgdGhlIHRhcmdldCBhbmQgdGFyZ2V0IGtleSwgdGhlXG4gICAgICAgICAqIG1ldGFkYXRhVmFsdWUgZm9yIHRoYXQga2V5IHdpbGwgYmUgb3ZlcndyaXR0ZW4uXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yLCBUeXBlU2NyaXB0IG9ubHkpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUsIFR5cGVTY3JpcHQgb25seSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgcHJvcGVydHk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSAmJiAhSXNQcm9wZXJ0eUtleShwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJtZXRhZGF0YVwiLCBtZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmUgYSB1bmlxdWUgbWV0YWRhdGEgZW50cnkgb24gdGhlIHRhcmdldC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBBIHZhbHVlIHRoYXQgY29udGFpbnMgYXR0YWNoZWQgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdG8gZGVmaW5lIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gZGVjb3JhdG9yIGZhY3RvcnkgYXMgbWV0YWRhdGEtcHJvZHVjaW5nIGFubm90YXRpb24uXG4gICAgICAgICAqICAgICBmdW5jdGlvbiBNeUFubm90YXRpb24ob3B0aW9ucyk6IERlY29yYXRvciB7XG4gICAgICAgICAqICAgICAgICAgcmV0dXJuICh0YXJnZXQsIGtleT8pID0+IFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCB0YXJnZXQsIGtleSk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJkZWZpbmVNZXRhZGF0YVwiLCBkZWZpbmVNZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4gaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluOyBvdGhlcndpc2UsIGBmYWxzZWAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJoYXNNZXRhZGF0YVwiLCBoYXNNZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Q7IG90aGVyd2lzZSwgYGZhbHNlYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImhhc093bk1ldGFkYXRhXCIsIGhhc093bk1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0TWV0YWRhdGFcIiwgZ2V0TWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0T3duTWV0YWRhdGFcIiwgZ2V0T3duTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeU1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImdldE1ldGFkYXRhS2V5c1wiLCBnZXRNZXRhZGF0YUtleXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgdW5pcXVlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0T3duTWV0YWRhdGFLZXlzXCIsIGdldE93bk1ldGFkYXRhS2V5cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWxldGVzIHRoZSBtZXRhZGF0YSBlbnRyeSBmcm9tIHRoZSB0YXJnZXQgb2JqZWN0IHdpdGggdGhlIHByb3ZpZGVkIGtleS5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGVudHJ5IHdhcyBmb3VuZCBhbmQgZGVsZXRlZDsgb3RoZXJ3aXNlLCBmYWxzZS5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghbWV0YWRhdGFNYXAuZGVsZXRlKG1ldGFkYXRhS2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGFNYXAuc2l6ZSA+IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhLmRlbGV0ZShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0TWV0YWRhdGEuc2l6ZSA+IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBNZXRhZGF0YS5kZWxldGUodGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZGVsZXRlTWV0YWRhdGFcIiwgZGVsZXRlTWV0YWRhdGEpO1xuICAgICAgICBmdW5jdGlvbiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdGVkID0gZGVjb3JhdG9yKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChkZWNvcmF0ZWQpICYmICFJc051bGwoZGVjb3JhdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IoZGVjb3JhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZGVjb3JhdGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gRGVjb3JhdGVQcm9wZXJ0eShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0ZWQgPSBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChkZWNvcmF0ZWQpICYmICFJc051bGwoZGVjb3JhdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGRlY29yYXRlZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBkZWNvcmF0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBDcmVhdGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IE1ldGFkYXRhLmdldChPKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZCh0YXJnZXRNZXRhZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUNyZWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0YXJnZXRNZXRhZGF0YSA9IG5ldyBfTWFwKCk7XG4gICAgICAgICAgICAgICAgTWV0YWRhdGEuc2V0KE8sIHRhcmdldE1ldGFkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IHRhcmdldE1ldGFkYXRhLmdldChQKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUNyZWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YU1hcCA9IG5ldyBfTWFwKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEuc2V0KFAsIG1ldGFkYXRhTWFwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YU1hcDtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuMS4xIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5aGFzbWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICAgICAgICAgICAgaWYgKGhhc093bilcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKCFJc051bGwocGFyZW50KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuMi4xIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5aGFzb3dubWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIFRvQm9vbGVhbihtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuMy4xIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5Z2V0bWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICAgICAgICAgICAgaWYgKGhhc093bilcbiAgICAgICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmICghSXNOdWxsKHBhcmVudCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS40LjEgT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlnZXRvd25tZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjUuMSBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWRlZmluZW93bm1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyB0cnVlKTtcbiAgICAgICAgICAgIG1ldGFkYXRhTWFwLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjYuMSBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeW1ldGFkYXRha2V5c1xuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPLCBQKSB7XG4gICAgICAgICAgICB2YXIgb3duS2V5cyA9IE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBvd25LZXlzO1xuICAgICAgICAgICAgdmFyIHBhcmVudEtleXMgPSBPcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuICAgICAgICAgICAgaWYgKHBhcmVudEtleXMubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG93bktleXM7XG4gICAgICAgICAgICBpZiAob3duS2V5cy5sZW5ndGggPD0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50S2V5cztcbiAgICAgICAgICAgIHZhciBzZXQgPSBuZXcgX1NldCgpO1xuICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgb3duS2V5c18xID0gb3duS2V5czsgX2kgPCBvd25LZXlzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IG93bktleXNfMVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIGhhc0tleSA9IHNldC5oYXMoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0tleSkge1xuICAgICAgICAgICAgICAgICAgICBzZXQuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgcGFyZW50S2V5c18xID0gcGFyZW50S2V5czsgX2EgPCBwYXJlbnRLZXlzXzEubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHBhcmVudEtleXNfMVtfYV07XG4gICAgICAgICAgICAgICAgdmFyIGhhc0tleSA9IHNldC5oYXMoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0tleSkge1xuICAgICAgICAgICAgICAgICAgICBzZXQuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS43LjEgT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlvd25tZXRhZGF0YWtleXNcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICAgICAgdmFyIGtleXNPYmogPSBtZXRhZGF0YU1hcC5rZXlzKCk7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBHZXRJdGVyYXRvcihrZXlzT2JqKTtcbiAgICAgICAgICAgIHZhciBrID0gMDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpO1xuICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzLmxlbmd0aCA9IGs7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gSXRlcmF0b3JWYWx1ZShuZXh0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzW2tdID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA2IEVDTUFTY3JpcHQgRGF0YSBUeXAwZXMgYW5kIFZhbHVlc1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWRhdGEtdHlwZXMtYW5kLXZhbHVlc1xuICAgICAgICBmdW5jdGlvbiBUeXBlKHgpIHtcbiAgICAgICAgICAgIGlmICh4ID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiAxIC8qIE51bGwgKi87XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOiByZXR1cm4gMCAvKiBVbmRlZmluZWQgKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjogcmV0dXJuIDIgLyogQm9vbGVhbiAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHJldHVybiAzIC8qIFN0cmluZyAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3ltYm9sXCI6IHJldHVybiA0IC8qIFN5bWJvbCAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6IHJldHVybiA1IC8qIE51bWJlciAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6IHJldHVybiB4ID09PSBudWxsID8gMSAvKiBOdWxsICovIDogNiAvKiBPYmplY3QgKi87XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDYgLyogT2JqZWN0ICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS4xIFRoZSBVbmRlZmluZWQgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLXVuZGVmaW5lZC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzVW5kZWZpbmVkKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjIgVGhlIE51bGwgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLW51bGwtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc051bGwoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHggPT09IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjUgVGhlIFN5bWJvbCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtc3ltYm9sLXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNTeW1ib2woeCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS43IFRoZSBPYmplY3QgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc09iamVjdCh4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgPyB4ICE9PSBudWxsIDogdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEgVHlwZSBDb252ZXJzaW9uXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGUtY29udmVyc2lvblxuICAgICAgICAvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbiAgICAgICAgZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQsIFByZWZlcnJlZFR5cGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoVHlwZShpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDAgLyogVW5kZWZpbmVkICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSAxIC8qIE51bGwgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDIgLyogQm9vbGVhbiAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBTdHJpbmcgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDQgLyogU3ltYm9sICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSA1IC8qIE51bWJlciAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhpbnQgPSBQcmVmZXJyZWRUeXBlID09PSAzIC8qIFN0cmluZyAqLyA/IFwic3RyaW5nXCIgOiBQcmVmZXJyZWRUeXBlID09PSA1IC8qIE51bWJlciAqLyA/IFwibnVtYmVyXCIgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgIHZhciBleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIHRvUHJpbWl0aXZlU3ltYm9sKTtcbiAgICAgICAgICAgIGlmIChleG90aWNUb1ByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG4gICAgICAgICAgICAgICAgaWYgKElzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09IFwiZGVmYXVsdFwiID8gXCJudW1iZXJcIiA6IGhpbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4xLjEgT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludCkge1xuICAgICAgICAgICAgaWYgKGhpbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9TdHJpbmdfMSA9IE8udG9TdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodG9TdHJpbmdfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRvU3RyaW5nXzEuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlT2YgPSBPLnZhbHVlT2Y7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodmFsdWVPZikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlT2YuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVPZiA9IE8udmFsdWVPZjtcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh2YWx1ZU9mKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWVPZi5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdG9TdHJpbmdfMiA9IE8udG9TdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodG9TdHJpbmdfMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRvU3RyaW5nXzIuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjIgVG9Cb29sZWFuKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvMjAxNi8jc2VjLXRvYm9vbGVhblxuICAgICAgICBmdW5jdGlvbiBUb0Jvb2xlYW4oYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAhIWFyZ3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4xMiBUb1N0cmluZyhhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9zdHJpbmdcbiAgICAgICAgZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgYXJndW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjE0IFRvUHJvcGVydHlLZXkoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbiAgICAgICAgZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuICAgICAgICAgICAgdmFyIGtleSA9IFRvUHJpbWl0aXZlKGFyZ3VtZW50LCAzIC8qIFN0cmluZyAqLyk7XG4gICAgICAgICAgICBpZiAoSXNTeW1ib2woa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgcmV0dXJuIFRvU3RyaW5nKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yIFRlc3RpbmcgYW5kIENvbXBhcmlzb24gT3BlcmF0aW9uc1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10ZXN0aW5nLWFuZC1jb21wYXJpc29uLW9wZXJhdGlvbnNcbiAgICAgICAgLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxuICAgICAgICBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheVxuICAgICAgICAgICAgICAgID8gQXJyYXkuaXNBcnJheShhcmd1bWVudClcbiAgICAgICAgICAgICAgICA6IGFyZ3VtZW50IGluc3RhbmNlb2YgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgID8gYXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheVxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIuMyBJc0NhbGxhYmxlKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4gICAgICAgIGZ1bmN0aW9uIElzQ2FsbGFibGUoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgYW4gYXBwcm94aW1hdGlvbiBhcyB3ZSBjYW5ub3QgY2hlY2sgZm9yIFtbQ2FsbF1dIGludGVybmFsIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIuNCBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2NvbnN0cnVjdG9yXG4gICAgICAgIGZ1bmN0aW9uIElzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgYW4gYXBwcm94aW1hdGlvbiBhcyB3ZSBjYW5ub3QgY2hlY2sgZm9yIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMi43IElzUHJvcGVydHlLZXkoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzcHJvcGVydHlrZXlcbiAgICAgICAgZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuICAgICAgICAgICAgc3dpdGNoIChUeXBlKGFyZ3VtZW50KSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBTdHJpbmcgKi86IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNCAvKiBTeW1ib2wgKi86IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA3LjMgT3BlcmF0aW9ucyBvbiBPYmplY3RzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9wZXJhdGlvbnMtb24tb2JqZWN0c1xuICAgICAgICAvLyA3LjMuOSBHZXRNZXRob2QoViwgUClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG4gICAgICAgIGZ1bmN0aW9uIEdldE1ldGhvZChWLCBQKSB7XG4gICAgICAgICAgICB2YXIgZnVuYyA9IFZbUF07XG4gICAgICAgICAgICBpZiAoZnVuYyA9PT0gdW5kZWZpbmVkIHx8IGZ1bmMgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghSXNDYWxsYWJsZShmdW5jKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQgT3BlcmF0aW9ucyBvbiBJdGVyYXRvciBPYmplY3RzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9wZXJhdGlvbnMtb24taXRlcmF0b3Itb2JqZWN0c1xuICAgICAgICBmdW5jdGlvbiBHZXRJdGVyYXRvcihvYmopIHtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBHZXRNZXRob2Qob2JqLCBpdGVyYXRvclN5bWJvbCk7XG4gICAgICAgICAgICBpZiAoIUlzQ2FsbGFibGUobWV0aG9kKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7IC8vIGZyb20gQ2FsbFxuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gbWV0aG9kLmNhbGwob2JqKTtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QoaXRlcmF0b3IpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQuNCBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8yMDE2LyNzZWMtaXRlcmF0b3J2YWx1ZVxuICAgICAgICBmdW5jdGlvbiBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyUmVzdWx0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNC41IEl0ZXJhdG9yU3RlcChpdGVyYXRvcilcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXRlcmF0b3JzdGVwXG4gICAgICAgIGZ1bmN0aW9uIEl0ZXJhdG9yU3RlcChpdGVyYXRvcikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IGZhbHNlIDogcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yY2xvc2VcbiAgICAgICAgZnVuY3Rpb24gSXRlcmF0b3JDbG9zZShpdGVyYXRvcikge1xuICAgICAgICAgICAgdmFyIGYgPSBpdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChmKVxuICAgICAgICAgICAgICAgIGYuY2FsbChpdGVyYXRvcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gOS4xIE9yZGluYXJ5IE9iamVjdCBJbnRlcm5hbCBNZXRob2RzIGFuZCBJbnRlcm5hbCBTbG90c1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeS1vYmplY3QtaW50ZXJuYWwtbWV0aG9kcy1hbmQtaW50ZXJuYWwtc2xvdHNcbiAgICAgICAgLy8gOS4xLjEuMSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5Z2V0cHJvdG90eXBlb2ZcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKSB7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIE8gIT09IFwiZnVuY3Rpb25cIiB8fCBPID09PSBmdW5jdGlvblByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBUeXBlU2NyaXB0IGRvZXNuJ3Qgc2V0IF9fcHJvdG9fXyBpbiBFUzUsIGFzIGl0J3Mgbm9uLXN0YW5kYXJkLlxuICAgICAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSB0aGUgc3VwZXJjbGFzcyBjb25zdHJ1Y3Rvci4gQ29tcGF0aWJsZSBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgICAgIC8vIG11c3QgZWl0aGVyIHNldCBfX3Byb3RvX18gb24gYSBzdWJjbGFzcyBjb25zdHJ1Y3RvciB0byB0aGUgc3VwZXJjbGFzcyBjb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIC8vIG9yIGVuc3VyZSBlYWNoIGNsYXNzIGhhcyBhIHZhbGlkIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgb24gaXRzIHByb3RvdHlwZSB0aGF0XG4gICAgICAgICAgICAvLyBwb2ludHMgYmFjayB0byB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG5vdCB0aGUgc2FtZSBhcyBGdW5jdGlvbi5bW1Byb3RvdHlwZV1dLCB0aGVuIHRoaXMgaXMgZGVmaW5hdGVseSBpbmhlcml0ZWQuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBjYXNlIHdoZW4gaW4gRVM2IG9yIHdoZW4gdXNpbmcgX19wcm90b19fIGluIGEgY29tcGF0aWJsZSBicm93c2VyLlxuICAgICAgICAgICAgaWYgKHByb3RvICE9PSBmdW5jdGlvblByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBJZiB0aGUgc3VwZXIgcHJvdG90eXBlIGlzIE9iamVjdC5wcm90b3R5cGUsIG51bGwsIG9yIHVuZGVmaW5lZCwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIHZhciBwcm90b3R5cGUgPSBPLnByb3RvdHlwZTtcbiAgICAgICAgICAgIHZhciBwcm90b3R5cGVQcm90byA9IHByb3RvdHlwZSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGVQcm90byA9PSBudWxsIHx8IHByb3RvdHlwZVByb3RvID09PSBPYmplY3QucHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIElmIHRoZSBjb25zdHJ1Y3RvciB3YXMgbm90IGEgZnVuY3Rpb24sIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBwcm90b3R5cGVQcm90by5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc3RydWN0b3IgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHNvbWUga2luZCBvZiBzZWxmLXJlZmVyZW5jZSwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PT0gTylcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgcHJldHR5IGdvb2QgZ3Vlc3MgYXQgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5haXZlIE1hcCBzaGltXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZU1hcFBvbHlmaWxsKCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlU2VudGluZWwgPSB7fTtcbiAgICAgICAgICAgIHZhciBhcnJheVNlbnRpbmVsID0gW107XG4gICAgICAgICAgICB2YXIgTWFwSXRlcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTWFwSXRlcmF0b3Ioa2V5cywgdmFsdWVzLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBrZXlzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLl9rZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3NlbGVjdG9yKHRoaXMuX2tleXNbaW5kZXhdLCB0aGlzLl92YWx1ZXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCArIDEgPj0gdGhpcy5fa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHJlc3VsdCwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcEl0ZXJhdG9yO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTWFwKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGg7IH0sXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpID49IDA7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgPyB0aGlzLl92YWx1ZXNbaW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuX2tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4ICsgMTsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXNbaSAtIDFdID0gdGhpcy5fa2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaSAtIDFdID0gdGhpcy5fdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHRoaXMuX2NhY2hlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0S2V5KTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldFZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRFbnRyeSk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmVudHJpZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZW50cmllcygpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuX2ZpbmQgPSBmdW5jdGlvbiAoa2V5LCBpbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSB0aGlzLl9rZXlzLmluZGV4T2YodGhpcy5fY2FjaGVLZXkgPSBrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZUluZGV4IDwgMCAmJiBpbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVJbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXA7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KGtleSwgXykge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZShfLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEVudHJ5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG5haXZlIFNldCBzaGltXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZVNldFBvbHlmaWxsKCkge1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBTZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcCA9IG5ldyBfTWFwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXQucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5zaXplOyB9LFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLmhhcyh2YWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5zZXQodmFsdWUsIHZhbHVlKSwgdGhpczsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLmRlbGV0ZSh2YWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fbWFwLmNsZWFyKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLmtleXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC52YWx1ZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAuZW50cmllcygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5rZXlzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmtleXMoKTsgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gU2V0O1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuYWl2ZSBXZWFrTWFwIHNoaW1cbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCkge1xuICAgICAgICAgICAgdmFyIFVVSURfU0laRSA9IDE2O1xuICAgICAgICAgICAgdmFyIGtleXMgPSBIYXNoTWFwLmNyZWF0ZSgpO1xuICAgICAgICAgICAgdmFyIHJvb3RLZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcbiAgICAgICAgICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlICE9PSB1bmRlZmluZWQgPyBIYXNoTWFwLmhhcyh0YWJsZSwgdGhpcy5fa2V5KSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuZ2V0KHRhYmxlLCB0aGlzLl9rZXkpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZVt0aGlzLl9rZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IGRlbGV0ZSB0YWJsZVt0aGlzLl9rZXldIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogbm90IGEgcmVhbCBjbGVhciwganVzdCBtYWtlcyB0aGUgcHJldmlvdXMgZGF0YSB1bnJlYWNoYWJsZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBXZWFrTWFwO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIENyZWF0ZVVuaXF1ZUtleSgpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5O1xuICAgICAgICAgICAgICAgIGRvXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IFwiQEBXZWFrTWFwQEBcIiArIENyZWF0ZVVVSUQoKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoSGFzaE1hcC5oYXMoa2V5cywga2V5KSk7XG4gICAgICAgICAgICAgICAga2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCBjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc093bi5jYWxsKHRhcmdldCwgcm9vdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCByb290S2V5LCB7IHZhbHVlOiBIYXNoTWFwLmNyZWF0ZSgpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Jvb3RLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gRmlsbFJhbmRvbUJ5dGVzKGJ1ZmZlciwgc2l6ZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBidWZmZXJbaV0gPSBNYXRoLnJhbmRvbSgpICogMHhmZiB8IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIEdlblJhbmRvbUJ5dGVzKHNpemUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRmlsbFJhbmRvbUJ5dGVzKG5ldyBVaW50OEFycmF5KHNpemUpLCBzaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZpbGxSYW5kb21CeXRlcyhuZXcgQXJyYXkoc2l6ZSksIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVVVJRCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEdlblJhbmRvbUJ5dGVzKFVVSURfU0laRSk7XG4gICAgICAgICAgICAgICAgLy8gbWFyayBhcyByYW5kb20gLSBSRkMgNDEyMiDCpyA0LjRcbiAgICAgICAgICAgICAgICBkYXRhWzZdID0gZGF0YVs2XSAmIDB4NGYgfCAweDQwO1xuICAgICAgICAgICAgICAgIGRhdGFbOF0gPSBkYXRhWzhdICYgMHhiZiB8IDB4ODA7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgVVVJRF9TSVpFOyArK29mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnl0ZSA9IGRhdGFbb2Zmc2V0XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldCA9PT0gNCB8fCBvZmZzZXQgPT09IDYgfHwgb2Zmc2V0ID09PSA4KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiLVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZSA8IDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYnl0ZS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1c2VzIGEgaGV1cmlzdGljIHVzZWQgYnkgdjggYW5kIGNoYWtyYSB0byBmb3JjZSBhbiBvYmplY3QgaW50byBkaWN0aW9uYXJ5IG1vZGUuXG4gICAgICAgIGZ1bmN0aW9uIE1ha2VEaWN0aW9uYXJ5KG9iaikge1xuICAgICAgICAgICAgb2JqLl9fID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZGVsZXRlIG9iai5fXztcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKFJlZmxlY3QgfHwgKFJlZmxlY3QgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNlcmlhbGl6ZSA9IGV4cG9ydHMuZGVzZXJpYWxpemUgPSBleHBvcnRzLlNlcmlhbGl6YWJsZSA9IGV4cG9ydHMuSnNvblByb3BlcnR5ID0gdm9pZCAwO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG52YXIgYXBpTWFwID0gJ2FwaTptYXA6JztcbnZhciBhcGlNYXBTZXJpYWxpemFibGUgPSBhcGlNYXAgKyBcInNlcmlhbGl6YWJsZVwiO1xudmFyIGRlc2lnblR5cGUgPSAnZGVzaWduOnR5cGUnO1xudmFyIGRlc2lnblBhcmFtVHlwZXMgPSAnZGVzaWduOnBhcmFtdHlwZXMnO1xudmFyIFR5cGU7XG4oZnVuY3Rpb24gKFR5cGUpIHtcbiAgICBUeXBlW1wiQXJyYXlcIl0gPSBcImFycmF5XCI7XG4gICAgVHlwZVtcIkJvb2xlYW5cIl0gPSBcImJvb2xlYW5cIjtcbiAgICBUeXBlW1wiRGF0ZVwiXSA9IFwiZGF0ZVwiO1xuICAgIFR5cGVbXCJOdW1iZXJcIl0gPSBcIm51bWJlclwiO1xuICAgIFR5cGVbXCJPYmplY3RcIl0gPSBcIm9iamVjdFwiO1xuICAgIFR5cGVbXCJTdHJpbmdcIl0gPSBcInN0cmluZ1wiO1xufSkoVHlwZSB8fCAoVHlwZSA9IHt9KSk7XG5mdW5jdGlvbiBnZXRCYXNlQ2xhc3NOYW1lcyh0YXJnZXQpIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICB2YXIgYmFzZUNsYXNzID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xuICAgIGlmICghYmFzZUNsYXNzIHx8ICFiYXNlQ2xhc3NbJ25hbWUnXSkge1xuICAgICAgICByZXR1cm4gbmFtZXM7XG4gICAgfVxuICAgIG5hbWVzLnB1c2goYmFzZUNsYXNzWyduYW1lJ10pO1xuICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhuYW1lcywgZ2V0QmFzZUNsYXNzTmFtZXMoYmFzZUNsYXNzKSk7XG59XG5mdW5jdGlvbiBnZXRQcm9wZXJ0eU5hbWVzKGN0b3IpIHtcbiAgICB2YXIgY3RvcldpdGhvdXRDb21tZW50cyA9IGN0b3IudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKiQpL2dtLCAnJyk7XG4gICAgdmFyIGN0b3JPblNpbmdsZUxpbmUgPSBjdG9yV2l0aG91dENvbW1lbnRzLnJlcGxhY2UoL1tcXHJcXHRcXG5cXHZcXGZdL2csICcnKTtcbiAgICB2YXIgY3RvcldpdGhvdXRTdWNjZXNzaXZlV2hpdGVTcGFjZXMgPSBjdG9yT25TaW5nbGVMaW5lLnJlcGxhY2UoLyggKykvZywgJyAnKTtcbiAgICB2YXIgY29uc3RydWN0b3JQYXJhbVBhdHRlcm4gPSAvKD86LiooPzpjb25zdHJ1Y3RvcnxmdW5jdGlvbikuKj8oPz1cXCgpKSg/OlxcKCkoLis/KD89XFwpKSkvbTtcbiAgICB2YXIgcHJvcGVydHlQYXR0ZXJuID0gLyg/OnRoaXNcXC4pKFteXFxuXFxyXFx0XFxmXFx2O10rKShbXFxzO10pL2dtO1xuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gbmV3IE1hcCgpO1xuICAgIHZhciBwYXJhbXNFeGVjQXJyYXkgPSBjb25zdHJ1Y3RvclBhcmFtUGF0dGVybi5leGVjKGN0b3JXaXRob3V0U3VjY2Vzc2l2ZVdoaXRlU3BhY2VzKTtcbiAgICBpZiAoIXBhcmFtc0V4ZWNBcnJheSB8fCAhcGFyYW1zRXhlY0FycmF5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJvcGVydHlOYW1lcztcbiAgICB9XG4gICAgdmFyIHBhcmFtcyA9IHBhcmFtc0V4ZWNBcnJheVsxXS5yZXBsYWNlKC8gL2csICcnKS5zcGxpdCgnLCcpO1xuICAgIHZhciBtYXRjaDtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1hdGNoUmVzdWx0ID0gbWF0Y2hbMV0ucmVwbGFjZSgvIC9nLCAnJykuc3BsaXQoJz0nKTtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyYW1zLmZpbmRJbmRleChmdW5jdGlvbiAocGFyYW0pIHsgcmV0dXJuIHBhcmFtID09PSBtYXRjaFJlc3VsdFsxXTsgfSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWVzLnNldChpbmRleCwgbWF0Y2hSZXN1bHRbMF0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoKG1hdGNoID0gcHJvcGVydHlQYXR0ZXJuLmV4ZWMoY3RvcldpdGhvdXRTdWNjZXNzaXZlV2hpdGVTcGFjZXMpKSkge1xuICAgICAgICBfbG9vcF8xKCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWVzO1xufVxuZnVuY3Rpb24gSnNvblByb3BlcnR5KGFyZ3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5LCBpbmRleCkge1xuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgJiYgdGFyZ2V0Wydwcm90b3R5cGUnXSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBSZWZsZWN0LmdldE1ldGFkYXRhKGRlc2lnblBhcmFtVHlwZXMsIHRhcmdldClbaW5kZXhdO1xuICAgICAgICAgICAgdmFyIGtleXMgPSBnZXRQcm9wZXJ0eU5hbWVzKHRhcmdldFsncHJvdG90eXBlJ10uY29uc3RydWN0b3IpO1xuICAgICAgICAgICAga2V5ID0ga2V5cy5nZXQoaW5kZXgpO1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Wydwcm90b3R5cGUnXTtcbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoZGVzaWduVHlwZSwgdHlwZSwgdGFyZ2V0LCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXAgPSB7fTtcbiAgICAgICAgdmFyIHRhcmdldE5hbWUgPSB0YXJnZXQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgdmFyIGFwaU1hcFRhcmdldE5hbWUgPSBcIlwiICsgYXBpTWFwICsgdGFyZ2V0TmFtZTtcbiAgICAgICAgaWYgKFJlZmxlY3QuaGFzTWV0YWRhdGEoYXBpTWFwVGFyZ2V0TmFtZSwgdGFyZ2V0KSkge1xuICAgICAgICAgICAgbWFwID0gUmVmbGVjdC5nZXRNZXRhZGF0YShhcGlNYXBUYXJnZXROYW1lLCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIG1hcFtrZXldID0gZ2V0SnNvblByb3BlcnR5VmFsdWUoa2V5LCBhcmdzKTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShhcGlNYXBUYXJnZXROYW1lLCBtYXAsIHRhcmdldCk7XG4gICAgfTtcbn1cbmV4cG9ydHMuSnNvblByb3BlcnR5ID0gSnNvblByb3BlcnR5O1xuZnVuY3Rpb24gU2VyaWFsaXphYmxlKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBiYXNlQ2xhc3NOYW1lcyA9IGdldEJhc2VDbGFzc05hbWVzKHRhcmdldCk7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoYXBpTWFwU2VyaWFsaXphYmxlLCBiYXNlQ2xhc3NOYW1lcywgdGFyZ2V0KTtcbiAgICB9O1xufVxuZXhwb3J0cy5TZXJpYWxpemFibGUgPSBTZXJpYWxpemFibGU7XG5mdW5jdGlvbiBnZXRCYXNlQ2xhc3NNYXBzKGJhc2VDbGFzc05hbWVzLCBpbnN0YW5jZSkge1xuICAgIHZhciBiYXNlQ2xhc3NNYXBzID0ge307XG4gICAgYmFzZUNsYXNzTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoYmFzZUNsYXNzTmFtZSkge1xuICAgICAgICBiYXNlQ2xhc3NNYXBzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGJhc2VDbGFzc01hcHMpLCBSZWZsZWN0LmdldE1ldGFkYXRhKFwiXCIgKyBhcGlNYXAgKyBiYXNlQ2xhc3NOYW1lLCBpbnN0YW5jZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBiYXNlQ2xhc3NNYXBzO1xufVxuZnVuY3Rpb24gZGVzZXJpYWxpemUoanNvbiwgdHlwZSkge1xuICAgIGlmIChbbnVsbCwgdW5kZWZpbmVkXS5pbmNsdWRlcyhqc29uKSkge1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY2FzdFNpbXBsZURhdGEodHlwZW9mIGpzb24sIGpzb24pO1xuICAgIH1cbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgdHlwZSgpO1xuICAgIHZhciBpbnN0YW5jZU5hbWUgPSBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHZhciBiYXNlQ2xhc3NOYW1lcyA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoYXBpTWFwU2VyaWFsaXphYmxlLCB0eXBlKTtcbiAgICB2YXIgYXBpTWFwSW5zdGFuY2VOYW1lID0gXCJcIiArIGFwaU1hcCArIGluc3RhbmNlTmFtZTtcbiAgICB2YXIgaGFzTWFwID0gUmVmbGVjdC5oYXNNZXRhZGF0YShhcGlNYXBJbnN0YW5jZU5hbWUsIGluc3RhbmNlKTtcbiAgICB2YXIgaW5zdGFuY2VNYXAgPSB7fTtcbiAgICBpZiAoIWhhc01hcCAmJiAoIWJhc2VDbGFzc05hbWVzIHx8ICFiYXNlQ2xhc3NOYW1lcy5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgaW5zdGFuY2VNYXAgPSBSZWZsZWN0LmdldE1ldGFkYXRhKGFwaU1hcEluc3RhbmNlTmFtZSwgaW5zdGFuY2UpO1xuICAgIGlmIChiYXNlQ2xhc3NOYW1lcyAmJiBiYXNlQ2xhc3NOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgaW5zdGFuY2VNYXAgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5zdGFuY2VNYXApLCBnZXRCYXNlQ2xhc3NNYXBzKGJhc2VDbGFzc05hbWVzLCBpbnN0YW5jZSkpO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhpbnN0YW5jZU1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IGNvbnZlcnREYXRhVG9Qcm9wZXJ0eShpbnN0YW5jZSwga2V5LCBpbnN0YW5jZU1hcFtrZXldLCBqc29uKTtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW2tleV0gPSBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbmV4cG9ydHMuZGVzZXJpYWxpemUgPSBkZXNlcmlhbGl6ZTtcbmZ1bmN0aW9uIHNlcmlhbGl6ZShpbnN0YW5jZSwgcmVtb3ZlVW5kZWZpbmVkKSB7XG4gICAgaWYgKHJlbW92ZVVuZGVmaW5lZCA9PT0gdm9pZCAwKSB7IHJlbW92ZVVuZGVmaW5lZCA9IHRydWU7IH1cbiAgICBpZiAoW3VuZGVmaW5lZCwgbnVsbF0uaW5jbHVkZXMoaW5zdGFuY2UpIHx8IHR5cGVvZiBpbnN0YW5jZSAhPT0gVHlwZS5PYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICB2YXIgaW5zdGFuY2VOYW1lID0gaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZTtcbiAgICB2YXIgYXBpTWFwSW5zdGFuY2VOYW1lID0gXCJcIiArIGFwaU1hcCArIGluc3RhbmNlTmFtZTtcbiAgICB2YXIgYmFzZUNsYXNzTmFtZXMgPSBSZWZsZWN0LmdldE1ldGFkYXRhKGFwaU1hcFNlcmlhbGl6YWJsZSwgaW5zdGFuY2UuY29uc3RydWN0b3IpO1xuICAgIHZhciBoYXNCYXNlQ2xhc3NlcyA9IGJhc2VDbGFzc05hbWVzICYmIGJhc2VDbGFzc05hbWVzLmxlbmd0aDtcbiAgICB2YXIgaGFzTWFwID0gUmVmbGVjdC5oYXNNZXRhZGF0YShhcGlNYXBJbnN0YW5jZU5hbWUsIGluc3RhbmNlKTtcbiAgICB2YXIgaW5zdGFuY2VNYXAgPSB7fTtcbiAgICBpZiAoIWhhc01hcCAmJiAhaGFzQmFzZUNsYXNzZXMpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBpbnN0YW5jZU1hcCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoYXBpTWFwSW5zdGFuY2VOYW1lLCBpbnN0YW5jZSk7XG4gICAgaWYgKGhhc0Jhc2VDbGFzc2VzKSB7XG4gICAgICAgIGluc3RhbmNlTWFwID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGluc3RhbmNlTWFwKSwgZ2V0QmFzZUNsYXNzTWFwcyhiYXNlQ2xhc3NOYW1lcywgaW5zdGFuY2UpKTtcbiAgICB9XG4gICAgdmFyIGpzb24gPSB7fTtcbiAgICB2YXIgaW5zdGFuY2VLZXlzID0gT2JqZWN0LmtleXMoaW5zdGFuY2UpO1xuICAgIE9iamVjdC5rZXlzKGluc3RhbmNlTWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIG9uU2VyaWFsaXplID0gaW5zdGFuY2VNYXBba2V5XVsnb25TZXJpYWxpemUnXTtcbiAgICAgICAgaWYgKGluc3RhbmNlS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICB2YXIgZGF0YV8xID0gY29udmVydFByb3BlcnR5VG9EYXRhKGluc3RhbmNlLCBrZXksIGluc3RhbmNlTWFwW2tleV0sIHJlbW92ZVVuZGVmaW5lZCk7XG4gICAgICAgICAgICBpZiAob25TZXJpYWxpemUpIHtcbiAgICAgICAgICAgICAgICBkYXRhXzEgPSBvblNlcmlhbGl6ZShkYXRhXzEsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnN0YW5jZU1hcFtrZXldWyduYW1lcyddKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VNYXBba2V5XVsnbmFtZXMnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVtb3ZlVW5kZWZpbmVkIHx8IChyZW1vdmVVbmRlZmluZWQgJiYgZGF0YV8xW25hbWVdICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uW25hbWVdID0gZGF0YV8xW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlbW92ZVVuZGVmaW5lZCB8fCAocmVtb3ZlVW5kZWZpbmVkICYmIGRhdGFfMSAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICBqc29uW2luc3RhbmNlTWFwW2tleV1bJ25hbWUnXV0gPSBkYXRhXzE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGpzb247XG59XG5leHBvcnRzLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZTtcbmZ1bmN0aW9uIGNvbnZlcnRQcm9wZXJ0eVRvRGF0YShpbnN0YW5jZSwga2V5LCBtZXRhZGF0YSwgcmVtb3ZlVW5kZWZpbmVkKSB7XG4gICAgdmFyIHByb3BlcnR5ID0gaW5zdGFuY2Vba2V5XTtcbiAgICB2YXIgdHlwZSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoZGVzaWduVHlwZSwgaW5zdGFuY2UsIGtleSk7XG4gICAgdmFyIGlzQXJyYXkgPSB0eXBlLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gVHlwZS5BcnJheTtcbiAgICB2YXIgcHJlZGljYXRlID0gbWV0YWRhdGFbJ3ByZWRpY2F0ZSddO1xuICAgIHZhciBwcm9wZXJ0eVR5cGUgPSBtZXRhZGF0YVsndHlwZSddIHx8IHR5cGU7XG4gICAgdmFyIGlzU2VyaWFsaXphYmxlUHJvcGVydHkgPSBpc1NlcmlhbGl6YWJsZShwcm9wZXJ0eVR5cGUpO1xuICAgIGlmIChwcm9wZXJ0eSAmJiAoaXNTZXJpYWxpemFibGVQcm9wZXJ0eSB8fCBwcmVkaWNhdGUpKSB7XG4gICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICB2YXIgYXJyYXlfMSA9IFtdO1xuICAgICAgICAgICAgcHJvcGVydHkuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGFycmF5XzEucHVzaChzZXJpYWxpemUoZCwgcmVtb3ZlVW5kZWZpbmVkKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheV8xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRhZGF0YVsnaXNEaWN0aW9uYXJ5J10pIHtcbiAgICAgICAgICAgIHZhciBvYmpfMSA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydHkpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICBvYmpfMVtrXSA9IHNlcmlhbGl6ZShwcm9wZXJ0eVtrXSwgcmVtb3ZlVW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9ial8xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJpYWxpemUocHJvcGVydHksIHJlbW92ZVVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eVR5cGUubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBUeXBlLkRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5ID8gcHJvcGVydHkudG9JU09TdHJpbmcoKSA6IHByb3BlcnR5O1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG59XG5mdW5jdGlvbiBjb252ZXJ0RGF0YVRvUHJvcGVydHkoaW5zdGFuY2UsIGtleSwgbWV0YWRhdGEsIGpzb24pIHtcbiAgICB2YXIgZGF0YTtcbiAgICBpZiAoW251bGwsIHVuZGVmaW5lZF0uaW5jbHVkZXMoanNvbikpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIGlmIChtZXRhZGF0YVsnbmFtZXMnXSkge1xuICAgICAgICB2YXIgb2JqZWN0XzEgPSB7fTtcbiAgICAgICAgbWV0YWRhdGFbJ25hbWVzJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gKG9iamVjdF8xW25hbWVdID0ganNvbltuYW1lXSk7IH0pO1xuICAgICAgICBkYXRhID0gb2JqZWN0XzE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkYXRhID0ganNvblttZXRhZGF0YVsnbmFtZSddXTtcbiAgICB9XG4gICAgaWYgKFtudWxsLCB1bmRlZmluZWRdLmluY2x1ZGVzKGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB2YXIgdHlwZSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoZGVzaWduVHlwZSwgaW5zdGFuY2UsIGtleSk7XG4gICAgdmFyIGlzQXJyYXkgPSB0eXBlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gVHlwZS5BcnJheTtcbiAgICB2YXIgaXNEaWN0aW9uYXJ5ID0gbWV0YWRhdGFbJ2lzRGljdGlvbmFyeSddO1xuICAgIHZhciBwcmVkaWNhdGUgPSBtZXRhZGF0YVsncHJlZGljYXRlJ107XG4gICAgdmFyIG9uRGVzZXJpYWxpemUgPSBtZXRhZGF0YVsnb25EZXNlcmlhbGl6ZSddO1xuICAgIHZhciBwb3N0RGVzZXJpYWxpemUgPSBtZXRhZGF0YVsncG9zdERlc2VyaWFsaXplJ107XG4gICAgdmFyIHByb3BlcnR5VHlwZSA9IG1ldGFkYXRhWyd0eXBlJ10gfHwgdHlwZTtcbiAgICB2YXIgaXNTZXJpYWxpemFibGVQcm9wZXJ0eSA9IGlzU2VyaWFsaXphYmxlKHByb3BlcnR5VHlwZSk7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAob25EZXNlcmlhbGl6ZSkge1xuICAgICAgICBkYXRhID0gb25EZXNlcmlhbGl6ZShkYXRhLCBpbnN0YW5jZSk7XG4gICAgfVxuICAgIGlmICghaXNTZXJpYWxpemFibGVQcm9wZXJ0eSAmJiAhcHJlZGljYXRlKSB7XG4gICAgICAgIHJlc3VsdCA9IGNhc3RTaW1wbGVEYXRhKHByb3BlcnR5VHlwZS5uYW1lLCBkYXRhKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheSkge1xuICAgICAgICB2YXIgYXJyYXlfMiA9IFtdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSArIFwiIGlzIG5vdCBhbiBhcnJheS5cIik7XG4gICAgICAgICAgICByZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHByZWRpY2F0ZShkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyYXlfMi5wdXNoKGRlc2VyaWFsaXplKGQsIHByb3BlcnR5VHlwZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXN1bHQgPSBhcnJheV8yO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzRGljdGlvbmFyeSkge1xuICAgICAgICB2YXIgb2JqXzIgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSBUeXBlLk9iamVjdCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhICsgXCIgaXMgbm90IGFuIG9iamVjdC5cIik7XG4gICAgICAgICAgICByZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZWRpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcmVkaWNhdGUoZGF0YVtrXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9ial8yW2tdID0gZGVzZXJpYWxpemUoZGF0YVtrXSwgcHJvcGVydHlUeXBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzdWx0ID0gb2JqXzI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByb3BlcnR5VHlwZSA9IHByZWRpY2F0ZSA/IHByZWRpY2F0ZShkYXRhKSA6IHByb3BlcnR5VHlwZTtcbiAgICAgICAgcmVzdWx0ID0gZGVzZXJpYWxpemUoZGF0YSwgcHJvcGVydHlUeXBlKTtcbiAgICB9XG4gICAgaWYgKHBvc3REZXNlcmlhbGl6ZSkge1xuICAgICAgICByZXN1bHQgPSBwb3N0RGVzZXJpYWxpemUocmVzdWx0LCBpbnN0YW5jZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBpc1NlcmlhbGl6YWJsZSh0eXBlKSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoYXBpTWFwU2VyaWFsaXphYmxlLCB0eXBlKTtcbn1cbmZ1bmN0aW9uIGdldEpzb25Qcm9wZXJ0eVZhbHVlKGtleSwgYXJncykge1xuICAgIGlmICghYXJncykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZToga2V5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBvbkRlc2VyaWFsaXplOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBvblNlcmlhbGl6ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcG9zdERlc2VyaWFsaXplOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBpc0RpY3Rpb25hcnk6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBtZXRhZGF0YTtcbiAgICBpZiAodHlwZW9mIGFyZ3MgPT09IFR5cGUuU3RyaW5nKSB7XG4gICAgICAgIG1ldGFkYXRhID0geyBuYW1lOiBhcmdzIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZ3NbJ25hbWUnXSkge1xuICAgICAgICBtZXRhZGF0YSA9IHsgbmFtZTogYXJnc1snbmFtZSddIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZ3NbJ25hbWVzJ10gJiYgYXJnc1snbmFtZXMnXS5sZW5ndGgpIHtcbiAgICAgICAgbWV0YWRhdGEgPSB7IG5hbWVzOiBhcmdzWyduYW1lcyddIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtZXRhZGF0YSA9IHsgbmFtZToga2V5LnRvU3RyaW5nKCkgfTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3NbJ3ByZWRpY2F0ZSddXG4gICAgICAgID8gX19hc3NpZ24oX19hc3NpZ24oe30sIG1ldGFkYXRhKSwgeyBwcmVkaWNhdGU6IGFyZ3NbJ3ByZWRpY2F0ZSddLCBvbkRlc2VyaWFsaXplOiBhcmdzWydvbkRlc2VyaWFsaXplJ10sIG9uU2VyaWFsaXplOiBhcmdzWydvblNlcmlhbGl6ZSddLCBwb3N0RGVzZXJpYWxpemU6IGFyZ3NbJ3Bvc3REZXNlcmlhbGl6ZSddLCBpc0RpY3Rpb25hcnk6ICEhYXJnc1snaXNEaWN0aW9uYXJ5J10gfSkgOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbWV0YWRhdGEpLCB7IHR5cGU6IGFyZ3NbJ3R5cGUnXSwgb25EZXNlcmlhbGl6ZTogYXJnc1snb25EZXNlcmlhbGl6ZSddLCBvblNlcmlhbGl6ZTogYXJnc1snb25TZXJpYWxpemUnXSwgcG9zdERlc2VyaWFsaXplOiBhcmdzWydwb3N0RGVzZXJpYWxpemUnXSwgaXNEaWN0aW9uYXJ5OiAhIWFyZ3NbJ2lzRGljdGlvbmFyeSddIH0pO1xufVxuZnVuY3Rpb24gY2FzdFNpbXBsZURhdGEodHlwZSwgZGF0YSkge1xuICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCh0eXBlb2YgZGF0YSkudG9Mb3dlckNhc2UoKSA9PT0gdHlwZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgVHlwZS5TdHJpbmc6XG4gICAgICAgICAgICByZXR1cm4gZGF0YSA/IGRhdGEudG9TdHJpbmcoKSA6IGRhdGE7XG4gICAgICAgIGNhc2UgVHlwZS5OdW1iZXI6XG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gK2RhdGE7XG4gICAgICAgICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSArIFwiOiBUeXBlIFwiICsgdHlwZW9mIGRhdGEgKyBcIiBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlIFwiICsgdHlwZSArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgY2FzZSBUeXBlLkJvb2xlYW46XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEgKyBcIjogVHlwZSBcIiArIHR5cGVvZiBkYXRhICsgXCIgaXMgbm90IGFzc2lnbmFibGUgdG8gdHlwZSBcIiArIHR5cGUgKyBcIi5cIik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBjYXNlIFR5cGUuRGF0ZTpcbiAgICAgICAgICAgIGlmIChpc05hTihEYXRlLnBhcnNlKGRhdGEpKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSArIFwiOiBUeXBlIFwiICsgdHlwZW9mIGRhdGEgKyBcIiBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlIFwiICsgdHlwZSArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGEpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLypcbiAgICBDb3B5cmlnaHQgMjAyMCBSaWNrIFdleXJhdWNoLFxuXG4gICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UgXG4gICAgd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZVxuICAgIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuXG4gICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSCBcbiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIFxuICAgIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULCBcbiAgICBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBcbiAgICBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgXG4gICAgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBcbiAgICBPRiBUSElTIFNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IHsgQ2FyZCwgQ2FyZFR5cGUgfSBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQgeyBzZXJpYWxpemUsIGRlc2VyaWFsaXplIH0gZnJvbSBcInR5cGVzY3JpcHQtanNvbi1zZXJpYWxpemVyXCI7XG5pbXBvcnQgSmltcCBmcm9tICdqaW1wJztcblxubGV0IGFjdGl2ZUNhcmRzOiBDYXJkW10gPSBbXTtcbmxldCBjdXJyZW50Q2FyZCA9IDA7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByZXZpZXcoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3JykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgaWYgKGNhbnZhcyAmJiBhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0pIHtcbiAgICAgICAgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLmRyYXcoY2FudmFzLCAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uQ2FyZFR5cGVDaGFuZ2VkKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHNlbGVjdEVsZW0gPSBldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgaWYgKHNlbGVjdEVsZW0gJiYgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdKSB7XG4gICAgICAgIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5faGVhZGluZyA9IHNlbGVjdEVsZW0uc2VsZWN0ZWRPcHRpb25zWzBdLnRleHQ7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0ZXh0IGluIHRoZSBIZWFkZXIgaW5wdXQgdG8gbWF0Y2guXG4gICAgICAgICQoJyNjYXJkaGVhZGVyJykudmFsKGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5faGVhZGluZyk7XG5cbiAgICAgICAgaWYgKHNlbGVjdEVsZW0uc2VsZWN0ZWRPcHRpb25zWzBdLnRleHQgPT0gJ1N0cmF0YWdlbScpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdHlwZSA9IENhcmRUeXBlLlN0cmF0YWdlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3RFbGVtLnNlbGVjdGVkT3B0aW9uc1swXS50ZXh0ID09ICdQc3ljaGljIFBvd2VyJykge1xuICAgICAgICAgICAgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl90eXBlID0gQ2FyZFR5cGUuUHN5Y2hpY1Bvd2VyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdEVsZW0uc2VsZWN0ZWRPcHRpb25zWzBdLnRleHQgPT0gJ1RhY3RpY2FsIE9iamVjdGl2ZScpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdHlwZSA9IENhcmRUeXBlLlRhY3RpY2FsT2JqZWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdEVsZW0uc2VsZWN0ZWRPcHRpb25zWzBdLnRleHQgPT0gJ1ByYXllcicpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdHlwZSA9IENhcmRUeXBlLlByYXllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNhcmRVSSgpO1xuICAgICAgICB1cGRhdGVQcmV2aWV3KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkNhcmRTdHlsZUNoYW5nZWQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0RWxlbSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBpZiAoc2VsZWN0RWxlbSAmJiBhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0pIHtcbiAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IHN0eWxlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkhlYWRlckNoYW5nZWQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXRFbGVtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKGlucHV0RWxlbSAmJiBhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0pIHtcbiAgICAgICAgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl9oZWFkaW5nID0gaW5wdXRFbGVtLnZhbHVlO1xuICAgICAgICB1cGRhdGVQcmV2aWV3KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvblRpdGxlQ2hhbmdlZChldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dEVsZW0gPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoaW5wdXRFbGVtICYmIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXSkge1xuICAgICAgICBhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0uX3RpdGxlID0gaW5wdXRFbGVtLnZhbHVlO1xuICAgICAgICB1cGRhdGVQcmV2aWV3KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvblJ1bGVDaGFuZ2VkKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGlucHV0RWxlbSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChpbnB1dEVsZW0gJiYgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdKSB7XG4gICAgICAgIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fcnVsZSA9IGlucHV0RWxlbS52YWx1ZTtcbiAgICAgICAgdXBkYXRlUHJldmlldygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25GbHVmZkNoYW5nZWQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXRFbGVtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKGlucHV0RWxlbSAmJiBhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0pIHtcbiAgICAgICAgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl9mbHVmZiA9IGlucHV0RWxlbS52YWx1ZTtcbiAgICAgICAgdXBkYXRlUHJldmlldygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25WYWx1ZUNoYW5nZWQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXRFbGVtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKGlucHV0RWxlbSAmJiBhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0pIHtcbiAgICAgICAgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl92YWx1ZSA9IGlucHV0RWxlbS52YWx1ZTtcbiAgICAgICAgdXBkYXRlUHJldmlldygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25QcmV2aW91c0NhcmQoKSB7XG4gICAgY3VycmVudENhcmQgPSBNYXRoLm1heChjdXJyZW50Q2FyZCAtIDEsIDApO1xuICAgIHVwZGF0ZUNhcmRVSSgpO1xuICAgIHVwZGF0ZVByZXZpZXcoKTtcbn1cblxuZnVuY3Rpb24gb25OZXh0Q2FyZCgpIHtcbiAgICBjdXJyZW50Q2FyZCA9IE1hdGgubWluKGN1cnJlbnRDYXJkICsgMSwgYWN0aXZlQ2FyZHMubGVuZ3RoIC0gMSk7XG4gICAgdXBkYXRlQ2FyZFVJKCk7XG4gICAgdXBkYXRlUHJldmlldygpO1xufVxuXG5mdW5jdGlvbiBtbVRvSW5jaGVzKG1tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBtbSAvIDI1LjQ7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZSgpIHtcbiAgICBpZiAoYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdKSB7XG4gICAgICAgIGNvbnN0IGNhcmRTaXplTW0gPSBbNjMsIDg4XTtcblxuICAgICAgICBsZXQgZHBpID0gMzAwO1xuICAgICAgICBsZXQgbWFyZ2luTW0gPSAwO1xuICAgICAgICBjb25zdCBvdXRwdXREUElJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXRkcGknKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAob3V0cHV0RFBJSW5wdXQpIGRwaSA9IHBhcnNlSW50KG91dHB1dERQSUlucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0TWFyZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dG1hcmdpbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChvdXRwdXRNYXJnaW4pIG1hcmdpbk1tID0gcGFyc2VJbnQob3V0cHV0TWFyZ2luLnZhbHVlKTtcbiAgICAgICAgLy8gUm91bmQgbWFyZ2luIHVwIHRvIHRoYXQgaXMgYWx3YXlzIGF0IGxlYXN0IHRoZSByZXF1ZXN0ZWQgc2l6ZS5cbiAgICAgICAgbGV0IG1hcmdpblB4ID0gTWF0aC5jZWlsKG1tVG9JbmNoZXMobWFyZ2luTW0pICogZHBpKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIk1hcmdpbiBQeFwiICsgbWFyZ2luUHgpO1xuXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gTWF0aC5yb3VuZChtbVRvSW5jaGVzKGNhcmRTaXplTW1bMF0pICogZHBpKSArIDIgKiBtYXJnaW5QeDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IE1hdGgucm91bmQobW1Ub0luY2hlcyhjYXJkU2l6ZU1tWzFdKSAqIGRwaSkgKyAyICogbWFyZ2luUHg7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNhdmVkIGNhdmFzIHNpemU6IFwiICsgY2FudmFzLndpZHRoICsgXCIsIFwiICsgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLmRyYXcoY2FudmFzLCBtYXJnaW5QeCk7XG5cbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSAnc3RyYXRhZ2VtLnBuZyc7XG4gICAgICAgIGxpbmsuaHJlZiA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgY2FyZDogXCIgKyBjdXJyZW50Q2FyZCArIFwiIE51bSBhY3RpdmUgY2FyZHM6IFwiICsgYWN0aXZlQ2FyZHMubGVuZ3RoKTtcbiAgICAgICAgLy8gUmVmcmVzaCB0aGUgcHJldmlld2VkIGNhcmQuXG4gICAgICAgIHVwZGF0ZUNhcmRVSSgpO1xuICAgICAgICB1cGRhdGVQcmV2aWV3KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKGZpbGVuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN1YnN0cmluZ3MgPSBmaWxlbmFtZS5zcGxpdCgnLicpO1xuICAgIGlmIChzdWJzdHJpbmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIHN1YnN0cmluZ3Nbc3Vic3RyaW5ncy5sZW5ndGggLSAxXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRmlsZVNlbGVjdChldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGZpbGVzID0gaW5wdXQuZmlsZXM7XG5cbiAgICBpZiAoZmlsZXMpIHtcbiAgICAgICAgY3VycmVudENhcmQgPSAwO1xuICAgICAgICBhY3RpdmVDYXJkcy5sZW5ndGggPSAwO1xuXG4gICAgICAgIC8vIGZpbGVzIGlzIGEgRmlsZUxpc3Qgb2YgRmlsZSBvYmplY3RzLiBMaXN0IHNvbWUgcHJvcGVydGllcy5cbiAgICAgICAgbGV0IG91dHB1dCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBmIG9mIGZpbGVzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVFeHQgPSBnZXRGaWxlRXh0ZW5zaW9uKGYubmFtZSk7XG4gICAgICAgICAgICBpZiAoZmlsZUV4dCA9PT0gXCJjc3ZcIiB8fCBmaWxlRXh0ID09PSAndHN2Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGxpc3Qgb2YgY2FyZHMsIG1ha2UgdGhlIGZpcnN0IGNhcmQgYWN0aXZlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICBpZiAocmUgJiYgcmUucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc291cmNlRGF0YSA9IHJlLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCBlbmNvZGluZyB0YWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzdmRhdGFzdGFydCA9IHNvdXJjZURhdGEudG9TdHJpbmcoKS5pbmRleE9mKCcsJykgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3N2ZGF0YSA9IHdpbmRvdy5hdG9iKHNvdXJjZURhdGEudG9TdHJpbmcoKS5zbGljZShjc3ZkYXRhc3RhcnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzdmFycmF5ID0gY3N2ZGF0YS5zcGxpdCgvXFxyP1xcbi9nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRUeXBlID0gQ2FyZFR5cGUuU3RyYXRhZ2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyBvZiBjc3ZhcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IGMuc3BsaXQoZmlsZUV4dCA9PT0gJ2NzdicgPyAnLCcgOiAnXFx0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmllbGRbMF0gLT4gdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGU6IFwiICsgZmllbGRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkc1swXS50b1VwcGVyQ2FzZSgpID09IFwiU1RSQVRBR0VNXCIpIGNhcmRUeXBlID0gQ2FyZFR5cGUuU3RyYXRhZ2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZHNbMF0udG9VcHBlckNhc2UoKSA9PT0gXCJQU1lDSElDIFBPV0VSXCIpIGNhcmRUeXBlID0gQ2FyZFR5cGUuUHN5Y2hpY1Bvd2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZHNbMF0udG9VcHBlckNhc2UoKSA9PT0gXCJUQUNUSUNBTCBPQkpFQ1RJVkVcIikgY2FyZFR5cGUgPSBDYXJkVHlwZS5UYWN0aWNhbE9iamVjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRzWzBdLnRvVXBwZXJDYXNlKCkgPT09IFwiUFJBWUVSXCIpIGNhcmRUeXBlID0gQ2FyZFR5cGUuUHJheWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVua25vd24gY2FyZCB0eXBlIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9PRDogSW1wcm92ZSBlcnJvciBoYW5kbGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlcnJvclRleHQnKS5odG1sKCdVbmtub3duIGNhcmQgdHlwZTogJyArIGZpZWxkc1swXSArICcuICBTdXBwb3J0ZWQgY2FyZCB0eXBlcyBhcmUgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NUUkFUQUdFTSwgUFNZQ0hJQyBQT1dFUiwgUFJBWUVSIGFuZCBUQUNUSUNBTCBPQkpFQ1RJVkUuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZXJyb3JEaWFsb2cnKS5tb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogcGFyc2UgYmFzZWQgb24gY2FyZCB0eXBlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZFR5cGUgPT0gQ2FyZFR5cGUuUHJheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBuZXcgQ2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuX3R5cGUgPSBjYXJkVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLl92YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5fdGl0bGUgPSBmaWVsZHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5faGVhZGluZyA9IGZpZWxkc1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLl9mbHVmZiA9IGZpZWxkc1szXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLl9ydWxlID0gZmllbGRzWzRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCA9PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBuZXcgQ2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuX3R5cGUgPSBjYXJkVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLl92YWx1ZSA9IGZpZWxkc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLl90aXRsZSA9IGZpZWxkc1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLl9oZWFkaW5nID0gZmllbGRzWzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuX2ZsdWZmID0gZmllbGRzWzRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuX3J1bGUgPSBmaWVsZHNbNV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2FyZHMucHVzaChjYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTnVtIGFjdGl2ZSBjYXJkczogXCIgKyBhY3RpdmVDYXJkcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FyZFVJKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjZXJyb3JUZXh0JykuaHRtbCgnU3RyYXRhR2VuIG9ubHkgc3VwcG9ydHMgLmNzdiBmaWxlcy4gIFNlbGVjdGVkIGZpbGUgaXMgYSBcXCcnICsgZmlsZUV4dCArIFwiXFwnIGZpbGUuXCIpO1xuICAgICAgICAgICAgICAgICQoJyNlcnJvckRpYWxvZycpLm1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uU2F2ZUNhcmQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RDYXJkJywgSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXplKGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXSkpKTtcbn1cblxuZnVuY3Rpb24gb25Mb2FkQ2FyZCgpIHtcbiAgICBsZXQgbGFzdENhcmRTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdENhcmQnKTtcbiAgICBpZiAobGFzdENhcmRTdHJpbmcpIHtcbiAgICAgICAgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdID0gZGVzZXJpYWxpemU8Q2FyZD4oSlNPTi5wYXJzZShsYXN0Q2FyZFN0cmluZyksIENhcmQpO1xuICAgICAgICB1cGRhdGVDYXJkVUkoKTtcbiAgICAgICAgdXBkYXRlUHJldmlldygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJkIG5vdCBsb2FkZWQuXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25CYWNrZ3JvdW5kTG9hZChldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGZpbGVzID0gaW5wdXQuZmlsZXM7XG5cbiAgICBpZiAoZmlsZXMgJiYgZmlsZXNbMF0pIHtcbiAgICAgICAgLy9KaW1wLnJlYWQoZmlsZXNbMF0ubmFtZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkJnT3BhY2l0eUNoYW5nZWQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXRFbGVtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKGlucHV0RWxlbSkge1xuICAgICAgICBpbnB1dEVsZW0udmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkJnU2F0dXJhdGlvbkNoYW5nZWQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXRFbGVtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKGlucHV0RWxlbSkge1xuICAgICAgICBpbnB1dEVsZW0udmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDYXJkVUkoKSB7XG4gICAgaWYgKGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXSkge1xuICAgICAgICAkKCcjY2FyZHR5cGUnKS52YWwoYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl90eXBlLnRvU3RyaW5nKCkpO1xuICAgICAgICAkKCcjY2FyZGhlYWRlcicpLnZhbChhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0uX2hlYWRpbmcpO1xuICAgICAgICAkKCcjY2FyZHRpdGxlJykudmFsKGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdGl0bGUpO1xuICAgICAgICAkKCcjY2FyZHJ1bGUnKS52YWwoYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl9ydWxlKTtcbiAgICAgICAgJCgnI2NhcmRmbHVmZicpLnZhbChhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0uX2ZsdWZmKTtcblxuICAgICAgICBpZiAoYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl90eXBlID09PSBDYXJkVHlwZS5TdHJhdGFnZW0pIHtcbiAgICAgICAgICAgICQoJyNjYXJkdmFsdWUnKS5hdHRyKHtcIm1pblwiOiAxLCBcIm1heFwiOiAzfSk7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl92YWx1ZSkgPiAzKSBhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0uX3ZhbHVlID0gXCIzXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0uX3ZhbHVlKSA8IDEpIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdmFsdWUgPSBcIjFcIjtcblxuICAgICAgICAgICAgJCgnI2NhcmR2YWx1ZWxhYmVsJykuaHRtbChcIkNvbW1hbmQgUG9pbnRzXCIpO1xuICAgICAgICAgICAgJCgnI2NhcmR2YWx1ZWNvbnRyb2wnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl90eXBlID09PSBDYXJkVHlwZS5Qc3ljaGljUG93ZXIpIHtcbiAgICAgICAgICAgICQoJyNjYXJkdmFsdWUnKS5hdHRyKHtcIm1pblwiOiAyLCBcIm1heFwiOiAxMn0pO1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdmFsdWUpID4gMTIpIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdmFsdWUgPSBcIjEyXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0uX3ZhbHVlKSA8IDIpIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdmFsdWUgPSBcIjJcIjtcblxuICAgICAgICAgICAgJCgnI2NhcmR2YWx1ZWxhYmVsJykuaHRtbChcIldhcnAgQ2hhcmdlXCIpO1xuICAgICAgICAgICAgJCgnI2NhcmR2YWx1ZWNvbnRyb2wnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl90eXBlID09PSBDYXJkVHlwZS5UYWN0aWNhbE9iamVjdGl2ZSkge1xuICAgICAgICAgICAgJCgnI2NhcmR2YWx1ZScpLmF0dHIoe1wibWluXCI6IDExLCBcIm1heFwiOiA2Nn0pO1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdmFsdWUpID4gNjYpIGFjdGl2ZUNhcmRzW2N1cnJlbnRDYXJkXS5fdmFsdWUgPSBcIjY2XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0uX3ZhbHVlKSA8IDExKSBhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0uX3ZhbHVlID0gXCIxMVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKCcjY2FyZHZhbHVlbGFiZWwnKS5odG1sKFwiT2JqZWN0aXZlIChENjYpXCIpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgJCgnI2NhcmR2YWx1ZWNvbnRyb2wnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdLl90eXBlID09PSBDYXJkVHlwZS5QcmF5ZXIpIHtcbiAgICAgICAgICAgICQoJyNjYXJkdmFsdWVjb250cm9sJykuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnI2NhcmR2YWx1ZScpLnZhbChhY3RpdmVDYXJkc1tjdXJyZW50Q2FyZF0uX3ZhbHVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBsdW1iQ2FsbGJhY2tzKCkge1xuXG4gICAgJCgnI3ByZXZpb3VzY2FyZCcpLmNsaWNrKG9uUHJldmlvdXNDYXJkKTtcbiAgICAkKCcjbmV4dGNhcmQnKS5jbGljayhvbk5leHRDYXJkKTtcblxuICAgICQoJyNjYXJkdHlwZScpLm9uKCdjaGFuZ2UnLCBvbkNhcmRUeXBlQ2hhbmdlZCk7XG4gICAgJCgnI2NhcmRzdHlsZScpLm9uKCdjaGFuZ2UnLCBvbkNhcmRTdHlsZUNoYW5nZWQpO1xuICAgICQoJyNjYXJkaGVhZGVyJykub24oJ2lucHV0Jywgb25IZWFkZXJDaGFuZ2VkKTtcbiAgICAkKCcjY2FyZHRpdGxlJykub24oJ2lucHV0Jywgb25UaXRsZUNoYW5nZWQpO1xuICAgICQoJyNjYXJkcnVsZScpLm9uKCdpbnB1dCcsIG9uUnVsZUNoYW5nZWQpO1xuICAgICQoJyNjYXJkZmx1ZmYnKS5vbignaW5wdXQnLCBvbkZsdWZmQ2hhbmdlZCk7XG4gICAgJCgnI2NhcmR2YWx1ZScpLm9uKCdpbnB1dCcsIG9uVmFsdWVDaGFuZ2VkKTtcbiAgICAkKCcjY3JlYXRlY2FyZCcpLmNsaWNrKGhhbmRsZUNyZWF0ZSk7XG4gICAgJCgnI2RhdGFjYXJkZmlsZScpLm9uKCdjaGFuZ2UnLCBoYW5kbGVGaWxlU2VsZWN0KTtcblxuICAgICQoJyNiYWNrZ3JvdW5kZmlsZScpLm9uKCdjaGFuZ2UnLCBvbkJhY2tncm91bmRMb2FkKTtcbiAgICAkKCcjYmdvcGFjaXR5Jykub24oJ2lucHV0Jywgb25CZ09wYWNpdHlDaGFuZ2VkKTtcbiAgICAkKCcjYmdzYXR1cmF0aW9uJykub24oJ2lucHV0Jywgb25CZ1NhdHVyYXRpb25DaGFuZ2VkKTtcblxuICAgICQoJyNzYXZlY2FyZCcpLmNsaWNrKG9uU2F2ZUNhcmQpO1xuICAgICQoJyNsb2FkY2FyZCcpLmNsaWNrKG9uTG9hZENhcmQpO1xufVxuXG5jb25zb2xlLmxvZyhcIlJlbG9hZGluZyB3ZWIgcGFnZS5cIik7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuaWYgKGNhbnZhcykge1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICAgIGlmIChhY3RpdmVDYXJkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY3VycmVudENhcmQgPSAwO1xuICAgICAgICAgICAgYWN0aXZlQ2FyZHNbY3VycmVudENhcmRdID0gbmV3IENhcmQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxucGx1bWJDYWxsYmFja3MoKTtcblxudXBkYXRlUHJldmlldygpO1xuXG4iLCIvKlxuICAgIENvcHlyaWdodCAyMDIwIFJpY2sgV2V5cmF1Y2gsXG5cbiAgICBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSBcbiAgICB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlXG4gICAgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIIFxuICAgIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgXG4gICAgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsIFxuICAgIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIFxuICAgIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBcbiAgICBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIFxuICAgIE9GIFRISVMgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgeyBKc29uUHJvcGVydHksIFNlcmlhbGl6YWJsZSB9IGZyb20gJ3R5cGVzY3JpcHQtanNvbi1zZXJpYWxpemVyJztcblxuZXhwb3J0IGVudW0gQ2FyZFR5cGUge1xuICAgIFN0cmF0YWdlbSA9ICdTdHJhdGFnZW0nLFxuICAgIFBzeWNoaWNQb3dlciA9ICdQc3ljaGljIFBvd2VyJyxcbiAgICBUYWN0aWNhbE9iamVjdGl2ZSA9ICdUYWN0aWNhbCBPYmplY3RpdmUnLFxuICAgIFByYXllciA9ICdQcmF5ZXInXG59XG5cbmV4cG9ydCBlbnVtIEp1c3RpZmljYXRpb24ge1xuICAgIExlZnQsXG4gICAgUmlnaHQsXG4gICAgQ2VudGVyXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyVGV4dChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGhvdzogSnVzdGlmaWNhdGlvbik6IHZvaWQge1xuICAgIGlmIChjdHggJiYgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnOyAvLyBNYWtlIHRoZSB0ZXh0IG9yaWdpbiBhdCB0aGUgdXBwZXItbGVmdCB0byBtYWtlIHBvc2l0aW9uaW5nIGVhc2llclxuICAgICAgICBsZXQgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdHcgPSBtZWFzdXJlLndpZHRoO1xuICAgICAgICBjb25zdCB0aCA9IG1lYXN1cmUuYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50IC0gbWVhc3VyZS5hY3R1YWxCb3VuZGluZ0JveEFzY2VudDtcblxuICAgICAgICBpZiAoaG93ID09IEp1c3RpZmljYXRpb24uQ2VudGVyKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgeCArIE1hdGgubWF4KCh3IC0gdHcpIC8gMiwgMCksIHkgKyAoaCAtIHRoKSAvIDIsIHcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhvdyA9PSBKdXN0aWZpY2F0aW9uLkxlZnQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5ICsgKGggLSB0aCkgLyAyLCB3KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChob3cgPT0gSnVzdGlmaWNhdGlvbi5SaWdodCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHggKyB3IC0gdHcsIHkgKyAoaCAtIHRoKSAvIDIsIHcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyUGFyYWdyYXBoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGhvdzogSnVzdGlmaWNhdGlvbik6IG51bWJlciB7XG4gICAgbGV0IGN1clk6IG51bWJlciA9IHk7XG4gICAgaWYgKGN0eCAmJiB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBsZXQgbGluZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBjdXJyZW50TGluZTogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnOyAvLyBNYWtlIHRoZSB0ZXh0IG9yaWdpbiBhdCB0aGUgdXBwZXItbGVmdCB0byBtYWtlIHBvc2l0aW9uaW5nIGVhc2llclxuICAgICAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICAgICAgY29uc3Qgc3BhY2VXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dChcIiBcIikud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodE1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHRoID0gKGhlaWdodE1lYXN1cmUuYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50IC0gaGVpZ2h0TWVhc3VyZS5hY3R1YWxCb3VuZGluZ0JveEFzY2VudCkgKiAxLjU7XG5cbiAgICAgICAgdGV4dC5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAod29yZCkge1xuICAgICAgICAgICAgY29uc3QgbWVhc3VyZTogVGV4dE1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQod29yZCk7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCArIG1lYXN1cmUud2lkdGgpID4gdykge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goY3VycmVudExpbmUuam9pbihcIiBcIikpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlbmd0aCArPSBtZWFzdXJlLndpZHRoICsgc3BhY2VXaWR0aDtcbiAgICAgICAgICAgIGN1cnJlbnRMaW5lLnB1c2god29yZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3VycmVudExpbmUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGluZXMucHVzaChjdXJyZW50TGluZS5qb2luKFwiIFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBsIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBsZXQgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dChsKTtcbiAgICAgICAgICAgIGNvbnN0IHR3ID0gbWVhc3VyZS53aWR0aDtcbiAgICAgICAgICAgIGlmIChob3cgPT0gSnVzdGlmaWNhdGlvbi5DZW50ZXIpIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQobCwgeCArIE1hdGgubWF4KCh3IC0gdHcpIC8gMiwgMCksIGN1clksIHcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaG93ID09IEp1c3RpZmljYXRpb24uTGVmdCkge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChsLCB4LCBjdXJZLCB3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhvdyA9PSBKdXN0aWZpY2F0aW9uLlJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGwsIHggKyB3IC0gdHcsIGN1clksIHcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VyWSArPSB0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VyWTtcbn1cblxuQFNlcmlhbGl6YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FyZCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0V2lkdGhQeCA9IDQwMDtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0SGVpZ2h0UHggPSA1NjA7XG5cbiAgICBASnNvblByb3BlcnR5KCkgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IENhcmQuZGVmYXVsdFdpZHRoUHg7XG4gICAgQEpzb25Qcm9wZXJ0eSgpIHByaXZhdGUgX2hlaWdodDogbnVtYmVyID0gQ2FyZC5kZWZhdWx0SGVpZ2h0UHg7XG4gICAgQEpzb25Qcm9wZXJ0eSgpIHByaXZhdGUgX3NjYWxlOiBudW1iZXIgPSAxO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgpIHB1YmxpYyBfdHlwZTogQ2FyZFR5cGUgPSBDYXJkVHlwZS5TdHJhdGFnZW07XG5cbiAgICBASnNvblByb3BlcnR5KCkgcHVibGljIF9oZWFkaW5nOiBzdHJpbmcgPSBcIlN0cmF0YWdlbVwiO1xuICAgIEBKc29uUHJvcGVydHkoKSBwdWJsaWMgX3RpdGxlOiBzdHJpbmcgPSBcIjxUaXRsZT5cIjtcbiAgICBASnNvblByb3BlcnR5KCkgcHVibGljIF9mbHVmZjogc3RyaW5nID0gXCI8Rmx1ZmYgdGV4dD5cIjtcbiAgICBASnNvblByb3BlcnR5KCkgcHVibGljIF9ydWxlOiBzdHJpbmcgPSBcIjxSdWxlIHRleHQ+XCJcbiAgICBASnNvblByb3BlcnR5KCkgcHVibGljIF92YWx1ZTogc3RyaW5nID0gXCIxXCI7XG5cbiAgICBwcml2YXRlIGhlYWRlckZvbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoMjQqdGhpcy5fc2NhbGUpLnRvU3RyaW5nKCkgKyAncHggJyArICdUZWtvJztcbiAgICB9XG4gICAgcHJpdmF0ZSB0aXRsZUZvbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoMjgqdGhpcy5fc2NhbGUpLnRvU3RyaW5nKCkgKyAncHggJyArICdUZWtvJztcbiAgICB9XG4gICAgcHJpdmF0ZSBmbHVmZkZvbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdpdGFsaWMgJyArIE1hdGgucm91bmQoMTQqdGhpcy5fc2NhbGUpLnRvU3RyaW5nKCkgKyAncHggJyArICdzZXJpZic7XG4gICAgfVxuICAgIHByaXZhdGUgcnVsZUZvbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoMTQqdGhpcy5fc2NhbGUpLnRvU3RyaW5nKCkgKyAncHggJyArICdzZXJpZic7XG4gICAgfVxuICAgIHByaXZhdGUgZm9vdEZvbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoMTgqdGhpcy5fc2NhbGUpLnRvU3RyaW5nKCkgKyAncHggJyArICdUZWtvJztcbiAgICB9XG4gICAgcHJpdmF0ZSB2YWx1ZUZvbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoMjQqdGhpcy5fc2NhbGUpLnRvU3RyaW5nKCkgKyAncHggJyArICdUZWtvJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhdyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBtYXJnaW5QeDogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX3dpZHRoID0gY2FudmFzLndpZHRoIC0gMiAqIG1hcmdpblB4O1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBjYW52YXMuaGVpZ2h0IC0gMiAqIG1hcmdpblB4O1xuICAgICAgICB0aGlzLl9zY2FsZSA9IE1hdGgubWF4KHRoaXMuX3dpZHRoL0NhcmQuZGVmYXVsdFdpZHRoUHgsIHRoaXMuX2hlaWdodC9DYXJkLmRlZmF1bHRIZWlnaHRQeCk7XG5cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIEFwcGx5IG1hcmdpbiAtIG1vdmUgdGhlIG9yaWdpbiB0byB0aGUgbWFyZ2luLlxuICAgICAgICBjdHgudHJhbnNsYXRlKG1hcmdpblB4LCBtYXJnaW5QeCk7XG5cbiAgICAgICAgY3R4LmxpbmVKb2luID0gJ3JvdW5kJztcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3NpbHZlcic7XG4gICAgICAgIHRoaXMucm91bmRSZWN0KGN0eCwgMSwgMSwgdGhpcy5fd2lkdGggLSAyLCB0aGlzLl9oZWlnaHQgLSAyLCAyMCwgZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGJvcmRlclggPSB0aGlzLl93aWR0aCAqIDAuMDU7XG4gICAgICAgIGNvbnN0IGJvcmRlclkgPSBib3JkZXJYO1xuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IHRoaXMuX3dpZHRoIC0gMiAqIGJvcmRlclg7XG4gICAgICAgIGNvbnN0IGJvcmRlckhlaWdodCA9IHRoaXMuX2hlaWdodCAtIDIgKiBib3JkZXJZO1xuICAgICAgICBjb25zdCBib3JkZXJMaW5lV2lkdGggPSBNYXRoLmNlaWwoYm9yZGVyWCAqIDAuMyk7XG5cbiAgICAgICAgY29uc3QgdGV4dFJlZ2lvbkhlaWdodCA9IHRoaXMuX2hlaWdodCAvIDEyO1xuXG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmV5JztcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlckxpbmVXaWR0aDtcbiAgICAgICAgdGhpcy5kcmF3Qm9yZGVyKGN0eCwgYm9yZGVyWCwgYm9yZGVyWSwgYm9yZGVyV2lkdGgsIGJvcmRlckhlaWdodCwgdGV4dFJlZ2lvbkhlaWdodCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgY29uc3QgY2FyZEhlYWRlciA9IHRoaXMuX2hlYWRpbmcudG9Mb2NhbGVVcHBlckNhc2UoKTtcblxuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguZm9udCA9IHRoaXMuaGVhZGVyRm9udCgpO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBSZW5kZXJUZXh0KGN0eCwgY2FyZEhlYWRlciwgYm9yZGVyWCwgYm9yZGVyWSwgYm9yZGVyV2lkdGgsIHRleHRSZWdpb25IZWlnaHQsIEp1c3RpZmljYXRpb24uQ2VudGVyKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgICBsZXQgY3VyWSA9IGJvcmRlclkgKiAyICsgdGV4dFJlZ2lvbkhlaWdodDtcbiAgICAgICAgY29uc3QgbWFyZ2luWExlZnQgPSBib3JkZXJYICogMjtcbiAgICAgICAgY29uc3QgbWFyZ2luWFJpZ2h0ID0gdGhpcy5fd2lkdGggLSAyICogYm9yZGVyWDtcbiAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gbWFyZ2luWFJpZ2h0IC0gbWFyZ2luWExlZnQ7XG5cbiAgICAgICAgY3R4Lm1vdmVUbyhtYXJnaW5YTGVmdCwgY3VyWSk7XG4gICAgICAgIGN0eC5saW5lVG8obWFyZ2luWFJpZ2h0LCBjdXJZKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IHRoaXMuX3RpdGxlLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmZvbnQgPSB0aGlzLnRpdGxlRm9udCgpO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBSZW5kZXJUZXh0KGN0eCwgY2FyZFRpdGxlLCBtYXJnaW5YTGVmdCwgY3VyWSwgdGV4dFdpZHRoLCB0ZXh0UmVnaW9uSGVpZ2h0LCBKdXN0aWZpY2F0aW9uLkNlbnRlcik7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgY3VyWSArPSB0ZXh0UmVnaW9uSGVpZ2h0O1xuXG4gICAgICAgIGN0eC5tb3ZlVG8obWFyZ2luWExlZnQsIGN1clkpO1xuICAgICAgICBjdHgubGluZVRvKG1hcmdpblhSaWdodCwgY3VyWSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBjdXJZICs9IGJvcmRlclk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZsdWZmLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICBjdHguZm9udCA9IHRoaXMuZmx1ZmZGb250KCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGN1clkgPSBSZW5kZXJQYXJhZ3JhcGgoY3R4LCB0aGlzLl9mbHVmZiwgbWFyZ2luWExlZnQsIGN1clksIHRleHRXaWR0aCwgSnVzdGlmaWNhdGlvbi5DZW50ZXIpO1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIGN1clkgKz0gdGV4dFJlZ2lvbkhlaWdodCAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgc2VwYXJhdG9yIGljb24gKHVzaW5nIGxpbmUgZm9yIG5vdylcbiAgICAgICAgY3R4Lm1vdmVUbyhtYXJnaW5YTGVmdCwgY3VyWSk7XG4gICAgICAgIGN0eC5saW5lVG8obWFyZ2luWFJpZ2h0LCBjdXJZKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdXJZICs9IHRleHRSZWdpb25IZWlnaHQgLyAyO1xuXG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5ydWxlRm9udCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgY3VyWSA9IFJlbmRlclBhcmFncmFwaChjdHgsIHRoaXMuX3J1bGUsIG1hcmdpblhMZWZ0LCBjdXJZLCB0ZXh0V2lkdGgsIEp1c3RpZmljYXRpb24uQ2VudGVyKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgICBjdXJZID0gdGhpcy5faGVpZ2h0IC0gYm9yZGVyWSAqIDEuNSAtIHRleHRSZWdpb25IZWlnaHQ7XG5cbiAgICAgICAgaWYgKCh0aGlzLl90eXBlID09IENhcmRUeXBlLlN0cmF0YWdlbSkgfHwgKHRoaXMuX3R5cGUgPT0gQ2FyZFR5cGUuUHN5Y2hpY1Bvd2VyKSB8fCAodGhpcy5fdHlwZSA9PSBDYXJkVHlwZS5UYWN0aWNhbE9iamVjdGl2ZSkpIHtcblxuICAgICAgICAgICAgY29uc3QgY3BCb3hTaXplID0gdGV4dFJlZ2lvbkhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heChNYXRoLmNlaWwodGhpcy5fc2NhbGUpLCAxLjApO1xuICAgICAgICAgICAgdGhpcy5yb3VuZFJlY3QoY3R4LCBtYXJnaW5YTGVmdCAqIDIgKyBjcEJveFNpemUsIGN1clksIHRleHRXaWR0aCAtIDIgKiBtYXJnaW5YTGVmdCAtIGNwQm94U2l6ZSwgdGV4dFJlZ2lvbkhlaWdodCAtIDYsIDgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICBjdHguZm9udCA9IHRoaXMuZm9vdEZvbnQoKTtcbiAgICAgICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBcbiAgICAgICAgICAgIGxldCBmb290VGV4dCA9ICdDT01NQU5EIFBPSU5UUyc7XG4gICAgICAgICAgICBpZiAodGhpcy5fdHlwZSA9PT0gQ2FyZFR5cGUuU3RyYXRhZ2VtKSB7XG4gICAgICAgICAgICAgICBmb290VGV4dCA9ICdDT01NQU5EIFBPSU5UUyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl90eXBlID09PSBDYXJkVHlwZS5Qc3ljaGljUG93ZXIpIHtcbiAgICAgICAgICAgICAgICBmb290VGV4dCA9ICdXQVJQIENIQVJHRSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl90eXBlID09PSBDYXJkVHlwZS5UYWN0aWNhbE9iamVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvb3RUZXh0ID0gJ09CSkVDVElWRSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZW5kZXJUZXh0KGN0eCwgZm9vdFRleHQsIG1hcmdpblhMZWZ0ICogMiArIGNwQm94U2l6ZSwgY3VyWSwgdGV4dFdpZHRoIC0gMiAqIG1hcmdpblhMZWZ0IC0gY3BCb3hTaXplLCB0ZXh0UmVnaW9uSGVpZ2h0IC0gNiwgSnVzdGlmaWNhdGlvbi5DZW50ZXIpXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjYmEyMjIyJztcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heChNYXRoLmNlaWwodGhpcy5fc2NhbGUpLCAxLjApO1xuICAgICAgICAgICAgdGhpcy5iZXZlbFJlY3QoY3R4LCBtYXJnaW5YTGVmdCAqIDIsIGN1clkgLSAzLCBjcEJveFNpemUsIGNwQm94U2l6ZSwgNSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSB0aGlzLnZhbHVlRm9udCgpO1xuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZjVmMmYyJztcbiAgICAgICAgICAgIFJlbmRlclRleHQoY3R4LCB0aGlzLl92YWx1ZSwgbWFyZ2luWExlZnQgKiAyLCBjdXJZIC0gMywgY3BCb3hTaXplLCBjcEJveFNpemUsIEp1c3RpZmljYXRpb24uQ2VudGVyKTtcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fdHlwZSA9PSBDYXJkVHlwZS5QcmF5ZXIpIHtcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gZG8gZm9yIHByYXllcnMuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ2FyZDogXCIgKyB0aGlzLl90eXBlLnRvU3RyaW5nKCkgKyBcIiAgVGl0bGU6IFwiICsgdGhpcy5fdGl0bGUgKyBcIiAgUnVsZTogXCIgKyB0aGlzLl9ydWxlICsgXCIgIENQOiBcIiArIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcm91bmRSZWN0KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBmaWxsOiBib29sZWFuLCBzdHJva2U6IGJvb2xlYW4pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHggKyByYWRpdXMsIHkpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3Ryb2tlKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJldmVsUmVjdChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiZXZlbDogbnVtYmVyLCBmaWxsOiBib29sZWFuLCBzdHJva2U6IGJvb2xlYW4pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHgsIHkgKyBiZXZlbCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIGhlaWdodCAtIGJldmVsKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgYmV2ZWwsIHkgKyBoZWlnaHQpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIGJldmVsLCB5ICsgaGVpZ2h0KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSBiZXZlbCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgYmV2ZWwpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIGJldmVsLCB5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgYmV2ZWwsIHkpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJva2UpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd0JvcmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBiZXZlbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYmV2ZWxSZWN0KGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgYmV2ZWwsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5ICsgYmV2ZWwpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGJldmVsKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=