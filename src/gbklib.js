const { encode, decode } = require('fast-gbk')();

const str = '你好，世界！';
 
const arr = encode(str);
 
arr.forEach(v=>{
    //console.log(v);
})

//console.log(decode(arr));

window.encodeToGBKArray = encode;
window.decodefromGBKArray = decode;
