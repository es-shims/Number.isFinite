'use strict';

module.exports = function (isFinite, t) {
	t.test('Number.isFinite', function (st) {
		st.equal(isFinite(Infinity), false);
		st.equal(isFinite(-Infinity), false);
		st.equal(isFinite(NaN), false);
		st.equal(isFinite(4), true);
		st.equal(isFinite(-4), true);
		st.equal(isFinite(4.5), true);
		st.equal(isFinite('hi'), false);
		st.equal(isFinite('1.3'), false);
		st.equal(isFinite('51'), false);
		st.equal(isFinite(0), true);
		st.equal(isFinite(-0), true);
		st.equal(isFinite({ valueOf: function () { return 3; } }), false);
		st.equal(isFinite({ valueOf: function () { throw new Error(); } }), false);

		st.end();
	});
};
