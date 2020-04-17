// 引入模板，npm什么就引入什么
const template = require('art-template');
const fs = require('fs');
const temStr = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <script type="text/template" id='tp'>
        <p>大家好，我叫{{name}}</p>
        <p>今年{{age}}岁</p>
        <p>来自{{address}}</p>
        <p>hobby:{{ each hobbies }} {{ $value }} {{ /each }}</p>
      </script>
    </body>
    </html>`;
  //调用模板对象的render方法对属性赋值
const ref = template.render(temStr, {
  name: 'byron',
  age: 23,
  address: '山西省',
  hobbies: ['hello', 'byron', 'dell']
})

console.log(ref);
