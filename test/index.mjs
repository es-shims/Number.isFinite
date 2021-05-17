import isFinite, * as isFiniteModule from 'number.isfinite';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(isFinite, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(isFiniteModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = isFiniteModule;
	t.equal(await import('number.isfinite/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('number.isfinite/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('number.isfinite/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
