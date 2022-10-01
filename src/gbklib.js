const { encode, decode } = require('fast-gbk')();

window.encodeToGBKArray = encode;
window.decodefromGBKArray = decode;
