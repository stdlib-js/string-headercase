/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var headercase = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof headercase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			headercase( value );
		};
	}
});

tape( 'the function converts a string to HTTP header case', function test( t ) {
	var expected;
	var actual;

	expected = 'Foo-Bar';
	actual = headercase( 'foo_bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Foo-Bar';
	actual = headercase( 'foo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Foo-Bar';
	actual = headercase( 'foo.bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Hello-World';
	actual = headercase( 'Hello World!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'B-Eep-B-Oop';
	actual = headercase( 'bEep bOOP' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string with Unicode characters to HTTP header case', function test( t ) {
	var expected;
	var actual;

	expected = 'Fóo-Bar';
	actual = headercase( 'fóo_bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Fóo-Bar';
	actual = headercase( 'fóo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Fóo-Bar';
	actual = headercase( 'fóoBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Héllo-Wórld';
	actual = headercase( 'héllo Wórld!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in camel case to HTTP header case', function test( t ) {
	var expected;
	var actual;

	expected = 'Foo-Bar';
	actual = headercase( 'fooBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mostly-Some-Case';
	actual = headercase( 'isMostlySomeCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mobile';
	actual = headercase( 'isMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Node-Repl';
	actual = headercase( 'isNodeRepl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in constant case to HTTP header case', function test( t ) {
	var expected;
	var actual;

	expected = 'Foo-Bar';
	actual = headercase( 'FOO_BAR' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mostly-Constant-Case';
	actual = headercase( 'IS_MOSTLY_CONSTANT_CASE' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mobile';
	actual = headercase( 'IS_MOBILE' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Node-Repl';
	actual = headercase( 'IS_NODE_REPL' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in kebab case to HTTP header case', function test( t ) {
	var expected;
	var actual;

	expected = 'Foo-Bar';
	actual = headercase( 'foo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mostly-Some-Case';
	actual = headercase( 'is-mostly-some-case' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mobile';
	actual = headercase( 'is-mobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Node-Repl';
	actual = headercase( 'is-node-repl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in pascal case to HTTP header case', function test( t ) {
	var expected;
	var actual;

	expected = 'Foo-Bar';
	actual = headercase( 'FooBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mostly-Some-Case';
	actual = headercase( 'IsMostlySomeCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mobile';
	actual = headercase( 'IsMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Node-Repl';
	actual = headercase( 'IsNodeRepl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function leaves a string that is already in dot case unchanged', function test( t ) {
	var expected;
	var actual;

	expected = 'Foo-Bar';
	actual = headercase( 'Foo-Bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mostly-Some-Case';
	actual = headercase( 'Is-Mostly-Some-Case' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Mobile';
	actual = headercase( 'Is-Mobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'Is-Node-Repl';
	actual = headercase( 'Is-Node-Repl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
