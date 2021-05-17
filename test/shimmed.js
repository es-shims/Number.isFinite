'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Number.isFinite.length, 1, 'Number.isFinite has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Number.isFinite.name, 'isFinite', 'Number.isFinite has name "isFinite"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'isFinite'), 'Number.isFinite is not enumerable');
		et.end();
	});

	runTests(Number.isFinite, t);

	t.end();
});
