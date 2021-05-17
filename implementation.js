'use strict';

var globalIsFinite = isFinite;

module.exports = function isFinite(value) {
	return typeof value === 'number' && globalIsFinite(value);
};
