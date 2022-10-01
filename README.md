# utf8-bundule-project 导出GBK编码成UTF8的函数
UTF 8 bundle test project


## 使用yarn安装包

yarn add fast-gbk


## 写代码 src/gbklib.js

```javascript
const { encode, decode } = require('fast-gbk')();

window.encodeToGBKArray = encode;
window.decodefromGBKArray = decode;

```
## 使用browserify导出


```
browserify  src/gbklib.js -o gbk-lib-bundle.js
```

## 编写测试的HTML test.html



```html
<!doctype html>
<html>
<head>
    <script src='gbk-lib-bundle.js'></script>
</head>
<body>
<div id="root"></div>
</body>
<script>
    alert(encodeToGBKArray("刘洋"));
    alert(decodefromGBKArray(encodeToGBKArray("刘洋")));
</script>

</html>
```
