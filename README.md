<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# headercase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a string to HTTP header case.

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-headercase
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var headercase = require( '@stdlib/string-headercase' );
```

#### headercase( str )

Converts a string to HTTP header case.

```javascript
var out = headercase( 'foo bar' );
// returns 'Foo-Bar'

out = headercase( 'IS_MOBILE' );
// returns 'Is-Mobile'

out = headercase( 'Hello World!' );
// returns 'Hello-World'

out = headercase( '--foo-bar--' );
// returns 'Foo-Bar'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var headercase = require( '@stdlib/string-headercase' );

var str = 'Hello World!';
var out = headercase( str );
// returns 'Hello-World'

str = 'HELLO WORLD!';
out = headercase( str );
// returns 'Hello-World'

str = 'To be, or not to be: that is the question.';
out = headercase( str );
// returns 'To-Be-Or-Not-To-Be-That-Is-The-Question'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-headercase-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: headercase [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beep\nfoo_bar' | headercase --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nfoo_bar' | headercase --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ headercase 'hello world!'
Hello-World
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beEp booP' | headercase
Beep-Boop
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tfoo_bar' | headercase --split '\t'
Beep
Foo-Bar
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-headercase.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-headercase

[test-image]: https://github.com/stdlib-js/string-headercase/actions/workflows/test.yml/badge.svg?branch=v0.0.2
[test-url]: https://github.com/stdlib-js/string-headercase/actions/workflows/test.yml?query=branch:v0.0.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-headercase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-headercase?branch=v0.0.2

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-headercase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-headercase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-headercase#cli
[cli-url]: https://github.com/stdlib-js/string-headercase/tree/cli
[@stdlib/string-headercase]: https://github.com/stdlib-js/string-headercase/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-headercase/tree/deno
[umd-url]: https://github.com/stdlib-js/string-headercase/tree/umd
[esm-url]: https://github.com/stdlib-js/string-headercase/tree/esm
[branches-url]: https://github.com/stdlib-js/string-headercase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-headercase/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
