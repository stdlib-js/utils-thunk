// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r){var s,e;if(!t(r))throw new TypeError(n("invalid argument. First argument must be a function. Value: `%s`.",r));for(s=[],e=1;e<arguments.length;e++)s.push(arguments[e]);return function(){return r.apply(null,s)}}export{r as default};
//# sourceMappingURL=index.mjs.map
