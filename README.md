<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# thunk

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a [thunk][thunk].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
thunk = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-thunk@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-thunk/tags). For example,

```javascript
thunk = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-thunk@v0.0.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var thunk = require( 'path/to/vendor/umd/utils-thunk/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-thunk@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.thunk;
})();
</script>
```

#### thunk( fcn\[, ...args] )

Returns a [thunk][thunk] (i.e., an anonymous function having arity `0` and which invokes a provided function with specified arguments).

```javascript
var add = require( '@stdlib/math-base-ops-add' );

var f = thunk( add, 2.0, 3.0 );
// returns <Function>

var v = f();
// returns 5

// ...

v = f();
// returns 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-decorate-after@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var thunk = require( '@stdlib/utils-thunk' );

function log( v ) {
    console.log( v );
}

// Create a PRNG for generating uniformly distributed pseudorandom integers:
var randi = discreteUniform( 100, 1000 );

// Randomly delay evaluation of various thunks...
var i;
for ( i = 0; i < 10; i++ ) {
    setTimeout( decorateAfter( thunk( add, i, i+1 ), 0, log ), randi() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-thunk.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-thunk

[test-image]: https://github.com/stdlib-js/utils-thunk/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/utils-thunk/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-thunk/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-thunk?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-thunk.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-thunk/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-thunk/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-thunk/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-thunk/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-thunk/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-thunk/main/LICENSE

[thunk]: https://en.wikipedia.org/wiki/Thunk

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
