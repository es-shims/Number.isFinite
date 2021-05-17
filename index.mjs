import callBind from 'call-bind';

import getPolyfill from 'number.isfinite/polyfill';

export default callBind(getPolyfill(), Number);

export { default as getPolyfill } from 'number.isfinite/polyfill';
export { default as implementation } from 'number.isfinite/implementation';
export { default as shim } from 'number.isfinite/shim';
