'use strict';

var isFinite = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(isFinite, t);

	t.end();
});
